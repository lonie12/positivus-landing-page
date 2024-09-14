import { LogoLinkedin } from "../helpers/assets";
import { Team } from "../helpers/types";

const TeamItem = ({ item }: { item: Team }) => {
  return (
    <div className="h-[331px] bg-secondary overflow-hidden rounded-largeRadius relative border">
      <div className="bg-white grid grid-cols-1 divide-solid divide-y p-[30px] border-secondary h-full rounded-largeRadius relative top-[-6px]">
        <div className="py-3 first:pt-0 last:pb-0 flex items-start justify-between">
          <div className="flex gap-4 items-end">
            <img className="w-[90px] " src={item.profile} />
            <div className="self-end">
              <h4 className="font-medium text-20-title"> {item.name} </h4>
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
    </div>
  );
};

export default TeamItem;
