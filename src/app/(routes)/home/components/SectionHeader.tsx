const SectionHeader = ({ headerText }: { headerText: string }) => {
  return (
    <div className="mt-16 flex w-5/6 items-center justify-center sm:space-x-12 xl:mt-0">
      <div className="hidden h-[3px] w-10 rounded-full bg-yellow-500 sm:block md:w-[26rem] lg:w-[32rem] xl:w-[36rem]" />
      <h1 className="font-mont min-w-fit text-nowrap text-4xl font-normal text-yellow-500/95 sm:text-white xl:text-6xl">
        {headerText}
      </h1>
      <div className="hidden h-[3px] w-10 rounded-full bg-yellow-500 sm:block md:w-[26rem] lg:w-[32rem] xl:w-[36rem]" />
    </div>
  );
};

export default SectionHeader;
