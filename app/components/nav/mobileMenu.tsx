import React, { useState } from "react";
import { LinkType, DropType } from "./NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { dividerClasses } from "@mui/material";

export default function MobileMenu({ links }: { links: LinkType[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-16 flex items-center justify-start md:hidden">
      <div
        className={`flex flex-col items-center justify-center gap-y-[3px] cursor-pointer z-50 ${
          open ? "fixed " : ""
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={`h-[2px] rounded-full w-[14px]  duration-300 ${
            open
              ? " rotate-45 -translate-y-[40px]  bg-[var(--cream)]"
              : "bg-[var(--maybe-text-colour)]"
          }`}
        ></div>
        <div
          className={`h-[2px] rounded-full w-[14px]  duration-300 ${
            open
              ? "opacity-0 -translate-y-[45px]  bg-[var(--cream)]"
              : "opacity-100 bg-[var(--maybe-text-colour)]"
          }`}
        ></div>
        <div
          className={`h-[2px] rounded-full w-[14px]  duration-300 ${
            open
              ? "-rotate-45 -translate-y-[50px] bg-[var(--cream)]"
              : " bg-[var(--maybe-text-colour)]"
          }`}
        ></div>
      </div>
      <div
        className={`duration-300 fixed flex items-start justify-center px-10 pt-20 container ${
          open
            ? " top-0 bottom-0 left-0 right-0 bg-[var(--light-purple)] w-screen h-screen z-40 overscroll-contain overflow-y-none"
            : "z-40 opacity-0 h-0"
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          {" "}
          {links.map((link, ref) => {
            return (
              <>
                {link.dropdown ? (
                  <AccordionItem
                    value={`item-${ref}`}
                    className="text-base text-[var(--cream)]"
                  >
                    <AccordionTrigger>{link.name}</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      {link.dropdown?.map((drop) => {
                        return (
                          <div className="py-1">
                            <Link href={drop.link}>{drop.name}</Link>
                          </div>
                        );
                      })}
                      {link.jewel && (
                        <div className=" border-t border-t-[var(--kinda-trans-cream)] pt-2 mt-1">
                          <div className="font-semibold py-1">By Jewel</div>
                          <div className="py-1">gold plated</div>
                          <div className="py-1">silver</div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <div className="text-[var(--cream)] py-4 border-b border-[var(--cream)]">
                    {link.name}
                  </div>
                )}
              </>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
