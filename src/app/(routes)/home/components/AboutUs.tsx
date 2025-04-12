import ScottPhoto from "../../../../../public/assets/Scott-About.jpg";
import TabianPhoto from "../../../../../public/assets/Tabian-About.jpg";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="font-mont relative flex h-fit w-full flex-col items-center bg-zinc-950 md:pt-20 lg:px-20">
        <SectionHeader headerText={"Our Founders"} />

        <div className="relative mb-32 w-full items-center justify-center pt-20 lg:flex">
          <Image
            src={TabianPhoto}
            alt="Photo of Tabian"
            className="ml-20 h-full w-[480px]"
            width={480}
            height={600} // estimate height or use actual dimensions
            style={{ height: "100%" }} // ensures h-full works properly
          />
          <div className="mr-36 max-w-3xl rounded-2xl bg-zinc-900 p-12">
            <h1 className="text-5xl font-normal text-yellow-500/90">
              Tabian Waddle
            </h1>
            <div className="flex items-center space-x-4 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-[1.5rem] font-normal text-white">
                Anytime Fitness Manager
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-[1.5rem] font-normal text-white">
                Bodybuilder
              </span>
            </div>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              As an amateur competitive bodybuilder and long-time gym rat, Ive
              always understood the value of quality supplements when achieving
              peak performance. Over the years, Ive tried and tested countless
              products to fuel my workouts and push my limits.
            </p>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              My goal is this: to offer high-quality supplements at the best
              prices, ensuring everyone has access to the tools they need to
              win.
            </p>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              Whether youre a seasoned athlete or just starting your fitness
              journey, Im here to help you find the right products.
            </p>
            <span className="text-[1.2rem] font-light text-yellow-500/90">
              Connect with me: [LinkedIn Profile] | [Email Address]
            </span>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center pt-20">
          <div className="ml-36 max-w-3xl rounded-2xl bg-zinc-900 p-12">
            <h1 className="text-5xl font-normal text-yellow-500/90">
              Scott Melvin
            </h1>
            <div className="mb-6 flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="text-[1.5rem] font-normal text-white">
                AF Fitness Director
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-[1.5rem] font-normal text-white">
                Bodybuilder
              </span>
            </div>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              As an amateur competitive bodybuilder and long-time gym rat, Ive
              always understood the value of quality supplements when achieving
              peak performance. Over the years, Ive tried and tested countless
              products to fuel my workouts and push my limits.
            </p>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              My goal is this: to offer high-quality supplements at the best
              prices, ensuring everyone has access to the tools they need to
              win.
            </p>
            <p className="mb-6 text-[1.2rem] font-light text-white">
              Whether youre a seasoned athlete or just starting your fitness
              journey, Im here to help you find the right products.
            </p>
            <span className="text-[1.2rem] font-light text-yellow-500/90">
              Connect with me: [LinkedIn Profile] | [melvinator76@gmail.com]
            </span>
          </div>
          <Image
            src={ScottPhoto}
            alt="Photo of Scott"
            className="ml-20 h-full w-[480px]"
            width={480}
            height={600} // estimate height or use actual dimensions
            style={{ height: "100%" }} // ensures h-full works properly
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
