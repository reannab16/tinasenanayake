import React from "react";
import { FooterPaisley } from "../icons";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--trans-purple)] h-auto p-20 flex items-center justify-center text-[var(--cream)] text-sm relative">
      <FooterPaisley className="absolute bottom-0 right-0"/>
      <div className="container flex flex-col">
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-5">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Terms of Service</div>
            <div>Returns</div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>FAQs</div>
            <div>Privacy Policy</div>
            <div>Shipping</div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-semibold">Sign up for our newsletter</div>
            <div className="text-xs">Subscribe to get special offers and once in a lifetime deals</div>
            <input type="text" className="text-xs border-b-[1px] border-b-[var(--cream)] p-2 bg-inherit placeholder:text-[var(--cream)]" placeholder="Enter your email"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
