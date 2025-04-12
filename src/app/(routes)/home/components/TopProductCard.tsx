import { topProducts } from "../../../../constants";
import Image from "next/image";

const TopProductCard = () => {
  return (
    <div className="flex justify-center">
      {topProducts.map((product) => (
        <div
          key={product.id}
          className="font-mont items-between relative mx-1 my-4 flex h-[40rem] w-auto min-w-[16rem] flex-col justify-between rounded-xl bg-zinc-800/35 pb-3 shadow-xl shadow-zinc-400/10 hover:shadow-zinc-100/35 md:mx-8"
        >
          <Image
            src={product.frontImage}
            alt="Product Image"
            className="aspect-auto h-[32rem] w-full rounded-xl"
            width={800} // Required
            height={512} // Required
            style={{ objectFit: "contain" }} // Equivalent to aspect-auto
          />
          <div className="flex flex-col content-between justify-between px-2">
            <div className="justify-left flex flex-col">
              <h1 className="text-wrap text-base font-medium text-white">
                {product.title}
              </h1>

              <div className="text-base font-thin text-white">
                {product.type}
              </div>

              <div className="mt-3 flex h-full w-full items-center justify-between pl-1">
                <span className="text-xl font-light text-yellow-500">
                  ${product.price}
                </span>
                <button className="font-mont flex w-fit items-center justify-center rounded-md bg-zinc-900 px-1 text-sm font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProductCard;
