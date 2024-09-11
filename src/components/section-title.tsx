
interface SectionTitleProps {
    title: string;
    description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {

    return (
        <div className="flex gap-[40px] md:max-w-[80%] items-center mb-20">
            <div className="bg-primary px-2">
                <h2 className="font-medium text-[35px]">{title}</h2>
            </div>
            <div>
                <p className="text-[18px]">{description}</p>
            </div>
        </div>
    )
}

export default SectionTitle;