import SectionTitle from "../components/section-title";
import ServiceItem from "../components/service-item";
import { service1Figure, service2Figure, service3Figure, service4Figure, service5Figure, service6Figure } from "../helpers/assets";


const ServiceSection = () => {

    return (
        <div className="">
            <SectionTitle
                title="Services"
                description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />
            <div className="grid-container grid grid-cols-2 gap-10 border w-full">
                <ServiceItem title1="Search engine" title2="optimization" figure={service1Figure} />
                <ServiceItem title1="Pay-per-click" title2="advertising" figure={service2Figure} />
                <ServiceItem title1="Social Media" title2="Marketing" figure={service3Figure} />
                <ServiceItem title1="Email" title2="Marketing" figure={service4Figure} />
                <ServiceItem title1="Content" title2="Creation" figure={service5Figure} />
                <ServiceItem title1="Analytics and" title2="Tracking" figure={service6Figure} />
            </div>
        </div>
    );
}

export default ServiceSection;