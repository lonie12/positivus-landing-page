const Testimonial = () => {
    return (
        <div className="relative left-0 -mt-[2px] flex flex-col w-[460px] max-w-[460px] border-[10px] border-red-400">
            <div className="z-0 absolute ml-2 -mb-[-2px] inline-block bottom-0 left-6">
                {/* <!-- triangle ↓ --> */}
                <div className="h-[40px] w-[40px] origin-bottom-left rotate-45 transform border border-primary bg-secondary"></div>
            </div>

            <div className="h-[230px] w-full z-10 flex min-w-max flex-col rounded-[25px] bg-secondary border border-primary ">
                <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            </div>
        </div>
    );
};

export default Testimonial;