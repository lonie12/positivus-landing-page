import { IconAdd, IconMinus } from "../helpers/assets";
import { primaryColor } from "../helpers/colors";

interface ProcessItemProps {
  index: number;
  title: string;
  description: string;
  opened: boolean;
}

const ProcessItem = ({
  index,
  title,
  description,
  opened,
}: ProcessItemProps) => {
  const backColor = opened ? primaryColor : "#F3F3F3";
  const handleOpenIcon = opened ? IconMinus : IconAdd;
  return (
    <div
      className={`bg-[${backColor}] p-[24px] md:px-[60px] md:py-[41px] rounded-largeRadius border`}
    >
      <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-between">
        <div className="flex md:items-center flex-col-reverse md:flex-row items-start gap-[12px] md:gap-[25px] w-full">
          <div className="flex  items-center gap-[12px] md:gap-[25px] w-full">
            <span className="text-40-title">0{index}</span>
            <span className="text-30-title font-medium text-ellipsis overflow-hidden ... border">
              {title}
            </span>
          </div>
          <button className="self-end md:self-auto">
            <img
              src={handleOpenIcon}
              className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]"
            />
          </button>
        </div>
      </div>

      {opened && (
        <>
          <div className="h-[1px] w-full bg-black my-[30px]"></div>
          <p className="text-18-title">{description}</p>
        </>
      )}
    </div>
  );
};

export default ProcessItem;
