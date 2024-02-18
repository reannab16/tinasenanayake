import { products } from "@/app/utils/products";
import { Span } from "next/dist/trace";
import React from "react";

interface IPrams {
  category?: string | string[];
}

type productType = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string[];
  inStock: boolean;
  mainImage: string;
  colours: {
    colour: string;
    colourCode: string;
    images: string[];
  }[];
};

export default function CategoryPage({ params }: { params: IPrams }) {
  console.log(params);

  function checkCates(product: productType) {
    if (Array.isArray(params?.category)) {
      for (let i of params?.category) {
        if (!product.category.includes(i)) {
          return false;
        }
      }
      return true;
    }
  }

  return (
    <div className="flex flex-col text-[var(--maybe-text-colour)] items-start container w-screen px-5 text-sm">
      <div>
        shop{" "}
        {Array.isArray(params?.category) ? (
          params.category.map((subcate) => {
            return <span key={subcate}>| {subcate.replaceAll("-", " ")} </span>;
          })
        ) : (
          <span></span>
        )}
      </div>
      <div className="italic text-3xl font-light pt-10 pb-8">
        {/* {params[0].replaceAll("-", " ")} */}
        {Array.isArray(params?.category) ? (
          <span>
            {params.category[params.category.length - 1].replaceAll("-", " ")}
          </span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="flex gap-x-5 mb-14">
        <div className="px-4 py-1 w-36 bg-[var(--light-purple)] rounded-full text-[var(--cream)] text-sm">
          all
        </div>
        <div className="px-4 py-1 w-40 bg-[var(--light-purple)] rounded-full text-[var(--cream)] text-sm">
          Date, new to old
        </div>
      </div>

      <div className="flex gap-x-10 pb-20">
        {products.filter(checkCates).map((item) => {
          return (
            <div key={item.name} className="flex flex-col gap-y-2">
              <div>
                <img
                  src={item.mainImage}
                  alt=""
                  className=" h-72 w-60 object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <div>{item.name}</div>
                <div className="font-light text-xs">{item.price}</div>
                <div className="flex gap-x-2">
                {item.colours.length > 1 && item.colours.map((colour)=>{
                  console.log(colour.colourCode)
                  return(
                    
                    <div key={colour.colour}
                      className={`rounded-full border-solid border-[var(--maybe-text-colour)] h-5 w-5 border-[1px] flex items-center justify-center`}
                    >
                      <div className={`bg-[${colour.colourCode}] h-[14px] w-[14px] rounded-full`}></div>
                    </div>
                  

                  )
                })
                  
                }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
