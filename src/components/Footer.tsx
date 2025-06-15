import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#234762] text-white">
      <div className="px-4 md:px-[70px] py-8 md:py-[68px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-[249px] mb-6 md:mb-9">
          {/* Left Side - Logo and Description */}
          <div className="flex flex-col gap-4 w-full md:w-[379px]">
            {/* Logo */}
            <div className="w-[121px] md:w-[214.66px] h-[37px] md:h-[66px] mb-2">
              <Image
                src="/img/gaussian-text-1.png"
                alt="Gaussian Logo"
                width={215}
                height={66}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Description */}
            <p className="text-white text-sm font-medium leading-[1.3] mb-4 md:mb-0">
              Join us as we redefine how enterprises detect threats, seize opportunities, and run resilient, data-driven operations.
            </p>

            {/* Social Media Icons - Mobile */}
            <div className="flex gap-6 md:hidden">
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Facebook size={12} className="text-[#234762]" />
              </div>
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Twitter size={12} className="text-[#234762]" />
              </div>
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Instagram size={12} className="text-[#234762]" />
              </div>
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Linkedin size={12} className="text-[#234762]" />
              </div>
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[156px]">
            {/* Pages and Information Row - Side by side on mobile */}
            <div className="flex flex-row md:flex-row gap-8 md:gap-[156px]">
              {/* Pages Column */}
              <div className="flex flex-col gap-6 flex-1">
                <h3 className="text-white text-sm font-semibold leading-[1.3]">Pages</h3>
                <div className="flex flex-col gap-4">
                  <Link href="/" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link href="/about-us" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-gray-300 transition-colors">
                    About Us
                  </Link>
                  <Link href="/product" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                    Product
                  </Link>
                  <Link href="/contact-us" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Information Column */}
              <div className="flex flex-col gap-6 flex-1">
                <h3 className="text-white text-sm font-semibold leading-[1.3]">Information</h3>
                <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:flex-wrap">
                  <span className="text-[#C8CDD3] text-sm font-normal leading-[1.5] md:whitespace-nowrap">
                    Business Headquarters: Sydney
                  </span>
                  <span className="text-[#C8CDD3] text-sm font-normal leading-[1.5] md:whitespace-nowrap">
                    R & D Hub: Singapore
                  </span>
                  <span className="text-[#C8CDD3] text-sm font-normal leading-[1.5] md:whitespace-nowrap">
                    AI Development Center: Jakarta
                  </span>
                </div>
              </div>
            </div>

            {/* Help Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-sm font-semibold leading-[1.3]">Help</h3>
              <div className="flex flex-col gap-4">
                <Link href="/customer-support" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                  Customer Support
                </Link>
                <Link href="/terms-conditions" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy" className="text-[#C8CDD3] text-sm font-normal leading-[1.5] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#7E8492] mb-6 md:mb-9"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex gap-6">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Facebook size={16} className="text-[#234762]" />
            </div>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Twitter size={16} className="text-[#234762]" />
            </div>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Instagram size={16} className="text-[#234762]" />
            </div>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Linkedin size={16} className="text-[#234762]" />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white text-sm font-medium leading-[1.3] text-left md:text-right">
            © 2025 Gaussian.au. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}; 