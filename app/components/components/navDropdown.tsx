import React from "react";
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

export default function NavDropdown({ links }: { links: LinkType[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-full gap-x-20 flex justify-center text-sm">
        {links.map((item) => {
          return (
            <>
              {item.jewel ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col justify-start items-start px-3 border-0 bg-[var(--light-purple)] outline-0 text-[var(--cream)]">
                    {item.dropdown?.map((item) => {
                      return (
                        <NavigationMenuLink className="py-2 whitespace-nowrap">
                          {item.name}
                        </NavigationMenuLink>
                      );
                    })}
                    <div className="py-2 whitespace-nowrap font-semibold">By Jewel</div>
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
            </>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
