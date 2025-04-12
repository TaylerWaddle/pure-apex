import { products } from "../../../../constants";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="items-between relative mx-1 mb-8 flex h-fit min-w-[4rem] max-w-[12rem] flex-col justify-between rounded-xl bg-zinc-800/35 pb-3 font-mont shadow-xl shadow-zinc-400/10 hover:shadow-zinc-100/35 md:mx-4"
        >
          <Image
            src={product.frontImage}
            alt="Product image"
            className="aspect-auto h-full w-full rounded-xl"
            width={800} // estimate or get actual width
            height={600} // estimate or get actual height
            style={{ objectFit: "contain" }} // to mimic aspect-auto behavior
          />
          <div className="flex min-h-[140px] flex-col content-between justify-between px-2">
            <div className="justify-left flex flex-col">
              <h1 className="text-wrap text-base font-medium text-white">
                {product.title}
              </h1>
              <div className="text-base font-thin text-white">
                {product.type}
              </div>
            </div>

            <div className="mt-3 flex h-full w-full items-center justify-between pl-1">
              <span className="text-xl font-light text-yellow-500">
                ${product.price}
              </span>
              <button className="flex w-fit items-center justify-center rounded-md bg-zinc-900 px-1 font-mont text-sm font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm md:px-3 md:pb-1 md:pt-2 md:text-base">
                Add To Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
