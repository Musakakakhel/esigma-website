import { PageBanner } from "../components/PageBanner";
import { Technology } from "../components/Technology";
import { TECHNOLOGY_SECTION, IMAGES } from "../content";

export default function TechnologyPage() {
  return (
    <>
      <PageBanner image={IMAGES.technologyBanner} title={TECHNOLOGY_SECTION.heading} />
      <Technology />
    </>
  );
}
