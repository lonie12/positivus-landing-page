import {
  amazonLogo,
  campIllustration,
  dribbbleLogo,
  hubspotLogo,
  netflixLogo,
  notionLogo,
  zoomLogo,
} from "../helpers/assets";

const HeaderSection = () => {
  return (
    <>
      <div className="flex grid-cols-2 gap-[100px]">
        <div className="flex flex-col gap-[30px]">
          <div className="font-medium text-60-title md:leading-[64px] text-start md:text-center lg:text-start">
            Navigating the digital landscape for success
          </div>
          <img
            className="sm:max-w-[60%] flex lg:hidden "
            style={{ alignSelf: "center" }}
            src={campIllustration}
          />
          <div className="text-20-title text-start md:text-center lg:text-start ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <div className="flex flex-col sm:flex-row gap-[20px] justify-center items-center lg:justify-start ">
            {" "}
            <button className="md:max-w-max w-full py-4 px-6  bg-secondary rounded-smallRadius">
              <span className="text-[#fff] text-18-title">
                Book a consultation
              </span>
            </button>
            <button className="flex xl:hidden w-full   md:max-w-max border rounded-smallRadius py-4 px-6">
              <span className=" text-[#000] text-18-title">
                Request a quote
              </span>
            </button>
          </div>
        </div>

        <img className="md:max-w-[45%] hidden lg:flex" src={campIllustration} />
      </div>
      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 place-items-center lg:grid-cols-3 xl:grid-cols-6 justify-between items-center my-[60px]">
        <img src={amazonLogo} alt="" />
        <img src={dribbbleLogo} alt="" />
        <img src={hubspotLogo} alt="" />
        <img src={notionLogo} alt="" />
        <img src={netflixLogo} alt="" />
        <img src={zoomLogo} alt="" />
      </div>
    </>
    // <div className="mx-auto flex flex-col md:flex-row md:gap-[100px] items-center">
    //     <div className="flex flex-col md:w-1/2 text-left gap-35 border">
    //         <h1 className="text-60-title leading-[64px] font-medium">
    //             Navigating the <br /> digital landscape <br /> for success
    //         </h1>
    //         <p className="text-gray-600">
    //             Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
    //         </p>
    //         <button className="max-w-max bg-secondary text-white px-6 py-3 rounded-md hover:bg-gray-800">
    //             Book a consultation
    //         </button>
    //     </div>

    //     <div className="md:w-1/2 mt-10 md:mt-0 border">
    //         <img src={campIllustration} alt="Digital marketing illustration" className="mx-auto" />
    //     </div>
    // </div>
  );
};

export default HeaderSection;
