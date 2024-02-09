import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { LinkType } from "../nav/NavBar";
import Link from "next/link";

export default function NavDropdown({ links }: { links: LinkType[] }) {
  const [which, setWhich] = useState("");
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-full gap-x-16 flex justify-center text-sm ">
        {links.map((item) => {
          return (
            <div key={item.name}>
              {item.jewel ? (
                <NavigationMenuItem
                  key={item.name}
                  className="relative "
                  onMouseOver={() => {
                    setWhich(item.name);
                  }}
                >
                  {item.name === which && (
                    <NavigationMenuViewport className="absolute left-0" />
                  )}

                  <NavigationMenuTrigger className="relative ">
                    {item.name}{" "}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="flex flex-col justify-start items-start px-1 py-1 border-0 bg-[var(--light-purple)] outline-0 text-[var(--cream)]">
                    {item.dropdown?.map((item) => {
                      return (
                        <NavigationMenuLink
                          asChild
                          className="py-2 px-2 whitespace-nowrap hover:bg-[var(--trans-cream)] rounded-md w-full"
                          key={item.name}
                        >
                          <Link href="" className="cursor-pointer ">
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                    
                    <div className="py-2 text-sm px-1 mt-1 whitespace-nowrap font-semibold border-t-[1px] w-full border-[var(--trans-cream)]">
                      by metal
                    </div>
                    <NavigationMenuLink
                      asChild
                      className="py-2 px-2 whitespace-nowrap hover:bg-[var(--trans-cream)] rounded-md w-full"
                    >
                      <Link href="" className="cursor-pointer ">
                        gold plated
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="py-2 px-2 whitespace-nowrap hover:bg-[var(--trans-cream)] rounded-md w-full"
                    >
                      <Link href="" className="cursor-pointer ">
                        silver
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <div
                  key={item.name}
                  className="py-1 px-3 rounded-full hover:bg-[var(--light-purple)] hover:text-[var(--cream)] duration-300 cursor-pointer "
                >
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
