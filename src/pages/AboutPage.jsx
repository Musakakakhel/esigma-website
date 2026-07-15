import { PageBanner } from "../components/PageBanner";
import { About } from "../components/About";
import { DeliveryModels } from "../components/DeliveryModels";
import { ABOUT, IMAGES } from "../content";

export default function AboutPage() {
  return (
    <>
      <PageBanner image={IMAGES.aboutBanner} title={ABOUT.heading} />
      <About />
      <DeliveryModels />
    </>
  );
}
