import { PageBanner } from "../components/PageBanner";
import { Services } from "../components/Services";
import { SERVICES_SECTION, IMAGES } from "../content";

export default function ServicesPage() {
  return (
    <>
      <PageBanner image={IMAGES.servicesBanner} title={SERVICES_SECTION.heading} />
      <Services />
    </>
  );
}
