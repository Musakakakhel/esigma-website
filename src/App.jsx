import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";
import WhyUsPage from "./pages/WhyUsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="technology/:slug" element={<TechnologyDetailPage />} />
          <Route path="why-us" element={<WhyUsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
