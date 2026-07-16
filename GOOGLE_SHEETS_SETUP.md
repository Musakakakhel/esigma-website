# Connecting the Contact Form to Google Sheets

The contact form on `/contact` posts submissions to a Google Apps Script Web
App, which routes each one into its own tab based on inquiry type — and each
tab only has the columns relevant to that type.

Spreadsheet: `Esigma Website Backend`
(`https://docs.google.com/spreadsheets/d/1xuvHnsU5EiNpYPP0m2gXOf_aVYSQXfN1DL_UW7CPwEQ`)

## Tab layout

- **General Inquiries** (from "Contact Us") —
  `Timestamp | Name | Company | Email | Phone | Message`
- **Consultations** (from "Request a Consultation") —
  `Timestamp | Name | Company | Email | Phone | Message`
- **Demo Requests** (from "Schedule a Demonstration") —
  `Timestamp | Name | Company | Email | Phone | Preferred Date | Preferred Time | Message`

Only Demo Requests collects a date/time, since only that flow shows the
calendar picker on the site — so only that tab has those columns.

## Apps Script code

```javascript
const SHEET_ID = "1xuvHnsU5EiNpYPP0m2gXOf_aVYSQXfN1DL_UW7CPwEQ";

const TAB_BY_TYPE = {
  "General Inquiry": "General Inquiries",
  "Request a Consultation": "Consultations",
  "Schedule a Demonstration": "Demo Requests",
};

const HEADERS_BY_TAB = {
  "General Inquiries": ["Timestamp", "Name", "Company", "Email", "Phone", "Message"],
  "Consultations": ["Timestamp", "Name", "Company", "Email", "Phone", "Message"],
  "Demo Requests": [
    "Timestamp", "Name", "Company", "Email", "Phone",
    "Preferred Date", "Preferred Time", "Message",
  ],
};

const COLUMN_WIDTHS_BY_TAB = {
  "General Inquiries": [160, 150, 150, 190, 120, 320],
  "Consultations": [160, 150, 150, 190, 120, 320],
  "Demo Requests": [160, 150, 150, 190, 120, 120, 100, 320],
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const tabName = TAB_BY_TYPE[data.inquiryType] || "General Inquiries";
    const sheet = getOrCreateSheet_(tabName);

    const row = [new Date(), data.name || "", data.company || "", data.email || "", data.phone || ""];
    if (tabName === "Demo Requests") {
      row.push(data.preferredDate || "", data.preferredTime || "");
    }
    row.push(data.message || "");

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  setupAllSheets();
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Esigma contact form endpoint is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Creates and styles all three tabs. Runs automatically on doGet, or run it
// manually from the Apps Script editor: pick "setupAllSheets" in the
// function dropdown next to Run, then click Run.
function setupAllSheets() {
  Object.values(TAB_BY_TYPE).forEach(getOrCreateSheet_);
}

function getOrCreateSheet_(tabName) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) sheet = ss.insertSheet(tabName);
  formatSheet_(sheet, tabName);
  return sheet;
}

function formatSheet_(sheet, tabName) {
  const headers = HEADERS_BY_TAB[tabName];
  const widths = COLUMN_WIDTHS_BY_TAB[tabName];
  const headerRange = sheet.getRange(1, 1, 1, headers.length);

  // Always keep the header row in sync with the current column layout.
  headerRange.setValues([headers]);
  headerRange
    .setFontWeight("bold")
    .setFontColor("#ffffff")
    .setBackground("#0a0a0a")
    .setHorizontalAlignment("left");

  // Clear any leftover header text from a previous layout with more columns.
  sheet.getRange(1, headers.length + 1, 1, 5).clearContent();

  sheet.setFrozenRows(1);
  widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));
}
```

## Deploying / re-running

**If you already ran `setupAllSheets` once with the old code:** the three
tabs exist but still have the old 8-column headers on all of them. Paste
this new code in and **run `setupAllSheets` again** (function dropdown next
to Run → Run) — it will overwrite the header row on each tab to match its
correct layout above and clear the stale extra columns. This only touches
row 1, so it's safe even if you've since added real submissions.

**If you haven't deployed yet:**

1. Paste this code into your Apps Script project.
2. Run `setupAllSheets` once (function dropdown next to Run → Run), or
   deploy first and open the `/exec` URL in a browser once — either creates
   and styles the three tabs.
3. **Deploy → New deployment → Web app**, with **Execute as: Me** and **Who
   has access: Anyone**.
4. Authorize when prompted (click through the "unsafe" warning — it's your
   own script).
5. Send me the deployed URL (ends in `/exec`).

## Wire it into the site

Open `src/content.js` and paste the URL into:

```javascript
export const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/XXXXXXXX/exec";
```

## Notes

- If you change the script again after deploying, you must create a **new
  version** under Deploy → Manage deployments → edit for the change to take
  effect on the live URL. Just saving the code doesn't update it.
- The endpoint is public (anyone with the URL can POST to it), which is
  required for a client-side form with no backend.
