"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageSquareText } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export default function UnderConstruction() {
  return (
    <div className="under-construction bg-white flex flex-col min-h-screen">
      <NavBar />
      
      {/* Main Content */}
      <div className="flex items-center justify-center flex-1 w-full px-10 py-25 md:py-25">
        <div className="flex flex-col items-center gap-7 md:gap-12 max-w-full mx-auto ">
          {/* Construction Image - Responsive sizing */}
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/img/under-construction.png"
              alt="Under Construction"
              width={800}
              height={300}
              className="w-[500px] h-auto object-contain"
              priority
            />
          </div>

          {/* Buttons - Stack on mobile, side by side on desktop */}
          <div className="flex flex-col md:flex-row justify-center gap-[14px] w-full max-w-md md:max-w-none mb-8 md:mb-16">
            <Button
              property1="primary"
              primaryText="Back to Home"
              primaryIcon="right"
              to="/"
              className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] px-4 py-3 text-lg w-full md:w-auto"
              primary={<ArrowUpRight size={24} className="text-white" />}
            />
            <Button
              property1="secondary"
              primaryText="Contact Us"
              primaryIcon="left"
              to="/contact-us"
              className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-4 py-3 text-lg w-full md:w-auto group"
              primary={<MessageSquareText size={24} className="text-[#0B1F3A] group-hover:text-white transition-colors duration-200" />}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 