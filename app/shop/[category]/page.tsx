import { products } from "@/app/utils/products";
import React from "react";

interface IPrams {
  category?: string;
}

export default function CategoryPage({ params }: { params: IPrams }) {
  return (
    <div className="flex flex-col text-[var(--maybe-text-colour)] items-start container w-screen px-5">
        <div>shop | {params.category}</div>
        <div className="italic text-3xl font-light pt-10 pb-8">{params.category?.replaceAll("-", " ")}</div>
        <div className="flex gap-x-5 mb-14">
            <div className="px-4 py-1 w-36 bg-[var(--light-purple)] rounded-full text-[var(--cream)] text-sm">all</div>
            <div className="px-4 py-1 w-40 bg-[var(--light-purple)] rounded-full text-[var(--cream)] text-sm">Date, new to old</div>
        </div>
      
      <div className="">
        {products.map((item) => {

          return (
            item.category[0][0] === params.category && (
              <div key={item.name}>{item.name}</div>
            )
          );
        })}
      </div>
    </div>
  );
}
