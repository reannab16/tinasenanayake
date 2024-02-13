import { products } from "@/app/utils/products";
import React from "react";
interface IPrams {
  category?: string;
}

export default function CategoryPage({ params }: { params: IPrams }) {
  return (
    <div>
      {params.category?.replaceAll("-", " ")}
      <div className="">
        {products.map((item) => {
          console.log(item.name, item.category[0][0] === params.category);

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
