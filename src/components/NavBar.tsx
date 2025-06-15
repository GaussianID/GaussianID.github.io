"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

interface NavBarProps {
  className?: string;
}

interface NavButtonProps {
  text: string;
  to?: string;
  isActive?: boolean;
  isScrolled?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  text,
  to = "/",
  isActive = false,
  isScrolled = false,
}) => {
  return (
    <Link 
      href={to} 
      className={`
        relative px-3 py-2 text-sm font-normal transition-all duration-300 ease-in-out group
        hover:scale-105 hover:font-medium
        ${isScrolled 
          ? `text-white hover:text-blue-300 ${isActive ? 'text-blue-300 font-medium' : ''}` 
          : `text-gray-600 hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : ''}`
        }
      `}
    >
      {text}
      
      {/* Active indicator */}
      {isActive && (
        <div 
          className={`
            absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 rounded-full transition-all duration-300
            ${isScrolled ? 'bg-blue-300' : 'bg-blue-600'}
          `}
        />
      )}
      
      {/* Hover indicator */}
      <div 
        className={`
          absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 ease-in-out
          group-hover:w-6
          ${isScrolled ? 'bg-blue-300' : 'bg-blue-600'}
          ${isActive ? 'opacity-0' : 'opacity-100'}
        `}
      />
    </Link>
  );
};

const ActionButton: React.FC<{
  text: string;
  to?: string;
  variant: "primary" | "secondary";
  isScrolled?: boolean;
}> = ({
  text,
  to = "/",
  variant,
  isScrolled = false,
}) => {
  const baseClasses = "px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none";
  
  const variantClasses = variant === "primary" 
    ? `bg-blue-600 text-white hover:bg-blue-700 ${isScrolled ? 'hover:bg-blue-500' : ''}` 
    : `${isScrolled 
        ? 'text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200' 
        : 'text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200'
      }`;
  
  return (
    <Link 
      href={to} 
      className={`${baseClasses} ${variantClasses}`}
    >
      {text}
    </Link>
  );
};

export const NavBar: React.FC<NavBarProps> = ({
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'bg-[#0B1F3A] shadow-lg backdrop-blur-md' 
            : 'bg-neutral-100 shadow-md'
          }
          ${className}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center transition-transform duration-300 hover:scale-102"
              onClick={closeMobileMenu}
            >
              <Image
                alt="Gaussian"
                src={isScrolled ? "/img/gaussian-text-1.png" : "/img/gaussian-text-1-1.png"}
                width={108}
                height={32}
                priority
                className="transition-opacity duration-300"
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <NavButton
                text="Home"
                to="/"
                isActive={isActivePath("/")}
                isScrolled={isScrolled}
              />
              <NavButton
                text="About Us"
                to="/about-us"
                isActive={isActivePath("/about-us")}
                isScrolled={isScrolled}
              />
              <NavButton
                text="Product"
                to="/product"
                isActive={isActivePath("/product")}
                isScrolled={isScrolled}
              />
              <NavButton
                text="Whitepaper"
                to="/whitepaper"
                isActive={isActivePath("/whitepaper")}
                isScrolled={isScrolled}
              />
              <NavButton
                text="Contact"
                to="/contact-us"
                isActive={isActivePath("/contact-us")}
                isScrolled={isScrolled}
              />
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <ActionButton
                text="Try Gaussian Free"
                to="/contact-us?reason=try"
                variant="primary"
                isScrolled={isScrolled}
              />
              <ActionButton
                text="Sign in"
                to="/under-construction"
                variant="secondary"
                isScrolled={isScrolled}
              />
            </div>

            {/* Mobile Right Side - Try Gaussian + Menu Button */}
            <div className="md:hidden flex items-center gap-[14px]">
              {/* Try Gaussian Button - Mobile */}
              <Link
                href="/contact-us?reason=try"
                className="bg-[#1065E5] text-white px-4 py-3 rounded-lg text-[14px] font-medium hover:bg-[#0B4BC7] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Try Gaussian
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className={`
                  p-2 rounded-lg transition-colors duration-300 w-[33px] h-[33px] flex items-center justify-center
                  ${isScrolled 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {isMobileMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden transition-opacity duration-200 ease-out"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`
          fixed top-0 left-0 right-0 z-50 bg-[#F5F7FA] shadow-lg transform transition-all duration-200 ease-out md:hidden
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
        style={{
          boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="px-4 py-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-7">
            <Link 
              href="/" 
              className="flex items-center"
              onClick={closeMobileMenu}
            >
              <Image
                alt="Gaussian"
                src="/img/gaussian-text-1-1.png"
                width={112}
                height={33}
                priority
              />
            </Link>

            <div className="flex items-center gap-[14px]">
              <Link
                href="/contact-us?reason=try"
                className="bg-[#1065E5] text-white px-4 py-3 rounded-lg text-[14px] font-medium hover:bg-[#0B4BC7] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Try Gaussian
              </Link>

              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300 w-[33px] h-[33px] flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-2">
            {/* Home - Active State */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`
                flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] transition-colors duration-300
                ${isActivePath("/") 
                  ? 'bg-[rgba(46,156,255,0.1)] text-[#1065E5] font-medium border-b border-[#1065E5]' 
                  : 'text-[#49525B] font-normal hover:bg-gray-100'
                }
              `}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              className={`
                flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] transition-colors duration-300
                ${isActivePath("/about-us") 
                  ? 'bg-[rgba(46,156,255,0.1)] text-[#1065E5] font-medium border-b border-[#1065E5]' 
                  : 'text-[#49525B] font-normal hover:bg-gray-100'
                }
              `}
            >
              About Us
            </Link>

            <Link
              href="/product"
              onClick={closeMobileMenu}
              className={`
                flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] transition-colors duration-300
                ${isActivePath("/product") 
                  ? 'bg-[rgba(46,156,255,0.1)] text-[#1065E5] font-medium border-b border-[#1065E5]' 
                  : 'text-[#49525B] font-normal hover:bg-gray-100'
                }
              `}
            >
              Product
            </Link>

            <Link
              href="/whitepaper"
              onClick={closeMobileMenu}
              className={`
                flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] transition-colors duration-300
                ${isActivePath("/whitepaper") 
                  ? 'bg-[rgba(46,156,255,0.1)] text-[#1065E5] font-medium border-b border-[#1065E5]' 
                  : 'text-[#49525B] font-normal hover:bg-gray-100'
                }
              `}
            >
              Whitepaper
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className={`
                flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] transition-colors duration-300
                ${isActivePath("/contact-us") 
                  ? 'bg-[rgba(46,156,255,0.1)] text-[#1065E5] font-medium border-b border-[#1065E5]' 
                  : 'text-[#49525B] font-normal hover:bg-gray-100'
                }
              `}
            >
              Contact Us
            </Link>

            <Link
              href="/under-construction"
              onClick={closeMobileMenu}
              className="flex items-center justify-center py-[10px] px-[10px] rounded text-[18px] text-[#49525B] font-normal hover:bg-gray-100 transition-colors duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}; 