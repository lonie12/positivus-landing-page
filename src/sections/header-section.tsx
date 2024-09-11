import { amazonLogo, campIllustration, dribbbleLogo, hubspotLogo, netflixLogo, notionLogo, zoomLogo } from "../helpers/assets";


const HeaderSection = () => {

    return (
        <>
            <div className="flex grid-cols-2 gap-[100px]">
                <div className="flex flex-col gap-[30px]">
                    <div className="font-medium text-[60px] leading-[64px]">Navigating the digital landscape for success</div>
                    <div className="text-[20px] ">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </div>
                    <button className="max-w-max py-4 px-6 bg-secondary rounded-smallRadius">
                        <span className="text-white">Book a consultation</span>
                    </button>
                </div>

                <img className="md:max-w-[42%]" src={campIllustration} />
            </div>
            <div className="flex justify-between items-center my-[60px]">
                <img src={amazonLogo} alt="" />
                <img src={dribbbleLogo} alt={""} />
                <img src={hubspotLogo} alt={""} />
                <img src={notionLogo} alt={""} />
                <img src={netflixLogo} alt={""} />
                <img src={zoomLogo} alt={""} />
            </div>
        </>
        // <div className="mx-auto flex flex-col md:flex-row md:gap-[100px] items-center">
        //     <div className="flex flex-col md:w-1/2 text-left gap-35 border">
        //         <h1 className="text-[60px] leading-[64px] font-medium">
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
}

export default HeaderSection;

