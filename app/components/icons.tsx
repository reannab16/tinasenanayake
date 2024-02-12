import Image from "next/image";
import React from "react";

function PinkPaisleyLeft({ className }: { className?: string }) {
  return <img className={className} src="paisleypinkleft.svg" />;
}

function PinkPaisleyRight({ className }: { className?: string }) {
  return <img className={className} src="paisleypinkright.svg" />;
}

function BannerImage1({ className }: { className?: string }) {
  return <img src="bannerimage1.JPG" className={className} />;
}

function FooterPaisley({ className }: { className?: string }) {
  return <img src="smolflowers.svg" className={className} />;
}

function MobileFooterPaisley({className}:{className?:string}) {
  return <img src="mobilefooter.svg" className={className}/>
}

function NecklaceCategory({ className }: { className?: string }) {
  return <img src="necklace.png" className={className} />;
}

function BraceletCategory({ className }: { className?: string }) {
  return <img src="bracelet.png" className={className} />;
}

function RingCategory({ className }: { className?: string }) {
  return <img src="ring.png" className={className} />;
}

function EarringCategory({ className }: { className?: string }) {
  return <img src="earring.png" className={className} />;
}

function CustomCategory({ className }: { className?: string }) {
  return <img src="custom.png" className={className} />;
}

function StatementCategory({ className }: { className?: string }) {
  return <img src="statement.png" className={className} />;
}

export {
  PinkPaisleyLeft,
  PinkPaisleyRight,
  BannerImage1,
  FooterPaisley,
  NecklaceCategory,
  BraceletCategory,
  RingCategory,
  EarringCategory,
  CustomCategory,
  StatementCategory,
  MobileFooterPaisley
};
