import SectionTitle from "../components/section-title";
import { contactIllustration } from "../helpers/assets";

const ContactUsSection = () => {
  return (
    <div className="mt-[60px] sm:mt-[140px]">
      <SectionTitle
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="rounded-largeRadius flex justify-between px-[20px] md:px-[50px] py-[40px] bg-[#F3F3F3] overflow-hidden mt-10 sm:mt-20 relative">
        <div className="flex flex-col gap-10 w-full lg:w-[60%]">
          <div className="flex items-center gap-[35px]">
            <div className="flex items-center gap-[14px]">
              <input
                className="border accent-primary"
                type="radio"
                name="contact-us"
                value="contactUs1"
                id="contact-us"
              />
              <span>Say Hi</span>
            </div>
            <div className="flex items-center gap-[14px]">
              <input
                className="border accent-primary"
                type="radio"
                name="contact-us"
                value="contactUs2"
                id="contact-us"
              />
              <span>Get a Quote</span>
            </div>
          </div>
          <div className="flex flex-col gap-[25px] w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                className="outline-0 border border-secondary px-3 rounded-smallRadius h-[59px]"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name">Email*</label>
              <input
                placeholder="Email"
                className="outline-0 border border-secondary px-3 rounded-smallRadius h-[59px]"
                type="email"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name">Message*</label>
              <textarea
                placeholder="Message"
                className="outline-0 border border-secondary px-3 rounded-smallRadius min-h-[120px] "
              />
            </div>
          </div>
        </div>
        <div className="relative right-[-220px]">
          <img
            className="hidden lg:w-[650px] lg:block"
            src={contactIllustration}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
