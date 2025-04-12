// import TopProductCard from "./top-product-card.component";
import SectionHeader from "./SectionHeader";

const headerText = "Top Products";

const TopProducts = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center bg-zinc-950 md:pt-20">
      <SectionHeader headerText={headerText} />
      <div className="flex w-fit flex-col items-center justify-center pt-6 md:pt-20 lg:flex-row">
        {/* <TopProductCard /> */}
      </div>
    </div>
  );
};

export default TopProducts;
