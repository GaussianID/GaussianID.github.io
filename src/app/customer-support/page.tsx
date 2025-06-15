"use client";

import React from "react";
import Image from "next/image";
import { Headphones } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export default function CustomerSupport() {
  return (
    <div className="bg-[#F5F7FA] flex flex-col w-full min-h-screen">
      <NavBar />
      
      {/* Hero Section with Background Image */}
      <div className="relative">
        {/* Background Image Container - Hidden on mobile */}
        <div className="hidden md:block w-full h-[762px] mt-[50px]">
          <Image 
            className="w-full h-full object-cover" 
            alt="A futuristic customer support scene featuring a friendly AI robot assisting a user" 
            src="/img/a-futuristic-customer-support-scene-featuring-a-friendly-ai-robo.png" 
            width={1440}
            height={762}
            priority
          />
        </div>

        {/* Mobile Background Image - Made fuller */}
        <div className="block md:hidden w-full h-[400px] relative overflow-hidden">
          <Image 
            className="w-full h-full object-cover object-center" 
            alt="A futuristic customer support scene featuring a friendly AI robot assisting a user" 
            src="/img/a-futuristic-customer-support-scene-featuring-a-friendly-ai-robo.png" 
            width={800}
            height={400}
            priority
          />
        </div>

        {/* Floating Card - Moved higher and adjusted positioning */}
        <div className="absolute top-[120px] md:top-35/100 left-0 right-0 px-4 md:px-[70px] z-10">
          <div 
            className="w-full rounded-2xl md:rounded-2xl shadow-xl overflow-hidden"
            style={{
              boxShadow: '0px 16px 40px -8px rgba(88, 92, 95, 0.16)'
            }}
          >
            {/* Dark Transparent Top Section */}
            <div className="bg-black/50 px-4 md:px-[70px] py-7 md:py-[120px] md:pb-[70px]">
              <div className="flex flex-col items-center gap-7 md:gap-12 text-center">
                <div className="flex flex-col gap-7">
                  <h1 className="text-white text-2xl md:text-[42px] font-semibold leading-[1.3] md:leading-[1.5] text-center">
                    We&apos;re Here to Keep Your <span className="text-[#1065E5]">AI Running 24 × 7</span>
                  </h1>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-white text-sm md:text-lg leading-[1.3] text-center">
                      Mission-critical finance, healthcare, government, and supply-chain workloads demand instant answers. Our support engineers have your back—around the clock, around the globe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* White Bottom Section - Support Cards */}
            <div className="flex flex-col md:flex-row bg-white">
              {/* Left Card - Customer Support */}
              <div className="flex-1 bg-gradient-to-b from-white to-[#F5F7FA] border-[#C8CDD3] md:border-r border-b md:border-b-0 p-4 md:p-7 flex flex-col items-center gap-4 md:gap-7">
                <div className="flex flex-col items-center gap-2 w-full md:w-[447px]">
                  <p className="text-[#1065E5] text-sm md:text-lg font-semibold text-center">Customer Support</p>
                  <h2 className="text-[#111112] text-lg md:text-2xl font-semibold text-center">Support Scope & Service Levels</h2>
                </div>
                <div className="flex gap-7 w-full justify-center items-center">
                  <Button
                    property1="tertiary"
                    concreteComponentNodeText="Support Request"
                    concreteComponentNodeIcon="right"
                    className="bg-[#1065E5] text-white hover:bg-[#0B4BC7] px-4 py-3 w-full md:w-auto justify-center"
                    concreteComponentNode={<Headphones size={20} className="text-white" />}
                  />
                </div>
              </div>

              {/* Right Card - Support Details with Proper Bullet Points */}
              <div className="flex-1 border-[#C8CDD3] border-b-0 p-4 md:p-7 flex flex-col justify-center gap-4 md:gap-7">
                <div className="flex flex-col gap-4 md:gap-7">
                  <ul className="text-[#49525B] text-sm leading-[1.5] space-y-2">
                    <li className="flex">
                      <span className="mr-2 mt-1 flex-shrink-0">•</span>
                      <span>24 × 7 Critical-Incident Hotline – P1 issues answered in &lt; 15 minutes, resolution work begins immediately.</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 mt-1 flex-shrink-0">•</span>
                      <span>Business-Hours Technical Support – P2/P3 tickets acknowledged within 4 business hours, updates every 24 hours until closure.</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 mt-1 flex-shrink-0">•</span>
                      <span>Dedicated Customer Success Manager – Assigned for Enterprise plans to align road-map, adoption, and quarterly health checks.</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 mt-1 flex-shrink-0">•</span>
                      <span>Security & Compliance Escalations – Direct route to CISO office for data-handling or audit questions (SOC 2, ISO 27001, HIPAA, MAS, etc.).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections - Adjusted spacing to prevent overlap */}
      <div className="flex flex-col items-center gap-7 md:gap-12 pt-[500px] md:pt-[100px] pb-8 md:pb-12">
        {/* Support Information Sections */}
        <div className="w-full flex flex-col gap-7 md:gap-12 px-4 md:px-[250px]">
          {/* How to Reach Us */}
          <div className="flex flex-col gap-[14px]">
            <h3 className="text-[#5E6975] text-lg md:text-2xl font-semibold">How to Reach Us</h3>
            <ul className="text-[#5E6975] text-sm md:text-lg leading-[1.5] space-y-3">
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Support Portal – Upload logs, screenshots, or diagnostic bundles to accelerate triage.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Email – support@gaussian.au (auto-creates a ticket).</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Hotline – Region-specific numbers for APAC, EMEA, and Americas.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Service-Status Dashboard – Real-time uptime and maintenance notices, subscribe to SMS/e-mail alerts.</span>
              </li>
            </ul>
          </div>

          {/* Self-Service Resources */}
          <div className="flex flex-col gap-[14px]">
            <h3 className="text-[#5E6975] text-lg md:text-2xl font-semibold">Self-Service Resources</h3>
            <ul className="text-[#5E6975] text-sm md:text-lg leading-[1.5] space-y-3">
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Knowledge Base – Step-by-step guides, run-book templates, and best-practice architectures.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Release Notes – Monthly updates on new features, bug fixes, and deprecation timelines.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>API & SDK Docs – Swagger and code samples to speed integration.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Training Hub – Video tutorials and certification tracks for admins, developers, and security teams.</span>
              </li>
            </ul>
          </div>

          {/* Onboarding & Proactive Care */}
          <div className="flex flex-col gap-[14px]">
            <h3 className="text-[#5E6975] text-lg md:text-2xl font-semibold">Onboarding & Proactive Care</h3>
            <ul className="text-[#5E6975] text-sm md:text-lg leading-[1.5] space-y-3">
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>White-Glove Onboarding – Architecture review, security checklist, and performance tuning before you go live.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Quarterly Executive Briefings – ROI metrics, upcoming features, and industry benchmarks.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Health-Bot – Optional Slack / Teams app that surfaces anomaly alerts and knowledge-base articles inside your collaboration tool.</span>
              </li>
            </ul>
          </div>

          {/* Customer Obligations */}
          <div className="flex flex-col gap-[14px]">
            <h3 className="text-[#5E6975] text-lg md:text-2xl font-semibold">Customer Obligations</h3>
            <div className="text-[#5E6975] text-sm md:text-lg leading-[1.5]">
              <p className="mb-3">To speed resolution, we ask customers to:</p>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Maintain a named technical contact list.</span>
                </li>
                <li className="flex">
                  <span className="mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Provide secure remote access or sanitized data samples for troubleshooting.</span>
                </li>
                <li className="flex">
                  <span className="mr-3 mt-1 flex-shrink-0">•</span>
                  <span>Keep platform components on supported versions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust & Safety */}
          <div className="flex flex-col gap-[14px]">
            <h3 className="text-[#5E6975] text-lg md:text-2xl font-semibold">Trust & Safety</h3>
            <ul className="text-[#5E6975] text-sm md:text-lg leading-[1.5] space-y-3">
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Data Privacy: We never view customer data unless you explicitly grant temporary, audited access.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Secure Handling: All ticket metadata is stored in an ISO 27001 and SOC 2 Type II–certified environment.</span>
              </li>
              <li className="flex">
                <span className="mr-3 mt-1 flex-shrink-0">•</span>
                <span>Compliance Mapping: Support procedures align with HIPAA, GLBA, and local regulations (MAS, OJK, HKMA, APRA).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full px-4 md:px-[100px]">
          <div 
            className="bg-gradient-to-b from-white to-[#EFF5F9] rounded-2xl md:rounded-2xl p-4 md:p-12 shadow-lg"
            style={{
              boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="flex flex-col items-center gap-4 md:gap-7 text-center">
              <h2 className="text-[#111112] text-2xl md:text-[32px] font-semibold leading-[1.3]">
                Ready for help?
              </h2>
              <p className="text-[#000000] text-sm leading-[1.5] text-center">
                Submit a new request through our Support Portal and a Gaussian engineer will respond shortly.
              </p>
              <div className="flex justify-center items-center gap-[14px] w-full">
                <Button
                  property1="tertiary"
                  concreteComponentNodeText="Support Request"
                  concreteComponentNodeIcon="right"
                  className="bg-[#1065E5] text-white hover:bg-[#0B4BC7] px-4 py-3 text-lg w-full md:w-auto justify-center"
                  concreteComponentNode={<Headphones size={24} className="text-white" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 