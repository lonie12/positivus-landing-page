import { LogoLinkedin } from "../helpers/assets";
import { Team } from "../helpers/types";

const TeamItem = ({ item }: { item: Team }) => {
    return (
        <div className="grid grid-cols-1 divide-solid divide-y p-[30px] border-secondary rounded-largeRadius md:h-[331px] border">
            <div className="py-3 first:pt-0 last:pb-0 flex items-start">
                <div className="flex gap-4 items-end">
                    <img className="w-[90px] " src={item.profile} />
                    <div className="self-end">
                        <h4 className="font-medium text-[20px]"> {item.name} </h4>
                        <p className="text-[16px]"> {item.role} </p>
                    </div>
                </div>
                <div>
                    <img src={LogoLinkedin} />
                </div>
            </div>
            <div className="py-3 first:pt-0 last:pb-0">
                <p className="text-[16px]"> {item.bio} </p>
            </div>
        </div>
    );
}

export default TeamItem;