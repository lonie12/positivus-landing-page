type ServiceItemProps = {
    title1: string;
    title2: string;
    figure: string;
}

const ServiceItem = ({ title1, title2, figure }: ServiceItemProps) => {
    return (
        <div className="flex items-center gap-[55px] p-[50px] border-secondary rounded-largeRadius md:h-[310px] border">
            <div className="h-full flex flex-col justify-between items-start border">
                <div>
                    <div className=" bg-primary px-[7px] rounded-[7px]">
                        <h3 className="font-medium text-[25px]">{title1}</h3>
                    </div>
                    <div className=" bg-primary px-[7px] rounded-[7px]">
                        <h3 className="font-medium text-[25px]">{title2}</h3>
                    </div>
                </div>
                <div className="h-[41px] w-[41px] rounded-[50%] bg-secondary">

                </div>
            </div>
            <div className="max-w-[40%]">
                <img className="bg-cover" src={figure} alt="" />
            </div>
        </div>
    );
}

export default ServiceItem;