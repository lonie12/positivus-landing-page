import { appLogo, SocialLightFb, SocialLightIn, SocialLightX } from "../helpers/assets"



const FooterSection = () => {

    return (
        <div className="mt-[140px] bg-secondary rounded-tr-largeRadius rounded-tl-largeRadius p-[55px]">
            <div className="flex justify-between">
                <img className="h-[56]" src={appLogo} />
                <div className="flex text-white text-[18px] items-center gap-5">
                    <a href="" className="">About Us</a>
                    <a href="" className="">Services</a>
                    <a href="" className="">Use Cases</a>
                    <a href="" className="">Pricing</a>
                    <a href="" className="">Blog</a>
                    <div className="flex gap-5 items-center ml-10">
                        <img src={SocialLightIn} alt="" />
                        <img src={SocialLightFb} alt="" />
                        <img src={SocialLightX} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex gap-[100px] items-center mt-[60px]">
                <div className="flex flex-col gap-[28px] text-white">
                    <div className="bg-primary px-[7px] max-w-max rounded-smallRadius">
                        <h4 className="text-secondary text-[20px] font-medium">Contact Us:</h4>
                    </div>
                    <p className="text-[18px]">Email: info@positivus.com</p>
                    <p className="text-[18px]">Phone: 555-567-8901</p>
                    <p className="text-[18px]">
                        Address: 1234 Main St
                        Moonstone City, Stardust State 12345
                    </p>
                </div>
                <div className="flex gap-5 bg-[#292A32] px-[40px] py-[58px] md:w-[60%] rounded-smallRadius">
                    <input className="px-3 rounded-smallRadius h-[58px]" type="email" placeholder="Email" name="email" />
                    <button className="bg-primary px-[35px] h-[58px] rounded-smallRadius">
                        <span>Subscribe to news</span>
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-white my-[50px]"></div>
            <div className="flex items-center gap-10 text-white">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}

export default FooterSection;