import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

const headerText = "Testimonials";

const Testimonials = () => {
  return (
    <div className="relative flex h-fit w-full flex-col items-center bg-zinc-950 px-8 font-zain md:pt-20 lg:px-20">
      <SectionHeader headerText={headerText} />
      <div className="flex w-fit flex-col items-center justify-center space-y-6 py-16 md:flex-row md:space-y-0 lg:space-x-12">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
