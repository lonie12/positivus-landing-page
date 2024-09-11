import Navbar from "./components/nav-bar"
import CaseStudySection from "./sections/case-study-section"
import ContactUsSection from "./sections/contact-us-section"
import FooterSection from "./sections/footer-section"
import HeaderSection from "./sections/header-section"
import ProposalSection from "./sections/proposal-section"
import ServiceSection from "./sections/services-section"
import TeamSection from "./sections/team-section"
import TestimonialsSection from "./sections/testimonials-section"
import WorkingProcessSession from "./sections/working-process-section"


function App() {

  return (
    <div className="mx-auto md:px-[80px]">
      <Navbar />
      <HeaderSection />
      <ServiceSection />
      <ProposalSection />
      <CaseStudySection />
      <WorkingProcessSession />
      <TeamSection />
      <TestimonialsSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  )
}

export default App
