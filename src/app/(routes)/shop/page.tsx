import ProductCard from "./components/ProductCard";
import ShopFilter from "./components/ShopFilter";

const Shop = () => {
  return (
    <div className="relative flex h-full">
      <ShopFilter />
      <div className="flex h-full flex-wrap items-center justify-center bg-zinc-950 py-32 md:px-8 lg:ml-80 xl:px-12">
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
