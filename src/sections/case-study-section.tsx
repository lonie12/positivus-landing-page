import SectionTitle from "../components/section-title";
import { CaseStudies } from "../data/cases-studies-data";
import { IconMore } from "../helpers/assets";

const CaseStudySection = () => {
  return (
    <div className="">
      <SectionTitle
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="bg-secondary grid grid-cols-1 xl:grid-cols-3 rounded-largeRadius mt-5 md:mt-20 p-[20px] xl:px-[60px] xl:py-[70px] divide-y xl:divide-x divider-white">
        {CaseStudies.map((e: string) => (
          <StudyItem description={e} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection;

const StudyItem = ({ description }: { description: string }) => {
  return (
    <div className="xl:px-6 py-6 xl:first:pl-0 xl:last:pr-0 xt:first:pt-0 xt:last:pt-0 text-white text-18-title">
      <p>{description}</p>
      <div className="flex items-center mt-5 gap-[15px] ">
        <span className="text-primary text-20-title">Learn more</span>
        <img src={IconMore} />
      </div>
    </div>
  );
};
