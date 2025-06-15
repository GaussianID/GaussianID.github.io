"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export default function AboutUs() {
    return (
      <div className="bg-white flex flex-col w-full">
      <NavBar />
        
        {/* Hero Section */}
      <div className="relative bg-white overflow-hidden min-h-[450px] md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            className="w-full h-full object-cover opacity-90" 
            alt="About Gaussian Background" 
            src="/img/frame-17-1.png" 
            width={1920}
            height={1080}
            priority
          />
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 pt-[110px] flex flex-col items-center gap-6 md:gap-12 min-h-[450px] md:min-h-screen">
          {/* Text Content - Centered */}
          <div className="flex flex-col items-center gap-[14px] text-center max-w-4xl px-4">
            {/* Main Heading */}
            <h1 className="text-2xl md:text-[42px] font-semibold text-[#0B1F3A] leading-[1.3] mb-[14px]">
            About Gaussian
          </h1>
            
            {/* Description */}
            <p className="text-sm md:text-[18px] text-[#5E6975] leading-[1.5] max-w-3xl px-4 md:px-0">
              Gaussian is envisioned to be an enhanced yet cost effective Agentic AI solution. By overcoming memory limitations and reducing hallucinations, our intelligent automation and digital twin are reliable and more effective.
            </p>
          </div>

          {/* Hero Image - Below text, extending to bottom */}
          <div className="w-full flex-1 relative px-4 md:px-0">
            <Image
              src="/img/frame-1171275480-1-1-4.png"
              alt="About Gaussian Hero"
              width={1300}
              height={600}
              className="w-full h-full object-cover object-top rounded-lg md:rounded-none"
              style={{ 
                minHeight: '200px',
                maxHeight: '502px'
              }}
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-[#0B1F3A] flex flex-col px-4 py-7 md:flex-row md:justify-between md:items-center md:gap-32 md:pl-[70px] md:py-12">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-7">
          {/* Content */}
          <div className="flex flex-col gap-[14px]">
            {/* Badge */}
            <div className="bg-white rounded-[28px] flex justify-center items-center gap-[10px] p-[10px] w-[90px]">
              <span className="text-[#1065E5] text-[11px] font-normal">Whitepaper</span>
            </div>
            
            {/* Title */}
            <h2 className="text-white text-2xl font-semibold leading-[1.3] text-left">
              Explore our vision and technology through the Gaussian whitepaper
            </h2>
          </div>
          
          {/* Image */}
          <div className="w-full h-[203px] rounded-[15px] overflow-hidden">
            <Image
              src="/img/whitepaper.png"
              alt="Gaussian Platform"
              width={704}
              height={448}
              className="w-full h-full object-contain "
            />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col gap-[14px]">
            <Link href="/whitepaper" className="bg-[#1065E5] text-white hover:bg-[#0B4BC7] text-[18px] px-4 py-3 rounded-lg w-full flex items-center justify-center gap-2 font-normal">
              <FileText size={20} />
              Read Now
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:gap-32 md:w-full">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-6 lg:gap-9 py-8 lg:py-[70px] w-full lg:w-[630px]">
            <div className="flex flex-col gap-[14px]">
              {/* Badge */}
              <div className="bg-white rounded-[28px] flex justify-center items-center gap-[10px] p-[10px] w-[148px]">
                <span className="text-[#1065E5] text-[14px] font-normal">Whitepaper</span>
              </div>
              
              {/* Title */}
              <h2 className="text-white text-2xl lg:text-[42px] font-semibold leading-[1.5] text-left">
                Explore our vision and technology through the Gaussian whitepaper
              </h2>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-[14px]">
              <Link href="/whitepaper" className="bg-[#1065E5] text-white hover:bg-[#0B4BC7] text-[18px] px-4 py-3 rounded-lg w-full md:w-fit flex items-center justify-center gap-2 font-normal">
                <FileText size={20} />
                Read Now
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-[704px] pr-[70px]">
            <div className="w-full h-[250px] lg:h-[468px] rounded-[15px] overflow-hidden">
              <Image
                src="/img/whitepaper.png"
                alt="Gaussian Platform"
                width={704}
                height={448}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators Section */}
      <div className="bg-white flex flex-col items-center gap-6 md:gap-9 py-12 md:px-[70px]">
        <h2 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold leading-[1.3] text-center">
          Key Differentiators
        </h2>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-5 w-full max-w-[1200px]">
          {/* Row 1 - Agent Autonomy (590px) + Long-Term Memory (438px) */}
          <div className="flex gap-5 justify-center">
            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[590px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Agent Autonomy
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: Conventional LLMs require explicit prompts and cannot act independently.
                <br /><br />
                Gaussian&apos;s Solution: Deploy policy-controlled agents that can autonomously plan and execute tasks end-to-end.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[438px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Long-Term Memory
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: Context is short-lived; knowledge disappears after sessions.
                <br /><br />
                Gaussian&apos;s Solution: Integrate with external, versioned memory for persistent episodic and semantic recall.
              </p>
            </div>
          </div>

          {/* Row 2 - Organizational Memory (438px) + Fact Consistency (590px) */}
          <div className="flex gap-5 justify-center">
            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[438px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Organizational Memory
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: No built-in system to capture or reuse enterprise knowledge.
                <br /><br />
                Gaussian&apos;s Solution: Build a dynamic knowledge graph from curated documents, chats, and decisions.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[590px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Fact Consistency
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: Prone to hallucinations and outdated responses.
                <br /><br />
                Gaussian&apos;s Solution: Ground all answers in real-time, validated enterprise data with dynamic retrieval.
              </p>
          </div>
        </div>

          {/* Row 3 - Debuggability & Audit (590px) + Cost Efficiency (438px) */}
          <div className="flex gap-5 justify-center">
            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[590px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Debuggability & Audit
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: Opaque processes make troubleshooting difficult.
                <br /><br />
                Gaussian&apos;s Solution: Use a Model-Context Protocol to log and trace every action for full transparency.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[438px] h-[225px]">
              <h3 className="text-[#49525B] text-[24px] font-semibold leading-[1.5]">
                Cost Efficiency
              </h3>
              <p className="text-[#49525B] text-[14px] leading-[1.5]">
                Limitations: High compute costs from large contexts and retrieval.
                <br /><br />
                Gaussian&apos;s Solution: Optimize with adaptive memory, caching, and efficient model routing to reduce TCO.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="md:hidden w-full">
          <div className="flex gap-5 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* All cards have equal size on mobile - 342x259 */}
            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Agent Autonomy
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Limitations:</strong> Conventional LLMs require explicit prompts and cannot act independently.
        </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Gaussian&apos;s Solution:</strong> Deploy policy-controlled agents that can autonomously plan and execute tasks end-to-end.
      </div>
                  </li>
                </ul>
        </div>
      </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Long-Term Memory
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
          <div>
                      <strong>Limitations:</strong> Context is short-lived; knowledge disappears after sessions.
          </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
          <div>
                      <strong>Gaussian&apos;s Solution:</strong> Integrate with external, versioned memory for persistent episodic and semantic recall.
          </div>
                  </li>
                </ul>
        </div>
      </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Organizational Memory
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Limitations:</strong> No built-in system to capture or reuse enterprise knowledge.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Gaussian&apos;s Solution:</strong> Build a dynamic knowledge graph from curated documents, chats, and decisions.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Fact Consistency
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Limitations:</strong> Prone to hallucinations and outdated responses.
          </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Gaussian&apos;s Solution:</strong> Ground all answers in real-time, validated enterprise data with dynamic retrieval.
            </div>
                  </li>
                </ul>
          </div>
            </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Debuggability & Audit
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Limitations:</strong> Opaque processes make troubleshooting difficult.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Gaussian&apos;s Solution:</strong> Use a Model-Context Protocol to log and trace every action for full transparency.
          </div>
                  </li>
                </ul>
        </div>
      </div>

            <div className="bg-gradient-to-b from-[#F5F7FA] to-white border border-[#1452B9] rounded p-7 flex flex-col gap-[14px] w-[342px] h-[259px] flex-shrink-0">
              <h3 className="text-[#49525B] text-[18px] font-semibold leading-[1.3]">
                Cost Efficiency
              </h3>
              <div className="text-[#49525B] text-[14px] leading-[1.5]">
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Limitations:</strong> High compute costs from large contexts and retrieval.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Gaussian&apos;s Solution:</strong> Optimize with adaptive memory, caching, and efficient model routing to reduce TCO.
                    </div>
                  </li>
                </ul>
        </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 