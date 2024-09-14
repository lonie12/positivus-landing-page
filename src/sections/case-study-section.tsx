import SectionTitle from "../components/section-title";
import { IconMore } from "../helpers/assets";


const CaseStudySection = () => {

    return (
        <div className="">
            <SectionTitle
                title="Case Studies"
                description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            />
            <div className="bg-secondary grid grid-cols-3 rounded-largeRadius mt-5 md:mt-20 px-[60px] py-[70px] divide-x divider-white">
                <StudyItem description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
                <StudyItem description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic" />
                <StudyItem description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
            </div>
        </div>
    )
}

export default CaseStudySection;

const StudyItem = ({ description }: { description: string }) => {

    return (
        <div className="px-6 first:pl-0 last:pr-0 text-white text-18-title">
            <p>{description}</p>
            <div className="flex items-center mt-5 gap-[15px] ">
                <span className="text-primary text-20-title">Learn more</span>
                <img src={IconMore} />
            </div>
        </div>
    )
}