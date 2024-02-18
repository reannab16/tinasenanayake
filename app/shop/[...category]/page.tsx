import { products } from "@/app/utils/products";
import { Span } from "next/dist/trace";
import React from "react";

interface IPrams {
  category?: string | string[];
}

type productType = {
  id: string,
  name: string,
  description:
    string,
  price: string,
  category: string[],
  inStock: boolean,
  mainImage: string,
  colours: 
    {
      colour: string,
      colourCode: string,
      images: string[],
    }[]
}

export default function CategoryPage({ params }: { params: IPrams }) {
  console.log(params)

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
      <div>shop  {Array.isArray(params?.category) ? (params.category.map((subcate)=>{
        console.log("hi")
        return(
          <span>| {subcate.replaceAll("-", " ")} </span>
        )
      })) : <span></span>}</div>
      <div className="italic text-3xl font-light pt-10 pb-8">
        {/* {params[0].replaceAll("-", " ")} */}
        {Array.isArray(params?.category) ? <span>{params.category[params.category.length - 1].replaceAll("-", " ")}</span>: <span></span>}
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
        {/* {products.map((item) => {
          return (
            item.category[0][0] === params.category && (
              <div key={item.name} className="flex flex-col gap-y-2">
                <img src={item.mainImage} alt="" className="h-44 w-36"/>
                <div>{item.name}</div>
              </div>
            )
          );
        })} */}
        {products.filter(checkCates).map((item)=>{
          return(
            <div key={item.name}>{item.name}</div>
          )
        })}
      </div>
    </div>
  );
}
