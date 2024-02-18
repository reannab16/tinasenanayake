import React from "react";
import { BraceletCategory, CustomCategory, EarringCategory, NecklaceCategory, PinkPaisleyLeft, PinkPaisleyRight, RingCategory, StatementCategory } from "../icons";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-auto gap-y-[70px] w-screen md:bg-cover p-44 bg-[url('https://raw.githubusercontent.com/reannab16/readmeimgs/03f4294c26db6520341bb3a4678abcb40d637c50/paisley-background.svg')] ">
      <div className="text-[var(--maybe-text-colour)] md:text-3xl text-2xl relative">
        COLLECTIONS{" "}
        <PinkPaisleyRight className="absolute md:-top-6 md:-right-[3.75rem] md:h-[63px] h-[45px] -right-[2.7rem] -top-3" />
        <PinkPaisleyLeft className="absolute md:-bottom-6 md:-left-[3.75rem] md:h-[63px] h-[45px] -left-[2.7rem] -bottom-3" />
      </div>
      <div className="flex items-center justify-center gap-x-[30px] gap-y-[70px] w-[876px] flex-wrap md:flex-row flex-col">
        {categories.map((cate) => {
          return (
            <Link href={cate.link} className="border-[1px] h-[313px] border-[var(--dark-purple)] border-solid rounded-xl" key="cate.name">
              {cate.img}
              <div className="w-full flex items-center justify-center h-[41px] rounded-b-xl text-sm bg-[var(--cream)]"><span className="text-[var(--maybe-text-colour)]">{cate.name}</span>&nbsp;<span className="text-[var(--trans-maybe-text-colour)]">{cate.quantity ? `(${cate.quantity})`: ""}</span></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

type CategoryType = {
  name: string;
  quantity: number | undefined;
  img:  React.JSX.Element;
  link: string;
};

const categories: CategoryType[] = [
  {
    name: "RINGS",
    quantity: 25,
    img: <RingCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
    link: "/shop/rings"
  },
  {
    name: "NECKLACES",
    quantity: 21,
    img: <NecklaceCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
    link: "/shop/necklaces"
  },
  {
    name: "EARRINGS",
    quantity: 18,
    img: <EarringCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
    link: "/shop/earrings"
  },
  {
    name: "STATEMENT PIECES",
    quantity: 15,
    img: <StatementCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
    link: "/shop/statement-pieces"
  },
  {
    name: "BRACELETS",
    quantity: 21,
    img: <BraceletCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] rounded-t-xl" />,
    link: "/shop/bracelets"
  },
  {
    name: "CUSTOM",
    quantity: undefined,
    img: <CustomCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] rounded-t-xl" />,
    link: "/custom"
  },
];
