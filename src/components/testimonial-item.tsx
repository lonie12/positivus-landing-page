const Testimonial = () => {
  return (
    <div>
      <div className="relative left-0 flex flex-1 w-[500px] h-[250px]">
        <div className="z-0 absolute ml-2 -mb-[-2px] inline-block bottom-[20px] left-6">
          <div className="h-[30px] w-[30px] origin-bottom-left rotate-45 transform border border-primary bg-secondary"></div>
        </div>

        <div className="p-[30px] text-white h-[230px] z-10 flex items-center rounded-[25px] bg-secondary border border-primary ">
          <p className="text-[15px]">
            "We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence."
          </p>
        </div>
      </div>
      <div className="mt-2 bottom-[-55px] ml-[50px] -mb-[-2px] left-6">
        <h1 className="text-primary font-semibold">John Smith</h1>
        <p className="text-white">Marketing Director at XYZ Corp</p>
      </div>
    </div>
  );
};

export default Testimonial;
