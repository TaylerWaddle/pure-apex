import Star from "./Star";
import Headshot from "../../../../../public/assets/headshot.jpg";
import { testimonials } from "../../../../constants";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="font-mont flex h-fit min-h-[24rem] w-full min-w-[12rem] max-w-[24rem] flex-col items-center justify-center space-y-4 rounded-xl bg-zinc-800/35 px-6 py-8 shadow-xl shadow-zinc-400/10 hover:shadow-2xl hover:shadow-zinc-100/35 md:mx-3"
        >
          <Image
            src={Headshot}
            alt="Headshot"
            className="h-20 w-20 rounded-full md:h-28 md:w-28"
            width={112} // 28 * 4 = 112px (max width from Tailwind)
            height={112} // match width for a square
          />
          <h1 className="text-2xl font-normal text-white">
            {testimonial.name}
          </h1>
          <div className="flex">
            {[...Array(1)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-center text-base font-light text-white">
            {testimonial.review}
          </p>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;
