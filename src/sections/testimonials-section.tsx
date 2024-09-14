import SectionTitle from "../components/section-title";
import Testimonial from "../components/testimonial-item";


const TestimonialsSection = () => {

    return (
        <div className="mt-[40px] md:mt-[140px] py-[68px]w">
            <SectionTitle
                title="Testimonials"
                description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
            />
            <div className="flex gap-10 py-[60px] mt-5 md:mt-20 rounded-largeRadius bg-secondary overflow-hidden">
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    );
}

export default TestimonialsSection;