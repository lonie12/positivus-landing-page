const Testimonial = () => {
    return (
        <div className="relative left-0 flex flex-1 w-[500px] h-[230px]">
            <div className="z-0 absolute ml-2 -mb-[-2px] inline-block bottom-0 left-6">
                <div className="h-[40px] w-[40px] origin-bottom-left rotate-45 transform border border-primary bg-secondary"></div>
            </div>

            <div className="p-4 text-white h-[230px] z-10 flex flex-col rounded-[25px] bg-secondary border border-primary ">
                <p className="text-[14px]">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            </div>
        </div>
    );
};

export default Testimonial;