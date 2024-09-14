import Navbar from "./components/nav-bar";
import CaseStudySection from "./sections/case-study-section";
import ContactUsSection from "./sections/contact-us-section";
import FooterSection from "./sections/footer-section";
import HeaderSection from "./sections/header-section";
import ProposalSection from "./sections/proposal-section";
import ServiceSection from "./sections/services-section";
import TeamSection from "./sections/team-section";
import TestimonialsSection from "./sections/testimonials-section";
import WorkingProcessSession from "./sections/working-process-section";
import "./styles/index.min.css";

function App() {
  return (
    <>
      <div className="max-width-container px-[15px] border">
        <Navbar />
        <HeaderSection />
        <ServiceSection />
        <ProposalSection />
        <CaseStudySection />
        <WorkingProcessSession />
        <TeamSection />
        <TestimonialsSection />
        <ContactUsSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
