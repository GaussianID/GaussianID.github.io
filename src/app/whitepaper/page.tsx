"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export default function Whitepaper() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Sample whitepaper data - you can replace with real data
  const whitepapers = [
    {
      id: 1,
      title: "Gaussian Platform Overview",
      description: "Comprehensive guide to our AI-powered digital twin and cybersecurity platform. Learn how Gaussian transforms enterprise operations.",
      available: true,
      lastUpdated: "Last updated 2 days ago"
    },
    {
      id: 2,
      title: "Digital Twin Technology",
      description: "Deep dive into our predictive digital twin technology and how it enables proactive decision-making for enterprises.",
      available: true,
      lastUpdated: "Last updated 1 week ago"
    },
    {
      id: 3,
      title: "Cybersecurity Framework",
      description: "Understanding our autonomous cyber defense capabilities and how they protect critical enterprise systems.",
      available: false,
      lastUpdated: "Coming soon"
    },
    {
      id: 4,
      title: "Implementation Guide",
      description: "Step-by-step implementation roadmap for deploying Gaussian platform in enterprise environments.",
      available: false,
      lastUpdated: "Coming soon"
    },
    {
      id: 5,
      title: "ROI Analysis",
      description: "Detailed analysis of return on investment and business value delivered by Gaussian platform implementation.",
      available: false,
      lastUpdated: "Coming soon"
    },
    {
      id: 6,
      title: "Technical Architecture",
      description: "Technical deep dive into Gaussian's architecture, including LLM integration and data processing capabilities.",
      available: false,
      lastUpdated: "Coming soon"
    }
  ];

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

  return (
    <div className="whitepaper bg-white min-h-screen">
      <NavBar />
      
      {/* Main Content */}
      <div className="pt-20">
        <div className="flex flex-col items-center px-4 md:px-[70px] py-[120px] pb-7">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center gap-12 w-full max-w-[1048px]">
            {/* Hero Section */}
            <div className="bg-[#0B1F3A] rounded-2xl p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-center gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {whitepapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white border border-[#C8CDD3] rounded-lg shadow-sm w-full h-[380px] flex flex-col overflow-hidden"
                >
                  {/* Image Section */}
                  <div className={`
                    flex flex-col justify-center items-center p-6 h-[220px]
                    ${paper.available ? 'bg-[#2261B6]' : 'bg-[#DFB400]'}
                  `}>
                    <div className="w-full h-full max-w-[140px] max-h-[140px]">
                      <Image
                        src="/img/whitepaper.png"
                        alt={paper.title}
                        width={140}
                        height={140}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-3 p-4 flex-1">
                    <h3 className="text-black text-lg font-semibold leading-tight line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-[#5E6975] text-sm leading-relaxed line-clamp-3 flex-1">
                      {paper.description}
                    </p>
                    
                    {/* PDF Button */}
                    <div className="flex flex-row justify-left items-left gap-2 py-2">
                      <FileText 
                        size={16} 
                        className={paper.available ? "text-[#1065E5]" : "text-[#909BA6]"} 
                      />
                      <span className={`
                        text-sm font-medium
                        ${paper.available ? "text-[#1065E5]" : "text-[#909BA6]"}
                      `}>
                        {paper.available ? "PDF Available" : "PDF Unavailable"}
                      </span>
                    </div>
                  </div>

                  {/* Footer Section */}
                  <div className="flex flex-row items-center px-4 py-3 border-t border-[#E5E7EB] bg-[#F9FAFB]">
                    <span className="text-[#6B7280] text-xs">
                      {paper.lastUpdated}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-row items-center gap-0 bg-white border border-[#C8CDD3] rounded-lg overflow-hidden shadow-sm">
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`
                  flex flex-row justify-center items-center gap-2 px-4 py-3 bg-white border-r border-[#C8CDD3]
                  ${currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed text-[#909BA6]' 
                    : 'hover:bg-[#F5F7FA] text-[#1065E5]'
                  }
                `}
              >
                <ChevronLeft size={16} />
                <span className="text-sm font-medium">Previous</span>
              </button>

              {/* Page Numbers */}
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`
                    flex flex-row justify-center items-center px-4 py-3 min-w-[44px] border-r border-[#C8CDD3] last:border-r-0
                    ${currentPage === page 
                      ? 'bg-[#1065E5] text-white' 
                      : 'bg-white text-[#1065E5] hover:bg-[#F5F7FA]'
                    }
                  `}
                >
                  <span className="text-sm font-medium">{page}</span>
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`
                  flex flex-row justify-center items-center gap-2 px-4 py-3
                  ${currentPage === totalPages 
                    ? 'bg-white text-[#909BA6] opacity-50 cursor-not-allowed' 
                    : 'bg-[#1065E5] text-white hover:bg-[#0B4BC7]'
                  }
                `}
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 