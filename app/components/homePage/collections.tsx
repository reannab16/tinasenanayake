import React from "react";
import { BraceletCategory, CustomCategory, EarringCategory, NecklaceCategory, PinkPaisleyLeft, PinkPaisleyRight, RingCategory, StatementCategory } from "../icons";

export default function Collections() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-auto gap-y-[70px] py-32">
      <div className="text-[var(--maybe-text-colour)] text-3xl relative">
        COLLECTIONS{" "}
        <PinkPaisleyRight className="absolute -top-6 -right-[3.75rem] h-[63px]" />
        <PinkPaisleyLeft className="absolute -bottom-6 -left-[3.75rem] h-[63px]" />
      </div>
      <div className="flex items-center justify-center gap-x-[30px] gap-y-[70px] w-[876px] flex-wrap">
        {categories.map((cate) => {
          return (
            <div className="border-[1px] h-[313px] border-[var(--dark-purple)] border-solid rounded-xl">
              {cate.img}
              <div className="w-full flex items-center justify-center h-[42px] text-sm"><span className="text-[var(--maybe-text-colour)]">{cate.name}</span>&nbsp;<span className="text-[var(--trans-maybe-text-colour)]">{cate.quantity ? `(${cate.quantity})`: ""}</span></div>
            </div>
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
};

const categories: CategoryType[] = [
  {
    name: "RINGS",
    quantity: 25,
    img: <RingCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
  },
  {
    name: "NECKLACES",
    quantity: 21,
    img: <NecklaceCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
  },
  {
    name: "EARRINGS",
    quantity: 18,
    img: <EarringCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
  },
  {
    name: "STATEMENT PIECES",
    quantity: 15,
    img: <StatementCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] w-[270px] rounded-t-xl" />,
  },
  {
    name: "BRACELETS",
    quantity: 21,
    img: <BraceletCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] rounded-t-xl" />,
  },
  {
    name: "CUSTOM",
    quantity: undefined,
    img: <CustomCategory className="border-b-[1px] border-[var(--dark-purple)] border-solid h-[270px] rounded-t-xl" />,
  },
];
