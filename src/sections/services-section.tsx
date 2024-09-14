import SectionTitle from "../components/section-title";
import ServiceItem from "../components/service-item";
import servicesData from "../data/services-data";

const ServiceSection = () => {
  return (
    <div className="">
      <SectionTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid-container grid grid-cols-2 gap-10 w-full">
        {servicesData.map((e) => (
          <ServiceItem item={e} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
