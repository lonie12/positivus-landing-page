type ServiceItemProps = {
  title1: string;
  title2: string;
  illustration: string;
  background: string;
};

const ServiceItem = ({ item }: { item: ServiceItemProps }) => {
  return (
    <div className="bg-secondary overflow-hidden relative rounded-largeRadius h-[322px] sm:h-[310px]">
      <div
        style={{ backgroundColor: itemBGColor(item.background) }}
        className="grid grid-cols-1 sm:grid-cols-2 h-full p-[40px] sm:p-[45px] relative top-[-6px] items-center gap-[55px] rounded-b-largeRadius"
      >
        <div className="flex flex-col w-full h-full justify-between items-start">
          <div>
            <ItemTitles bg={titleBG(item.background)} title={item.title1} />
            <ItemTitles bg={titleBG(item.background)} title={item.title2} />
          </div>
          <div className="hidden sm:block h-[41px] w-[41px] rounded-[50%] bg-secondary"></div>
        </div>
        <div className="grid sm:block items-end grid-cols-2 w-full border">
          <div className="sm:hidden h-[41px] w-[41px] rounded-[50%] bg-secondary"></div>
          <img className="bg-cover" src={item.illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

const ItemTitles = ({ bg, title }: { bg: string; title: string }) => (
  <div className="px-[7px] rounded-[7px] max-w-max" style={{ background: bg }}>
    <h3 className="font-medium text-[25px]">{title}</h3>
  </div>
);

const itemBGColor = (type: string) => {
  switch (type) {
    case "primary":
      return "#B9FF66";
    case "secondary":
      return "#191A23";
    case "other":
      return "#F3F3F3";
    default:
      return "#B9FF66";
  }
};

const titleBG = (type: string): string => {
  switch (type) {
    case "primary":
      return "white";
    case "secondary":
      return "white";
    case "other":
      return "#b9ff66";
    default:
      return "white";
  }
};
