import { appLogo } from "../helpers/assets";


const Navbar = () => {

    return (
        <div className="w-full flex items-center justify-between pt-[20px] pb-10 ">
            <img className="h-[56]" src={appLogo} />
            <div className="flex items-center gap-10">
                <div>
                    <a href="" className="font-normal text-[20px]">About Us</a>
                </div>
                <div>
                    <a href="" className="font-normal text-[20px]">Services</a>
                </div>
                <div>
                    <a href="" className="font-normal text-[20px]">Use Cases</a>
                </div>
                <div>
                    <a href="" className="font-normal text-[20px]">Pricing</a>
                </div>
                <div>
                    <a href="" className="font-normal text-[20px]">Blog</a>
                </div>
                <button className="border rounded-smallRadius py-4 px-[25px]">
                    <span className="font-normal text-[20px]">Request a quote</span>
                </button>
            </div>
        </div>
    );
}

export default Navbar;