import ProcessItem from "../components/process-item";
import SectionTitle from "../components/section-title";
import workingProcessData from "../data/working-process-data";



const WorkingProcessSession = () => {

    return (
        <div className="mt-[140px]">
            <SectionTitle
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals"
            />
            <div className="grid grid-cols-1 gap-[30px]">
                {
                    workingProcessData.map((it, idx: number) => (
                        <ProcessItem
                            index={idx}
                            opened={idx == 0}
                            title={it.title}
                            description={it.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WorkingProcessSession;