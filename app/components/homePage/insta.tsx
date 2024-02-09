import React from "react";
import { PinkPaisleyRight, PinkPaisleyLeft } from "../icons";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Insta() {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-y-11 pb-40">
      <div className="text-[var(--maybe-text-colour)] text-3xl relative italic font-light">
        follow us on instagram
        <PinkPaisleyRight className="absolute -top-6 -right-[3.75rem] h-[63px]" />
        <PinkPaisleyLeft className="absolute -bottom-6 -left-[3.75rem] h-[63px]" />
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
