import React from "react";
import { PinkPaisleyRight, PinkPaisleyLeft } from "../icons";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Insta() {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-y-11 pb-40">
      <div className="text-[var(--maybe-text-colour)] md:text-3xl text-2xl relative italic font-light">
        follow us on instagram
        <PinkPaisleyRight className="absolute md:-top-6 -top-3 md:-right-[3.75rem] -right-[2.5rem] md:h-[63px] h-[40px]" />
        <PinkPaisleyLeft className="absolute md:-bottom-6 -bottom-3 md:-left-[3.75rem] -left-[2.5rem] md:h-[63px] h-[40px]" />
      </div>
      

      <Link
        href="https://www.instagram.com/tinasenanayakejewels/"
        target="blank"
      >
        <Button
          variant="contained"
          startIcon={<InstagramIcon />}
          color="secondary"
          className="bg-[var(--light-purple)]"
          sx={{
            backgroundColor: "#C296C7",
          }}
        >
          @tinasenanayakejewels
        </Button>
      </Link>
    </div>
  );
}
