import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { PinkPaisleyLeft, PinkPaisleyRight } from "../icons";
import NavDropdown from "../components/navDropdown";


export default function NavBar() {
    const cartCount = 0;

  return (
    <div className="w-full h-auto flex-col flex items-center justify-start container text-[var(--maybe-text-colour)] px-4 pb-6">
      <div className="w-full flex justify-between items-center pb-3 pt-3">
        <div className="flex gap-x-5 text-sm w-60 justify-start">
          <div className="cursor-pointer flex items-center justify-center">
            <SearchOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer py-1 px-3 rounded-full hover:bg-[var(--light-purple)] hover:text-[var(--cream)] duration-300">home</div>
          <div className="cursor-pointer py-1 px-3 rounded-full hover:bg-[var(--light-purple)] hover:text-[var(--cream)] duration-300">our story</div>
        </div>
        <div className="flex flex-col text-[var(--dark-purple)] items-center justify-center py-4">
          <div className="text-base -mb-3 relative">
            Tina Senanayake
            <PinkPaisleyRight className="absolute -top-4 -right-[3.9rem]" />
          </div>
          <div className="text-[43px] relative">
            Jewels
            <PinkPaisleyLeft className="absolute -bottom-3 -left-[4.3rem]" />
          </div>
        </div>
        <div className="flex gap-x-5 text-sm w-60 justify-end items-center">
          <div className="cursor-pointer">DA | EN</div>
          <div className="cursor-pointer flex items-center justify-center">
            <PersonOutlineOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer flex items-center justify-center">
            <FavoriteBorderOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer flex items-center justify-center relative">
            <ShoppingBagOutlinedIcon className="h-5" />
            <div className="rounded-full h-4 w-4 bg-[var(--light-purple)] absolute -right-1 -top-1 flex items-center justify-center text-xs text-[var(--cream)]">{cartCount}</div>
          </div>
        </div>
      </div>
      <div className="w-full gap-x-20 flex justify-center text-sm">
        <NavDropdown links={links}/>
      </div>
    </div>
  );
}

export type LinkType = {
  name: string;
  link: string;
  jewel: boolean;
  dropdown?: DropType[];
};

type DropType = {
  name: string;
  link: string;
};

const links: LinkType[] = [
  {
    name: "necklaces",
    link: "",
    jewel: true,
    dropdown: [
      {
        name: "all necklaces",
        link: "",
      },
      {
        name: "statement necklaces",
        link: "",
      },
      {
        name: "chokers",
        link: "",
      },
      {
        name: "evil eye",
        link: "",
      },
      // {
      //   name: "double chain",
      //   link: "",
      // },
    ],
  },
  {
    name: "earrings",
    link: "",
    jewel: true,
    dropdown: [
      {
        name:"all earrings",
        link: "",
      },
      {
        name: "stud earrings",
        link: "",
      },
      {
        name: "drop earrings",
        link: "",
      },
      {
        name: "hoop earrings",
        link: "",
      },
      {
        name: "statement earrings",
        link: "",
      },
    ]
  },
  {
    name: "rings",
    link: "",
    jewel: true,
    dropdown: [
      {
        name:"all rings",
        link: "",
      }
    ]
  },

  {
    name: "bracelets",
    link: "",
    jewel: true,
    dropdown: [
      {
        name:"all bracelets",
        link: "",
      }
    ]
  },
  {
    name: "workshops",
    link: "",
    jewel: false,
  },
];
