import { PageBanner } from "../components/PageBanner";
import { WhyUs } from "../components/WhyUs";
import { Benefits } from "../components/Benefits";
import { Industries } from "../components/Industries";
import { WHY_US_SECTION, IMAGES } from "../content";

export default function WhyUsPage() {
  return (
    <>
      <PageBanner image={IMAGES.whyUsBanner} title={WHY_US_SECTION.heading} />
      <WhyUs />
      <Benefits />
      <Industries />
    </>
  );
}
