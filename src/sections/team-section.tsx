import SectionTitle from "../components/section-title";
import TeamItem from "../components/team-item";
import teamData from "../data/team-data";

const TeamSection = () => {
  return (
    <div className="mt-[60px] sm:mt-[140px] flex flex-col">
      <SectionTitle
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="mt-[34px] md:mt-10 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamData.map((item) => (
          <TeamItem item={item} />
        ))}
      </div>
      <button className="max-w-max mt-10 py-4 px-6 self-end bg-secondary rounded-smallRadius">
        <span className="text-white">See all team</span>
      </button>
    </div>
  );
};

export default TeamSection;
