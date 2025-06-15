"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MessageSquareText, MoveUpRight } from "lucide-react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export default function Product() {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen pt-5">
      <NavBar />
      
      {/* GaussOS Section */}
      <section className="pt-[80px] px-4 md:py-[120px] md:px-[70px] bg-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/frame-17-1.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="flex flex-col gap-[14px]">
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-9">
              {/* Image - Desktop: First, Mobile: Second */}
              <div className="relative w-full md:w-[380px] h-[285px] order-2 md:order-1">
                <Image
                  src="/img/prod-gauss-os.png"
                  alt="GaussOS Dashboard"
                  width={380}
                  height={285}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content - Desktop: Second, Mobile: First */}
              <div className="flex-1 flex flex-col gap-[14px] order-1 md:order-2">
                <div className="flex flex-col gap-[14px]">
                  <h1 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold leading-[1.3] text-center md:text-left">
                    GaussOS
          </h1>
                  <p className="text-[#49525B] text-sm leading-[1.5] text-left">
                    GaussOS is the high-performance runtime that serves and schedules LLM invocations, simulation ticks, and data-processing jobs with microsecond precision. Written in C++ and Rust, it guarantees memory safety and eliminates race conditions while coordinating GPU, CPU, and I/O resources for thousands of parallel tasks making real-time automation both reliable and efficient.
          </p>
        </div>

                <div className="flex flex-col md:flex-row gap-[14px]">
                  <Button
                    property1="primary"
                    primaryText="Schedule Demo"
                    primaryIcon="left"
                    to="/contact-us?reason=demo"
                    className="bg-[#0B1F3A] text-white hover:bg-[#0B4BC7] w-full md:w-auto"
                    primary={<Calendar size={20} className="text-white" />}
                  />
                  <Button
                    property1="secondary"
                    primaryText="Contact Us"
                    primaryIcon="left"
                    to="/contact-us?reason=contact"
                    className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white group w-full md:w-auto"
                    primary={<MessageSquareText size={20} className="text-[#0B1F3A] group-hover:text-white transition-colors" />}
            />
          </div>
        </div>
            </div>

            {/* Benefits Cards Row */}
            <div className="flex gap-[14px] md:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide pt-1">
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Deterministic task scheduler maintains SLA-grade latency even under heavy multi-agent workloads.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Unified messaging bus lets AI agents read sensor telemetry and push actuator commands in the same cycle.
              </p>
            </div>
              </div>
              
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Modular kernel plugs into existing simulation engines or hardware controllers, future-proofing your automation stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GaussFlow Section */}
      <section className="py-12 px-4 md:px-[70px] bg-[#F5F7FA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-[14px]">
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-9">
              {/* Image - Desktop: First, Mobile: Second */}
              <div className="relative w-full md:w-[401px] h-[262px] order-2 md:order-1">
                <Image
                  src="/img/prod-gauss-flow.png"
                  alt="GaussFlow Dashboard"
                  width={401}
                  height={262}
                  className="w-full h-full object-cover rounded-lg"
          />
        </div>

              {/* Content - Desktop: Second, Mobile: First */}
              <div className="flex-1 flex flex-col gap-[14px] order-1 md:order-2">
                <div className="flex flex-col gap-[14px]">
                  <h1 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold leading-[1.3] text-center md:text-left">
                    GaussFlow
          </h1>
                  <p className="text-[#49525B] text-sm leading-[1.5] text-left">
                    GaussFlow is the AI workflow engine that chains specialised LLM &ldquo;experts&rdquo; into a coherent problem-solving team. It decomposes tasks, routes subtasks to the best model, and merges outputs—using parallel calls, branching logic, and cross-validation to reduce hallucinations and deliver mission-grade answers.
          </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-[14px]">
            <Button
              property1="primary"
                    primaryText="Schedule Demo"
                    primaryIcon="left"
                    to="/contact-us?reason=demo"
                    className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] w-full md:w-auto"
                    primary={<Calendar size={20} className="text-white" />}
            />
            <Button
              property1="secondary"
                    primaryText="Contact Us"
                    primaryIcon="left"
                    to="/contact-us?reason=contact"
                    className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white group w-full md:w-auto"
                    primary={<MessageSquareText size={20} className="text-[#0B1F3A] group-hover:text-white transition-colors" />}
          />
        </div>
      </div>
            </div>

            {/* Benefits Cards Row */}
            <div className="flex gap-[14px] md:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide pt-1">
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Plug-and-play model mix—combine open-source, proprietary, or domain-fine-tuned LLMs in a single pipeline
                  </p>
                </div>
          </div>

              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Consensus scoring and outlier rejection cut factual error rates, boosting trust for high-stakes use cases
                  </p>
            </div>
          </div>

              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Visual workflow designer and API make it easy to publish or reuse AI pipelines across business units.
                  </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* GaussAutomate Section */}
      <section className="py-12 px-4 md:px-[70px] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-[14px]">
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-9">
              {/* Image - Desktop: First, Mobile: Second */}
              <div className="relative w-full md:w-[412px] h-[259px] order-2 md:order-1">
                <Image
                  src="/img/prod-gauss-automate.png"
                  alt="GaussAutomate Dashboard"
                  width={412}
                  height={259}
                  className="w-full h-full object-cover rounded-lg"
                />
      </div>

              {/* Content - Desktop: Second, Mobile: First */}
              <div className="flex-1 flex flex-col gap-[14px] order-1 md:order-2">
                <div className="flex flex-col gap-[14px]">
                  <h1 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold leading-[1.3] text-center md:text-left">
                    GaussAutomate
                  </h1>
                  <p className="text-[#49525B] text-sm leading-[1.5] text-left">
                    GaussAutomate is the platform&apos;s interaction hub. It translates user commands or real-time system triggers into executable workflows. Acting as the &ldquo;brainstem,&rdquo; it captures events from business or physical environments, dispatches them to the AI orchestration layer, and returns results or alerts. Operators can then steer complex operations through plain language instructions or automated policies.
            </p>
          </div>

                <div className="flex flex-col md:flex-row gap-[14px]">
                  <Button
                    property1="primary"
                    primaryText="Schedule Demo"
                    primaryIcon="left"
                    to="/contact-us?reason=demo"
                    className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] w-full md:w-auto"
                    primary={<Calendar size={20} className="text-white" />}
                  />
                  <Button
                    property1="secondary"
                    primaryText="Contact Us"
                    primaryIcon="no"
                    to="/contact-us?reason=contact"
                    className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-4 py-3 w-full md:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Benefits Cards Row */}
            <div className="flex gap-[14px] md:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide pt-1">
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-white rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Zero-friction control that initiates, pauses, or reprioritized workflows through chat, API, or dashboard without touching code.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-white rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Always-on monitoring converts sensor feeds and log events into automatic remediations to shrink mean-time-to-response.
                  </p>
                </div>
          </div>

              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-white rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Unified audit trail records every instruction, trigger, and outcome, ensuring compliance and post-mortem clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GaussData Section */}
      <section className="py-12 px-4 md:px-[70px] bg-[#F5F7FA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-[14px]">
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-9">
              {/* Image - Desktop: First, Mobile: Second */}
              <div className="relative w-full md:w-[399px] h-[278px] order-2 md:order-1">
                <Image
                  src="/img/prod-gauss-data.png"
                  alt="GaussData Dashboard"
                  width={412}
                  height={264}
                  className="w-full h-full object-cover rounded-lg"
                />
      </div>

              {/* Content - Desktop: Second, Mobile: First */}
              <div className="flex-1 flex flex-col gap-[14px] order-1 md:order-2">
                <div className="flex flex-col gap-[14px]">
                  <h1 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold leading-[1.3] text-center md:text-left">
                    GaussData
                  </h1>
                  <p className="text-[#49525B] text-sm leading-[1.5] text-left">
                    GaussData orchestrates high-volume data flows with Nextflow, ingesting streams from IoT sensors, databases, and logs, then transforming and routing them to AI prompts, analytics, or digital-twin simulations. Every step is versioned and scalable—from laptop to cloud cluster—guaranteeing consistent, lineage-tracked data everywhere in the platform.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-[14px]">
                  <Button
                    property1="primary"
                    primaryText="Schedule Demo"
                    primaryIcon="left"
                    to="/contact-us?reason=demo"
                    className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] w-full md:w-auto"
                    primary={<Calendar size={20} className="text-white" />}
                  />
                  <Button
                    property1="secondary"
                    primaryText="Contact Us"
                    primaryIcon="left"
                    to="/contact-us?reason=contact"
                    className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white group w-full md:w-auto"
                    primary={<MessageSquareText size={20} className="text-[#0B1F3A] group-hover:text-white transition-colors" />}
                  />
                </div>
              </div>
            </div>

            {/* Benefits Cards Row */}
            <div className="flex gap-[14px] md:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide pt-1">
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Drag-and-drop pipeline templates accelerate onboarding of new data sources without infrastructure rewrites
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Built-in connectors for time-series, vector, and relational stores keep raw and derived data instantly accessible.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-[265px] h-[177px] md:flex-1 md:w-auto md:h-auto bg-[#F5F7FA] rounded-[5px] p-7 shadow-lg flex flex-col justify-center">
                <div className="flex flex-col gap-[14px]">
                  <h3 className="text-[#111112] text-lg font-medium text-center">
                    Benefit
                  </h3>
                  <p className="text-[#0F1538] text-sm leading-[1.5] opacity-70">
                    Automatic provenance and checksum validation satisfy regulatory and scientific reproducibility requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-9 px-4 md:py-[56px] md:px-[70px] bg-white">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="bg-gradient-to-br from-white to-[#EFF5F9] rounded-[5px] p-4 md:p-12 shadow-[0px_1px_10px_0px_rgba(0,0,0,0.12),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_2px_4px_0px_rgba(0,0,0,0.2)] w-full max-w-[1500px]">
            <div className="flex flex-col items-center gap-7 text-center">
              <h2 className="text-[#111112] text-2xl md:text-[32px] font-semibold leading-[1.3] max-w-[1500px]">
                Protect Your Systems with Automated and Secured Digital-Twin Agents
              </h2>
              
              <p className="text-black text-sm leading-[1.5] max-w-[1200px]">
                Experience Gaussian in action. We&apos;ll guide you through a tailored scenario—demonstrating how our automated platform not only detects and contains a breach in real time, but also spins up a live digital twin to simulate downstream supply-chain or financial impacts so you can respond with total confidence.
              </p>
              
              <div className="flex flex-col md:flex-row gap-[14px] justify-center w-full md:w-auto">
            <Button
                  property1="primary"
                  primaryText="Try Gaussian"
                  primaryIcon="right"
                  to="/contact-us?reason=try"
                  className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] px-4 py-3 w-full md:w-auto"
                  primary={<MoveUpRight size={24} className="text-white" />}
            />
            <Button
                  property1="secondary"
                  primaryText="Contact Us"
                  primaryIcon="no"
                  to="/contact-us?reason=contact"
                  className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-4 py-3 w-full md:w-auto"
            />
          </div>
        </div>
      </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 