import React from "react";
import { FooterPaisley, MobileFooterPaisley } from "../icons";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--trans-purple)] h-auto md:p-20 py-20 p-5 flex items-center justify-center text-[var(--cream)] text-sm relative bg-[url('https://raw.githubusercontent.com/reannab16/tinasenanayake/8fc9de6336e59a2ddd40a4377f984ff94c0ed93b/public/mobilefooter.svg')] bg-[length:130%] bg-center bg-no-repeat md:text-start text-center md:bg-none">
      <FooterPaisley className="md:absolute bottom-0 right-0 hidden md:block"/>
      {/* <MobileFooterPaisley className="md:hidden absolute bottom-56 left-0 right-0"/> */}
      <div className="container flex flex-col">
        <div className="flex gap-x-20 md:flex-row flex-col items-center md:items-start md:gap-y-0 gap-y-5 ">
          <div className="flex flex-col gap-y-5 md:items-start items-center">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Terms of Service</div>
            <div>Returns</div>
          </div>
          <div className="flex flex-col gap-y-5 md:items-start items-center md:pb-0 pb-10">
            <div>FAQs</div>
            <div>Privacy Policy</div>
            <div>Shipping</div>
          </div>
          <div className="flex flex-col gap-y-5 md:items-start items-center md:text-start text-center">
            <div className="font-semibold">Sign up for our newsletter</div>
            <div className="text-xs ">Subscribe to get special offers and once in a lifetime deals</div>
            <input type="text" className="text-xs border-b-[1px] border-b-[var(--cream)] p-2 bg-inherit placeholder:text-[var(--cream)] w-full md:w-auto" placeholder="Enter your email"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
