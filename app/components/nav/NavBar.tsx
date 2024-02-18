import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { PinkPaisleyLeft, PinkPaisleyRight } from "../icons";
import NavDropdown from "../smallcomponents/navDropdown";
import MobileMenu from "./mobileMenu";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function NavBar() {
    const cartCount = 0;
    

  return (
    <div className="w-full h-auto flex-col flex items-center justify-start container text-[var(--maybe-text-colour)] md:px-4 px-8 md:pb-6">
      <div className="w-full flex justify-between items-center pb-3 pt-3">
        <div className="md:flex gap-x-5 text-sm w-60 justify-start hidden">
          <div className="cursor-pointer flex items-center justify-center">
            <SearchOutlinedIcon className="h-5" />
          </div>
          <Link href="/" className="cursor-pointer py-1 px-3 rounded-full hover:bg-[var(--light-purple)] hover:text-[var(--cream)] duration-300">home</Link>
          <div className="cursor-pointer py-1 px-3 rounded-full hover:bg-[var(--light-purple)] hover:text-[var(--cream)] duration-300">our story</div>
        </div>
        <MobileMenu links={links}/>
        <div className="flex flex-col text-[var(--dark-purple)] items-center justify-center py-4 md:w-[288px] w-[190px]">
          <div className="md:text-base text-xs -mb-3 relative">
            Tina Senanayake
            <PinkPaisleyRight className="absolute -top-4 md:-right-[3.9rem] -right-[2.8rem] md:h-auto h-[49px]" />
          </div>
          <div className="md:text-[43px] text-[33px] relative">
            Jewels
            <PinkPaisleyLeft className="absolute -bottom-3 md:-left-[4.3rem] -left-[3.2rem] md:h-auto h-[49px]" />
          </div>
        </div>
        <div className="flex md:gap-x-5 gap-x-3 text-sm md:w-60 w-16 justify-end items-center">
          <div className="cursor-pointer hidden md:block">DA | EN</div>
          <div className="cursor-pointer md:flex items-center justify-center hidden">
            <PersonOutlineOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer md:flex items-center justify-center hidden">
            <FavoriteBorderOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer flex md:hidden items-center justify-center">
            <SearchOutlinedIcon className="h-5" />
          </div>
          <div className="cursor-pointer flex items-center justify-center relative">
            <ShoppingBagOutlinedIcon className="h-5" />
            <div className="rounded-full h-4 w-4 bg-[var(--light-purple)] absolute -right-1 -top-1 flex items-center justify-center text-xs text-[var(--cream)]">{cartCount}</div>
          </div>
        </div>
      </div>
      <div className="w-full gap-x-20 md:flex hidden justify-center text-sm">
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

export type DropType = {
  name: string;
  link: string;
};

const links: LinkType[] = [
  {
    name: "shop all",
    link: "",
    jewel: true,
    dropdown: [
      {
        name: "all",
        link: "all",
      }
    ]
  },
  {
    name: "necklaces",
    link: "",
    jewel: true,
    dropdown: [
      {
        name: "all necklaces",
        link: "necklaces",
      },
      {
        name: "statement necklaces",
        link: "/necklaces/statement-necklaces",
      },
      {
        name: "chokers",
        link: "/necklaces/chokers",
      },
      {
        name: "evil eye",
        link: "/necklaces/evil-eye",
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
        link: "earrings",
      },
      {
        name: "stud earrings",
        link: "/earrings/stud-earrings",
      },
      {
        name: "drop earrings",
        link: "/earrings/drop-earrings",
      },
      {
        name: "hoop earrings",
        link: "/earrings/hoop-earrings",
      },
      {
        name: "statement earrings",
        link: "/earrings/statement-earrings",
      },
    ]
  },
  {
    name: "rings",
    link: "rings",
    jewel: true,
    dropdown: [
      {
        name:"all rings",
        link: "rings",
      }
    ]
  },

  {
    name: "bracelets",
    link: "bracelets",
    jewel: true,
    dropdown: [
      {
        name:"all bracelets",
        link: "bracelets",
      }
    ]
  },
  {
    name: "workshops",
    link: "workshops",
    jewel: false,
  },
  {
    name: "customize",
    link: "customize",
    jewel: false,
  },
];
