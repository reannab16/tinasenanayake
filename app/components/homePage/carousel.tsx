"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function carousel() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    fixedHeight: "35.5rem",
    // autoWidth: true,
    width: "100%",
    cover: true,
    perPage: 1,
  };
  return (
    <div className="2xl:w-[1440px] w-screen relative -mt-8">
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <SplideTrack className="absolute top-8">
          <SplideSlide>
            <img src="/images/screenshotted1.png" alt="Image 1" className="2xl:w-[1440px] w-screen h-[35.5rem]" />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/images/bannerimage2.jpg"
              alt="Image 2"
              className="2xl:w-[1440px] w-screen h-[35.5rem]"
            />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/bannerimage3.jpg" alt="Image 2" className="2xl:w-[1440px] w-screen h-[35.5rem]" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/bannerimage5.jpg" alt="Image 3" className="2xl:w-[1440px] w-screen h-[35.5rem]" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/bannerimage4.jpg" alt="Image 4" className="2xl:w-[1440px] w-screen h-[35.5rem]" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/bannerimage6.jpg" alt="Image 5" className="2xl:w-[1440px] w-screen h-[35.5rem]" />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows border-red-500 border-solid border-2 " />

        <button className="splide__toggle" type="button">
          <svg
            className="splide__toggle__play bg-[var(--light-purple)]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m22 12-20 11v-22l10 5.5z" />
          </svg>
          <svg
            className="splide__toggle__pause"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m2 1v22h7v-22zm13 0v22h7v-22z" />
          </svg>
        </button>
      </Splide>
    </div>
  );
}
