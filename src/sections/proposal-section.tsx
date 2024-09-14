import { proposalFigure } from "../helpers/assets";

const ProposalSection = () => {
  return (
    <div className="flex flex-row bg-[#F3F3F3] rounded-largeRadius px-[20px] xl:px-[60px] py-[24px] xl:py-[0px] my-[140px] items-center">
      <div className="flex flex-col gap-[26px] border">
        <div>
          <h3 className="font-medium text-[30px]">Let’s make things happen</h3>
        </div>
        <div>
          <p className="text-[18px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
        </div>
        <div>
          <button className="max-w-max py-4 px-6 bg-secondary rounded-smallRadius">
            <span className="text-white">Get your free proposal</span>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img className="" src={proposalFigure} />
      </div>
    </div>
  );
};

export default ProposalSection;
