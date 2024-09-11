type ServiceItemProps = {
    title1: string;
    title2: string;
    illustration: string;
}

const ServiceItem = ({ item }: { item: ServiceItemProps }) => {
    return (
        <div className="flex items-center gap-[55px] p-[50px] border-secondary rounded-largeRadius md:h-[310px] border">
            <div className="h-full flex flex-col justify-between items-start">
                <div>
                    <div className=" bg-primary px-[7px] rounded-[7px]">
                        <h3 className="font-medium text-[25px]">{item.title1}</h3>
                    </div>
                    <div className=" bg-primary px-[7px] rounded-[7px]">
                        <h3 className="font-medium text-[25px]">{item.title2}</h3>
                    </div>
                </div>
                <div className="h-[41px] w-[41px] rounded-[50%] bg-secondary">

                </div>
            </div>
            <div className="max-w-[40%]">
                <img className="bg-cover" src={item.illustration} alt="" />
            </div>
        </div>
    );
}

export default ServiceItem;