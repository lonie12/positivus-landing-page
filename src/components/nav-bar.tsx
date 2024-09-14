import { useState } from "react";
import { appLogo } from "../helpers/assets";
import { CloseCircle, TextalignJustifycenter } from "iconsax-react";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log("first", isSidebarOpen);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between pt-[20px] pb-10 ">
        <img className="h-[56]" src={appLogo} />
        <div className="hidden lg:flex items-center gap-10">
          <div>
            <a href="" className="font-normal text-20-title">
              About Us
            </a>
          </div>
          <div>
            <a href="" className="font-normal text-20-title">
              Services
            </a>
          </div>
          <div>
            <a href="" className="font-normal text-20-title">
              Use Cases
            </a>
          </div>
          <div>
            <a href="" className="font-normal text-20-title">
              Pricing
            </a>
          </div>
          <div>
            <a href="" className="font-normal text-20-title">
              Blog
            </a>
          </div>
          <button className="hidden xl:flex border rounded-smallRadius py-4 px-[25px]">
            <span className="font-normal text-20-title">Request a quote</span>
          </button>
        </div>
        <div className="lg:hidden">
          <TextalignJustifycenter
            size="32"
            color="#000"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <div>
        {isSidebarOpen && (
          <div className="sidebar">
            <div className="px-12 py-16 z-20 " onClick={toggleSidebar}>
              <CloseCircle size="32" color="#fff" />
            </div>
            <div className=" flex flex-col gap-[24px] right-0  top-0 bg-neutral-900  h-full p-12 pb-2 rounded-s-2xl">
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  About Us
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Services
                </a>
              </div>
              <div>
                <a href="" className="font-normal  text-[#fff] text-20-title">
                  Use Cases
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Pricing
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Blog
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
