import {
  appLogo2,
  SocialLightFb,
  SocialLightIn,
  SocialLightX,
} from "../helpers/assets";

const FooterSection = () => {
  return (
    <div className="mt-[140px] bg-secondary rounded-tr-largeRadius rounded-tl-largeRadius p-[55px]">
      <div className="flex justify-between items-center gap-[24px]  xl:flex-row flex-col">
        <img className="h-[56] w-56" src={appLogo2} />
        <div className="flex flex-col md:flex-row text-white text-[18px] items-center gap-5">
          <a href="" className="">
            About Us
          </a>
          <a href="" className="">
            Services
          </a>
          <a href="" className="">
            Use Cases
          </a>
          <a href="" className="">
            Pricing
          </a>
          <a href="" className="">
            Blog
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <img src={SocialLightIn} alt="" />
          <img src={SocialLightFb} alt="" />
          <img src={SocialLightX} alt="" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[50px]  xl:gap-[100px] items-center mt-[60px]">
        <div className="flex flex-col gap-[28px] items-center lg:items-start ">
          <div className="bg-primary px-[7px]  max-w-max rounded-smallRadius">
            <h4 className="text-secondary text-[20px] font-medium">
              Contact Us:
            </h4>
          </div>
          <div className="gap-[28px] flex flex-col lg:flex-row xl:flex-col text-white">
            <p className="text-[18px] text-center lg:text-start ">
              Email: info@positivus.com
            </p>
            <p className="text-[18px] text-center lg:text-start">
              Phone: 555-567-8901
            </p>
            <p className="text-[18px] text-center lg:text-start">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className="flex gap-5 bg-[#292A32] px-[40px] py-[58px] flex-col md:flex-row  items-center rounded-smallRadius w-full">
          <input
            className="px-3 rounded-smallRadius h-[58px] w-full sm:max-w-[75%]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <button className="bg-primary px-[35px] h-[58px] rounded-smallRadius">
            <span>Subscribe to news</span>
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-white my-[50px]"></div>
      <div className="flex  flex-col md:flex-row items-center gap-10 text-white">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default FooterSection;
