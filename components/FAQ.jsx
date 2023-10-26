import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import AccordionFAQ from "./AccordionFAQ";
export default function FAQ() {
  return (
    <div className="bg-white flex flex-col gap-6 py-8 md:py-24 px-4 md:px-16">
      <div className="">
        <div className="flex items-center justify-center flex-col mb-12">
          <h2 className=" text-2xl md:text-5xl font-semibold  mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="max-w-2xl">
            <AccordionFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}
