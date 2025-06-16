"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { whitepapers, type Whitepaper } from "../../data/whitepapers";

export default function Whitepaper() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sort whitepapers by ID descending (newest first)
  const sortedWhitepapers = [...whitepapers].sort((a, b) => b.id - a.id);

  // Calculate dynamic pagination
  const totalPages = Math.ceil(sortedWhitepapers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWhitepapers = sortedWhitepapers.slice(startIndex, endIndex);

  // Function to truncate description to 100 characters
  const truncateDescription = (description: string, maxLength: number = 100) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + '...';
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDownload = (downloadLink: string, title: string) => {
    if (downloadLink) {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = `${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImageClick = (paper: Whitepaper) => {
    if (paper.available && paper.downloadLink) {
      handleDownload(paper.downloadLink, paper.title);
    }
  };

  return (
    <div className="whitepaper bg-white min-h-screen">
      <NavBar />
      
      {/* Main Content */}
      <div className="">
        <div className="flex flex-col items-center px-4 md:px-[70px] py-[120px] pb-7">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12 w-full max-w-[1048px]">
            {/* Hero Section */}
            <div className="bg-[#0B1F3A] rounded-2xl p-8 md:p-12 w-full flex-col md:flex-row justify-between items-center gap-8 hidden md:flex">
              {/* Left Side - Text Content */}
              <div className="flex flex-col gap-6 flex-1 max-w-[515px]">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#F5F7FA] text-2xl md:text-[32px] font-semibold leading-tight">
                    Gaussian Whitepaper
                  </h1>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Explore our vision and technology through the Gaussian whitepaper
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="w-[208px] h-[161px] flex-shrink-0">
                <Image
                  src="/img/whitepaper.png"
                  alt="Gaussian Whitepaper"
                  width={208}
                  height={161}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Whitepaper Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {currentWhitepapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white border border-[#C8CDD3] rounded-lg shadow-sm w-full max-w-[330px] h-[420px] flex flex-col overflow-hidden mx-auto"
                >
                  {/* Image Section - Fixed 330x200 */}
                  <div 
                    className={`
                      w-full h-[190px] overflow-hidden relative flex-shrink-0
                      ${paper.available ? 'bg-[#2261B6] cursor-pointer hover:opacity-90 transition-opacity' : 'bg-[#DFB400]'}
                    `}
                    onClick={() => handleImageClick(paper)}
                  >
                    <Image
                      src={paper.thumbnail}
                      alt={paper.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 330px"
                    />
                  </div>

                  {/* Content Section - Fixed layout */}
                  <div className="flex flex-col p-4">
                    {/* Title - Fixed height */}
                    <div className="h-[60px] ">
                      <h3 className="text-black text-lg font-semibold leading-tight line-clamp-2">
                        {paper.title}
                      </h3>
                    </div>
                    
                    {/* Description - Fixed height */}
                    <div className="h-[60px] mb-4">
                      <p className="text-[#5E6975] text-sm leading-relaxed">
                        {truncateDescription(paper.description)}
                      </p>
                    </div>
                    
                    {/* PDF Status - Fixed height */}
                    <div className=" mb-4">
                      <div className="flex flex-row justify-left items-center gap-2">
                        <Image
                          src="/img/icon-pdf.svg"
                          alt="PDF Icon"
                          width={16}
                          height={16}
                          className={`
                            ${paper.available ? "opacity-100" : "opacity-50"}
                          `}
                        />
                        <span className={`
                          text-sm font-medium
                          ${paper.available ? "text-[#1065E5]" : "text-[#909BA6]"}
                        `}>
                          {paper.available ? "PDF Available" : "PDF Unavailable"}
                        </span>
                      </div>
                    </div>

                    {/* Footer Section - Fixed at bottom */}
                    <div className="flex flex-row items-center justify-left px-4 py-3 border-t border-[#E5E7EB] bg-[#F9FAFB] -mx-4 -mb-4 mt-auto">
                      <span className="text-[#6B7280] text-xs">
                        {paper.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Pagination */}
            <div className="flex flex-row items-center gap-0 bg-white border border-[#C8CDD3] rounded-lg overflow-hidden shadow-sm scale-95 md:scale-100">
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`
                  flex flex-row justify-center items-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-white border-r border-[#C8CDD3]
                  ${currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed text-[#909BA6]' 
                    : 'hover:bg-[#F5F7FA] text-[#1065E5]'
                  }
                `}
              >
                <ChevronLeft size={14} className="md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">Previous</span>
              </button>

              {/* Dynamic Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`
                    flex flex-row justify-center items-center px-2 md:px-4 py-2 md:py-3 min-w-[32px] md:min-w-[44px] border-r border-[#C8CDD3] last:border-r-0
                    ${currentPage === page 
                      ? 'bg-[#1065E5] text-white' 
                      : 'bg-white text-[#1065E5] hover:bg-[#F5F7FA]'
                    }
                  `}
                >
                  <span className="text-xs md:text-sm font-medium">{page}</span>
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`
                  flex flex-row justify-center items-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3
                  ${currentPage === totalPages 
                    ? 'bg-white text-[#909BA6] opacity-50 cursor-not-allowed' 
                    : 'bg-[#1065E5] text-white hover:bg-[#0B4BC7]'
                  }
                `}
              >
                <span className="text-xs md:text-sm font-medium">Next</span>
                <ChevronRight size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 