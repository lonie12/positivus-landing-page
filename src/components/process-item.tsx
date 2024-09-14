import { IconAdd, IconMinus } from "../helpers/assets";
import { primaryColor } from "../helpers/colors";

interface ProcessItemProps {
    index: number;
    title: string;
    description: string;
    opened: boolean;
}

const ProcessItem = ({ index, title, description, opened }: ProcessItemProps) => {

    const backColor = opened ? primaryColor : "#F3F3F3";
    const handleOpenIcon = opened ? IconMinus : IconAdd;
    return (
        <div className={`bg-[${backColor}]  px-[60px] py-[41px] rounded-largeRadius border`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[25px]">
                    <span className="text-40-title">0{index}</span>
                    <span className="text-30-title font-medium">{title}</span>
                </div>
                <button className="">
                    <img src={handleOpenIcon} />
                </button>
            </div>
            {
                opened && <>
                    <div className="h-[1px] w-full bg-black my-[30px]"></div>
                    <p className="text-18-title">{description}</p>
                </>
            }
        </div>
    );
}

export default ProcessItem;
