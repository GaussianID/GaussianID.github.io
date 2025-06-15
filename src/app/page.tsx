"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar, MessageSquareText, MoveRight, ChevronLeft, ChevronRight, Check, PhoneIncoming, MoveUpRight } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentUseCaseIndex, setCurrentUseCaseIndex] = useState(0);
  const [currentRoadmapIndex, setCurrentRoadmapIndex] = useState(0);
  const [productProgress, setProductProgress] = useState(0);
  const [activeWhyGaussianFeature, setActiveWhyGaussianFeature] = useState(0); // Start with first feature active
  const [isWhyGaussianHovered, setIsWhyGaussianHovered] = useState(false); // Track hover state
  
  // Refs for tracking without causing re-renders
  const progressRef = useRef(0);
  const productIndexRef = useRef(0);
  const roadmapIndexRef = useRef(0);
  const whyGaussianIndexRef = useRef(0);

  // Initialize refs with current state values
  useEffect(() => {
    roadmapIndexRef.current = currentRoadmapIndex;
    whyGaussianIndexRef.current = activeWhyGaussianFeature;
  }, [currentRoadmapIndex, activeWhyGaussianFeature]);

  // Auto-cycle through Why Gaussian features every 5 seconds (only when not hovered)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWhyGaussianHovered) {
        whyGaussianIndexRef.current = (whyGaussianIndexRef.current + 1) % 3;
        setActiveWhyGaussianFeature(whyGaussianIndexRef.current);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isWhyGaussianHovered]);

  // Product progress and cycling with 10-second intervals - Fixed version
  useEffect(() => {
    const progressInterval = setInterval(() => {
      progressRef.current += 1;
      setProductProgress(progressRef.current);
      
      if (progressRef.current >= 100) {
        // Reset progress and move to next product
        progressRef.current = 0;
        productIndexRef.current = (productIndexRef.current + 1) % 4;
        
        setProductProgress(0);
        setCurrentProductIndex(productIndexRef.current);
      }
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // Auto-cycle through roadmap every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      roadmapIndexRef.current = (roadmapIndexRef.current + 1) % 5;
      setCurrentRoadmapIndex(roadmapIndexRef.current);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentRoadmapIndex]); // Add dependency to reset when user clicks

  const handleProductClick = (index: number) => {
    setCurrentProductIndex(index);
    // Reset progress bar to 0 when user clicks
    progressRef.current = 0;
    productIndexRef.current = index;
    setProductProgress(0);
  };

  // Function to handle Why Gaussian feature hover (desktop only)
  const handleWhyGaussianFeatureHover = (index: number, isHovering: boolean) => {
    if (window.innerWidth >= 768) { // Desktop only
      setIsWhyGaussianHovered(isHovering);
      if (isHovering) {
        setActiveWhyGaussianFeature(index);
        whyGaussianIndexRef.current = index;
      }
    }
  };

  // Function to handle Implementation Roadmap phase click
  const handleRoadmapClick = (index: number) => {
    setCurrentRoadmapIndex(index);
    // Reset roadmap cycle timer when user clicks
    roadmapIndexRef.current = index;
  };

  const products = [
    {
      title: "GaussOS – LLM Operating System",
      description: "That hardens and governs enterprise LLMs with secure fine-tuning, elastic hosting, role-based access control, immutable versioning and secure model serving. Data privacy and compliance start from day one.",
      image: "/img/frame-1171275509.png"
    },
    {
      title: "GaussFlow – LLM Apps",
      description: "Build and deploy intelligent applications with our low-code platform. Create custom workflows, integrate with existing systems, and scale AI solutions across your organization.",
      image: "/img/frame-1171275514.png"
    },
    {
      title: "GaussAutomate – LLM Automation Engine",
      description: "Automate complex business processes with AI-driven decision making. From data processing to customer service, let intelligent agents handle routine tasks while you focus on strategy.",
      image: "/img/frame-1171275509-1.png"
    },
    {
      title: "GaussData – Data-Intensive Workflow Orchestration",
      description: "Orchestrate massive data workflows with intelligent scheduling and resource optimization. Handle petabyte-scale operations with automated scaling and fault tolerance.",
      image: "/img/frame-1171275509-2.png"
    }
  ];

  const workflowSteps = [
    {
      title: "Connect Your World (GaussData)",
      description: "Streams in databases, real-time logs, transactions, and sensor telemetry.\nCleans, normalises, and time-stamps everything for AI-ready ingestion."
    },
    {
      title: "Understand & Predict (GaussOS + GaussFlow)",
      description: "LLM agents benchmark live data against digital-twin baselines.\nFlags anomalies and forecasts downstream impacts before they hit."
    },
    {
      title: "Decide & Automate (GaussAutomate)",
      description: "Auto-launches playbooks—quarantines a server, reroutes a shipment, hedges a currency position, etc.\nExecutes safely under policy controls, with full audit logging."
    },
    {
      title: "Simulate & Optimise (GaussFlow)",
      description: "Visualises proposed actions inside a live digital twin.\n\nLets you run \"what-if\" scenarios, tweak parameters, and pick the best cost-risk option before go-live."
    },
    {
      title: "Learn & Improve (Platform feedback loop)",
      description: "Feeds outcomes back into the data lake to refine models and update twins.\nContinuous self-tuning—no manual retraining required."
    }
  ];

  const useCases = [
    {
      title: "Finance & Banking",
      image: "/img/ai-powered-for-finance-and-banking-1.png",
      cards: [
        {
          title: "Balance-Sheet Digital Twin & Stress Testing",
          description: "Mirror portfolios, liquidity ladders, and counter-party exposures in real time. Run thousands of macro-economic \"what-if\" scenarios in GaussFlow to surface VaR, liquidity gaps, and capital ratios within minutes."
        },
        {
          title: "Autonomous Cyber Defense",
          description: "GaussAutomate ingests SWIFT messages, firewall logs, and endpoint telemetry, launching playbooks that isolate compromised hosts or block fraudulent payments—reducing MTTC by over 40%."
        },
        {
          title: "AI-Powered RegTech & Reporting",
          description: "Compile Basel III, IFRS 9, and local regulator templates from the data lake; LLM agents cross-validate, attach audit evidence, and submit filings on schedule."
        },
        {
          title: "Secure Fintech Integration Hub",
          description: "REST / ISO 20022 gateways with GaussOS role-based controls and tokenized data masking enable rapid partner onboarding without exposing core banking systems."
        }
      ]
    },
    {
      title: "Cybersecurity & Defense",
      image: "/img/cybersecurity-and-defense-ai.png",
      cards: [
        {
          title: "Predictive Threat Detection",
          description: "AI-powered threat intelligence systems analyze patterns and predict potential security breaches before they occur, enabling proactive defense measures."
        },
        {
          title: "Automated Incident Response",
          description: "Intelligent automation systems respond to security incidents in real-time, containing threats and minimizing damage through coordinated response protocols."
        },
        {
          title: "Security Operations Center Enhancement",
          description: "AI-enhanced SOC capabilities provide 24/7 monitoring with intelligent alert prioritization and automated threat hunting capabilities."
        },
        {
          title: "Compliance & Risk Management",
          description: "Automated compliance monitoring and risk assessment tools ensure adherence to security standards and regulatory requirements."
        }
      ]
    },
    {
      title: "Telecommunication",
      image: "/img/telecommunication-ai.png",
      cards: [
        {
          title: "Network Optimization & Management",
          description: "AI-driven network optimization systems automatically adjust bandwidth allocation and routing to ensure optimal performance and minimal downtime."
        },
        {
          title: "Predictive Maintenance for Infrastructure",
          description: "Predictive analytics monitor network infrastructure health, predicting equipment failures and scheduling maintenance before service disruptions occur."
        },
        {
          title: "Customer Experience Enhancement",
          description: "Intelligent customer service systems provide personalized support and proactive issue resolution to improve overall customer satisfaction."
        },
        {
          title: "5G Network Intelligence",
          description: "Advanced AI systems optimize 5G network deployment and management, ensuring efficient spectrum utilization and enhanced connectivity."
        }
      ]
    },
    {
      title: "Transportation & Supply Chain",
      image: "/img/transportation-and-supply-chain-ai.png",
      cards: [
        {
          title: "Predictive Logistics Optimization",
          description: "AI-powered logistics systems predict demand patterns and optimize routing, inventory management, and delivery schedules for maximum efficiency."
        },
        {
          title: "Supply Chain Risk Management",
          description: "Intelligent risk assessment tools monitor global supply networks, automatically identifying potential disruptions and suggesting alternative solutions."
        },
        {
          title: "Fleet Management & Optimization",
          description: "Smart fleet management systems optimize vehicle routing, maintenance schedules, and fuel consumption while ensuring regulatory compliance."
        },
        {
          title: "Autonomous Transportation Systems",
          description: "Advanced AI systems support autonomous vehicle operations, traffic management, and smart infrastructure integration for safer transportation."
        }
      ]
    }
  ];

  const handlePrevUseCase = () => {
    setCurrentUseCaseIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const handleNextUseCase = () => {
    setCurrentUseCaseIndex((prev) => (prev + 1) % useCases.length);
  };

  return (
    <div className="home pt-20">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden  md:min-h-screen md:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image 
            className="w-full h-full object-cover opacity-90" 
            alt="Gaussian Platform Dashboard" 
              src="/img/frame-17-1.png" 
            width={1920}
            height={1080}
              priority
            />
          {/* Light overlay for better text readability - very subtle */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        {/* Background Pattern - removed for cleaner look */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 py-4 md:py-12  flex items-center">
          <div className="text-center space-y-8 w-full">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-6xl font-semibold text-primary-500 leading-tight max-w-5xl mx-auto drop-shadow-sm">
                    Agentic Solution for Intelligent Digital Twin and Cybersecurity
                  </h1>
              
              {/* Subheading */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto">
                  Discover how our AI-powered solutions can transform your enterprise operations with &quot;intelligent automation&quot; and predictive insights.
                </p>
                
                <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 max-w-5xl mx-auto">
                  Gaussian combines Large Language Model (LLM)-driven dynamic digital twin technologies with cyber protection to help your enterprise proactively safeguard critical systems by automating and optimizing complex processes.
                </p>
              </div>
                </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-7 justify-center items-center w-full md:w-auto">
              {/* Schedule Demo Button - Using Button Component */}
                  <Button
                property1="primary"
                primaryText="Schedule Demo"
                primaryIcon="left"
                to="/contact-us?reason=demo"
                className="bg-primary-500 text-white hover:bg-primary-400 shadow-sm w-full md:w-auto"
                primary={<Calendar size={20} className="text-white" />}
              />
              
              {/* Contact Us Button - Using Button Component */}
              <Button
                property1="secondary"
                primaryText="Contact Us"
                    primaryIcon="left"
                to="/contact-us?reason=contact"
                className="border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-500 hover:text-white w-full md:w-auto"
                primary={<MessageSquareText size={20} className="current-color" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-full mx-auto">
        {/* About Us Section - Wider cards with less side padding */}
        <div className="py-4 md:py-8 px-4 md:px-8 bg-gradient-to-b from-white to-white">
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-7 md:gap-0">
            {/* Left Side - About Us */}
            <div className="flex-1 bg-gradient-to-b from-white to-[#F5F7FA] border-r border-b border-[#C8CDD3] rounded-tl-lg rounded-bl-lg p-6 md:p-8 flex flex-col items-center gap-5 md:gap-7">
              <div className="flex flex-col items-center gap-2 max-w-lg">
                <h3 className="text-[#1065E5] text-base md:text-lg font-semibold text-center">About Us</h3>
                <h2 className="text-[#111112] text-xl md:text-2xl font-semibold text-center">Agentic AI, Powered by Gaussian Platform</h2>
              </div>
              <p className="text-[#49525B] text-sm leading-[1.5] text-center max-w-md">
                Gaussian is envisioned to be an enhanced yet cost effective Agentic AI solution. By overcoming memory limitations and reducing hallucinations, our intelligent automation and digital twin are reliable and more effective.
              </p>
              <Button
                    property1="primary"
                primaryText="See Detail"
                primaryIcon="right"
                to="/about-us"
                className="bg-[#1065E5] text-white hover:bg-[#0B4BC7] w-full md:w-auto"
                primary={<MoveRight size={20} className="text-white" />}
              />
            </div>

            {/* Right Side - Value Proposition */}
            <div className="flex-1 border-b border-[#C8CDD3] rounded-tr-lg rounded-br-lg p-6 md:p-8 flex flex-col justify-center gap-5 md:gap-7">
              <h2 className="text-black text-xl md:text-2xl font-semibold">Value Proposition</h2>
              <div className="flex flex-col gap-2 md:gap-[14px]">
                <p className="text-[#49525B] text-sm leading-[1.5]">
                  Gaussian is a highly adaptable platform that treats LLMs as AI-powered &quot;operating systems&quot;. Using the platform, enterprises build digital twins of their operations and deploy intelligent super-agents that detect issues, reduce risks, simulate outcomes, and take autonomous action. This drives both efficiency and continuous innovation.
                </p>
                <ul className="text-[#49525B] text-sm leading-[1.5] space-y-1 list-disc list-inside">
                  <li>Strategic, multi-source reasoning</li>
                  <li>Dynamic, intelligent reporting</li>
                  <li>Long-term-memory personalization</li>
                  <li>Proactive intelligence</li>
                  <li>Digital-twin simulation & monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Gaussian Section - Updated based on Figma design */}
        <div className="py-12 px-4 md:px-[70px] bg-gradient-to-b from-white to-white min-h-[700px] md:min-h-[600px]">
          <div className="flex flex-col items-center gap-9 max-w-6xl mx-auto">
            <h2 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold text-center">Why Gaussian</h2>
            
            <div className="flex flex-col gap-4 md:flex-row md:gap-12 w-full">
              {/* Left Side - Challenge with nested Solution */}
              <div className="flex-1">
                {/* Challenge Card with nested Solution */}
                <div className="bg-gradient-to-b from-white to-[#EFF5F9] rounded-lg p-7 shadow-xl border-1 border-[#C8CDD3]">
                  <div className="flex flex-col gap-[14px]">
                    <h3 className="text-[#49525B] text-lg font-semibold">The Challenge</h3>
                    <p className="text-[#49525B] text-sm leading-[1.5]">
                      Enterprises confront an accelerating volume of cyber-attacks while managing ever-complex finance, supply-chain, and micro/macro-economic operations. Disconnected point tools add integration overhead and force teams into reactive and fragmented decision-making.
                    </p>
                    
                    {/* Nested Solution Box */}
                    <div className="bg-transparent border-[#C8CDD3] border-1 rounded-lg p-[14px] shadow-sm">
                      <div className="flex flex-col gap-[14px]">
                        <h4 className="text-[#49525B] text-lg font-semibold">Our Solution</h4>
                        <p className="text-[#49525B] text-sm leading-[1.5]">
                          Gaussian unifies AI-driven cybersecurity and high-fidelity digital-twin simulation in a single platform, delivering continuous protection and real-time operational insight for industries where speed, accuracy, and resilience are non-negotiable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Features with hover interactions (desktop) and click interactions (mobile) */}
              <div className="flex-1 flex flex-col gap-[14px] min-h-[335px]">
                {/* First feature - Proactive Cyber Defense */}
                  <div 
                      className={`
                    group cursor-pointer rounded-lg shadow-lg transition-all duration-300 ease-in-out
                    ${activeWhyGaussianFeature === 0 
                      ? 'bg-[#F5F7FA] border border-[#1065E5] p-7 md:p-7' 
                      : 'bg-white border border-transparent p-[14px] md:p-7 md:hover:bg-[#F5F7FA] md:hover:border-[#1065E5]'
                    }
                  `}
                  onMouseEnter={() => handleWhyGaussianFeatureHover(0, true)}
                  onMouseLeave={() => handleWhyGaussianFeatureHover(0, false)}
                >
                  <div className="flex flex-col gap-[10px]">
                    <h3 className={`
                      font-semibold transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 0 
                        ? 'text-[#1065E5] text-lg md:text-2xl' 
                        : 'text-[#49525B] text-base md:text-lg md:group-hover:text-[#1065E5] md:group-hover:text-2xl'
                      }
                    `}>
                      Proactive Cyber Defense
                    </h3>
                    <p className={`
                      text-[#49525B] text-sm md:text-lg font-medium leading-[1.3] transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 0 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-20'
                      }
                    `}>
                      Autonomous agents detect and neutralize threats in seconds, slashing alert fatigue and security-team workload.
                    </p>
                  </div>
                </div>

                {/* Second feature - Predictive Digital Twins */}
                <div 
                  className={`
                    group cursor-pointer rounded-lg shadow-lg transition-all duration-300 ease-in-out
                    ${activeWhyGaussianFeature === 1 
                      ? 'bg-[#F5F7FA] border border-[#1065E5] p-7 md:p-7' 
                      : 'bg-white border border-transparent p-[14px] md:p-7 md:hover:bg-[#F5F7FA] md:hover:border-[#1065E5]'
                    }
                  `}
                  onMouseEnter={() => handleWhyGaussianFeatureHover(1, true)}
                  onMouseLeave={() => handleWhyGaussianFeatureHover(1, false)}
                >
                  <div className="flex flex-col gap-[10px]">
                    <h3 className={`
                      font-semibold transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 1 
                        ? 'text-[#1065E5] text-lg md:text-2xl' 
                        : 'text-[#49525B] text-base md:text-lg md:group-hover:text-[#1065E5] md:group-hover:text-2xl'
                      }
                    `}>
                      Predictive Digital Twins
                    </h3>
                    <p className={`
                      text-[#49525B] text-sm md:text-lg font-medium leading-[1.3] transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 1 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-20'
                      }
                    `}>
                      Live replicas of physical or cyber-physical systems forecast disruptions, run what-if scenarios, and highlight optimal responses.
                    </p>
                  </div>
                </div>

                {/* Third feature - Integrated Value */}
                <div 
                  className={`
                    group cursor-pointer rounded-lg shadow-lg transition-all duration-300 ease-in-out
                    ${activeWhyGaussianFeature === 2 
                      ? 'bg-[#F5F7FA] border border-[#1065E5] p-7 md:p-7' 
                      : 'bg-white border border-transparent p-[14px] md:p-7 md:hover:bg-[#F5F7FA] md:hover:border-[#1065E5]'
                    }
                  `}
                  onMouseEnter={() => handleWhyGaussianFeatureHover(2, true)}
                  onMouseLeave={() => handleWhyGaussianFeatureHover(2, false)}
                >
                  <div className="flex flex-col gap-[10px]">
                    <h3 className={`
                      font-semibold transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 2 
                        ? 'text-[#1065E5] text-lg md:text-2xl' 
                        : 'text-[#49525B] text-base md:text-lg md:group-hover:text-[#1065E5] md:group-hover:text-2xl'
                      }
                    `}>
                      Integrated Value
                    </h3>
                    <p className={`
                      text-[#49525B] text-sm md:text-lg font-medium leading-[1.3] transition-all duration-300 ease-in-out
                      ${activeWhyGaussianFeature === 2 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-20'
                      }
                    `}>
                      A single platform eliminates stitching multiple tools together, shortens deployment cycles, and accelerates return on investment.
                    </p>
                  </div>
                </div>
              </div>
                </div>
                    </div>
                  </div>

        {/* Our Product Suite Section - Redesigned based on Figma */}
        <div className="py-12 px-4 md:px-16 bg-[#F5F7FA] h-[600px] md:h-[680px] flex items-center">
          <div className="flex flex-col items-center gap-9 max-w-7xl mx-auto">
            <h2 className="text-[#174078] text-2xl md:text-[32px] font-semibold text-center">Our Product Suite</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-9 w-full">
              {/* Left Side - Product Image (hidden on mobile) */}
              <div className="hidden md:block w-[621px] h-[530px] rounded-lg overflow-hidden">
                  <Image
                    src={products[currentProductIndex].image}
                    alt={products[currentProductIndex].title}
                    width={621}
                    height={530}
                  className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                  />
              </div>

              {/* Right Side - Product Accordion */}
              <div className="flex flex-col gap-7 w-full max-w-full md:max-w-[677px]">
                {products.map((product, index) => (
                  <div key={index} className="flex flex-col">
                    {/* Product Item */}
                    <div className={`
                      flex flex-col justify-center gap-2 pb-1 transition-all duration-500 ease-in-out
                      ${currentProductIndex === index ? 'gap-2' : 'gap-[14px]'}
                    `}>
                    {/* Product Header */}
                    <div className="flex flex-col gap-2">
                        <h3 
                          className={`
                            font-semibold text-left transition-all duration-500 ease-in-out cursor-pointer hover:text-[#1065E5]
                        ${currentProductIndex === index 
                              ? 'text-[#111112] text-lg md:text-2xl' 
                              : 'text-[#49525B] text-base md:text-lg'
                        }
                          `}
                          onClick={() => handleProductClick(index)}
                        >
                        {product.title}
                      </h3>
                      
                        {/* Expandable Content - Only for active product */}
                        {currentProductIndex === index && (
                          <div className="flex flex-col gap-2 animate-fadeIn">
                            <p className="text-[#111112] text-sm md:text-lg leading-[1.5] text-left">
                          {product.description}
                        </p>
                            
                            <div className="flex justify-start items-center gap-2 py-3">
                        <Button
                          property1="tertiary"
                                concreteComponentNodeText="See Details"
                                concreteComponentNodeIcon="right"
                                to1="/product"
                                className="text-[#1065E5] hover:text-[#0B4BC7] text-sm font-medium"
                                concreteComponentNode={<MoveUpRight size={20} className="text-[#1065E5]" />}
                        />
                      </div>
                    </div>
                        )}
                      </div>

                      {/* Progress Bar - Only for active product */}
                      {currentProductIndex === index && (
                        <div className="w-full h-[5px] bg-[#C8CDD3] rounded-full relative overflow-hidden">
                          <div 
                            className="absolute left-0 top-0 h-full bg-[#0F78F8] rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${productProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Separator Line - Only for non-active products */}
                    {currentProductIndex !== index && (
                      <div className="w-full h-[1px] bg-[#BDD5E7] mt-[14px]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
              </div>

        {/* How It Works Section */}
        <div className="py-12 px-4 md:px-16 bg-white">
          <div className="flex flex-col items-center gap-9 max-w-7xl mx-auto">
            <h2 className="text-[#0B1F3A] text-2xl md:text-[32px] font-semibold text-center">How It Works</h2>
            
            {/* Mobile: Horizontal scroll, Desktop: 3 top + 2 bottom grid */}
            <div className="w-full">
              {/* Mobile Layout - Horizontal scroll */}
              <div className="flex flex-row gap-4 w-full overflow-x-auto scrollbar-hide md:hidden pt-1">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F7FA] rounded-lg p-6 shadow-md flex-shrink-0 w-[323px] h-[221px] flex flex-col gap-3 justify-center items-start"
                    style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.2)' }}
                  >
                    <h3 className="text-[#111112] text-base font-medium leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#0F1538] text-sm leading-relaxed opacity-70">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop Layout - 3 top + 2 bottom */}
              <div className="hidden md:flex flex-col gap-7 items-center pt-1">
                {/* Top Row - 3 cards */}
                <div className="flex gap-7 justify-center">
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <div
                    key={index}
                      className="bg-[#F5F7FA] rounded-lg p-7 shadow-md w-[330px] h-[221px] flex flex-col gap-[14px] justify-center items-start"
                      style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.2)' }}
                    >
                      <h3 className="text-[#111112] text-lg font-medium leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#0F1538] text-sm leading-relaxed opacity-70">
                        {step.description}
                      </p>
                  </div>
                ))}
                    </div>

                {/* Bottom Row - 2 cards */}
                <div className="flex gap-7 justify-center">
                {workflowSteps.slice(3, 5).map((step, index) => (
                  <div
                    key={index + 3}
                      className="bg-[#F5F7FA] rounded-lg p-7 shadow-md w-[330px] h-[221px] flex flex-col gap-[14px] justify-center items-start"
                      style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.2)' }}
                    >
                      <h3 className="text-[#111112] text-lg font-medium leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#0F1538] text-sm leading-relaxed opacity-70">
                        {step.description}
                      </p>
                  </div>
                ))}
                </div>
                      </div>
                    </div>
                  </div>
                </div>

        {/* Use Cases Section */}
        <div className="bg-[#0B1F3A] px-4 md:px-0">
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-[600px] md:h-[600px]">
            {/* Left Side - Title, Image and Navigation */}
            <div className="py-12 flex-1 flex flex-col gap-4 md:gap-0">
              {/* Title Section */}
              <div className="flex flex-col items-start gap-1 mb-4">
                <p className="text-white text-base md:text-lg">Use Cases</p>
                <h2 className="text-[#F5F7FA] text-lg md:text-2xl font-semibold transition-all duration-500 ease-in-out">
                  {useCases[currentUseCaseIndex].title}
                </h2>
              </div>

              {/* Image - Full height with proportional width */}
              <div className="flex-1 rounded-lg overflow-hidden mb-2 md:mb-4 flex items-left justify-left">
                  <Image
                    src={useCases[currentUseCaseIndex].image}
                    alt={useCases[currentUseCaseIndex].title}
                    width={478}
                  height={400}
                  className="h-full w-auto object-contain transition-all duration-700 ease-in-out"
                  key={currentUseCaseIndex}
                  style={{
                    animation: 'fadeInScale 0.7s ease-in-out',
                    maxWidth: '100%'
                  }}
                  />
              </div>

                {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrevUseCase}
                  disabled={currentUseCaseIndex === 0}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    currentUseCaseIndex === 0 
                      ? 'text-[#909BA6] cursor-not-allowed opacity-50' 
                      : 'text-[#F5F7FA] hover:text-white'
                  }`}
                  >
                    <ChevronLeft size={24} />
                  <span className="text-base md:text-lg">Previous</span>
                  </button>
                  
                  <button
                    onClick={handleNextUseCase}
                  disabled={currentUseCaseIndex === useCases.length - 1}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    currentUseCaseIndex === useCases.length - 1 
                      ? 'text-[#909BA6] cursor-not-allowed opacity-50' 
                      : 'text-[#F5F7FA] hover:text-white'
                  }`}
                >
                  <span className="text-base md:text-lg">Next</span>
                    <ChevronRight size={24} />
                  </button>
                </div>
                </div>

            {/* Right Side - Full Height Scrollable Cards */}
            <div className="flex-1 h-full overflow-y-auto scrollbar-hide px-1 md:pl-10">
              <div className="flex flex-col gap-[14px] py-6 md:py-12 transition-all duration-500 ease-in-out pt-1">
                  {useCases[currentUseCaseIndex].cards.map((card, index) => (
                    <div
                    key={`${currentUseCaseIndex}-${index}`}
                    className="bg-white border border-[#1065E5] rounded-lg p-5 md:p-7 shadow-lg transition-all duration-500 ease-in-out animate-fadeIn"
                      style={{
                      boxShadow: '0px 16px 40px -8px rgba(88, 92, 95, 0.16)',
                      animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex flex-col gap-[14px]">
                        <h3 className="text-[#0B1F3A] text-lg font-medium leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[#49525B] text-sm leading-relaxed opacity-70">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
                        </div>
                      </div>
                    </div>

        {/* Implementation Roadmap Section */}
        <section className="py-16 px-4 md:px-16 bg-[#F5F7FA] h-[800px] md:h-screen flex items-center">
          <div className="max-w-7xl mx-auto">
            <div className="mb-9">
              <h2 className="text-[#1065E5] text-2xl md:text-[32px] font-semibold">Implementation Roadmap</h2>
                        </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-[105px]">
              {/* Left Side - Accordion Phases */}
              <div className="flex-1 max-w-full md:max-w-[749px] flex flex-col gap-4 md:gap-[14px] h-auto md:h-[466px]">
                {[
                  {
                    phase: "Phase 1",
                    title: "Foundation Setup (Months 0-3)",
                    description: [
                      "Deploy GaussData pipelines to ingest and normalize logs, transactions, and sensor feeds.",
                      "Stand up a minimal GaussOS runtime inside the customer's cloud/VPC.",
                      "Launch an MVP GaussFlow pipeline for baseline anomaly detection.",
                      "Milestone: All target data sources connected; first LLM insights visible in a sandbox dashboard."
                    ],
                    isActive: currentRoadmapIndex === 0
                  },
                  {
                    phase: "Phase 2", 
                    title: "Pilot & Proof of Value (Months 3-6)",
                    description: [
                      "Add GaussAutomate to run one cyber-defense or digital-twin playbook.",
                      "Onboard 1-2 design-partner business units (e.g., treasury, supply-chain ops).",
                      "Establish baseline KPIs (MTTR, forecast error, etc.) to measure uplift.",
                      "Milestone: Pilot playbook executes end-to-end with < 5-minute response time and ≥ 20 % efficiency or risk-reduction gain."
                    ],
                    isActive: currentRoadmapIndex === 1
                  },
                  {
                    phase: "Phase 3",
                    title: "Hardening & Controlled Rollout (Months 6-12)",
                    description: [
                      "Align platform with SOC 2 and ISO 27001; enable role-based access in GaussOS.",
                      "Extend GaussFlow to multi-LLM consensus pipelines for higher accuracy.",
                      "Train internal SRE/SecOps teams on playbook authoring and operations.",
                      "Milestone: Compliance gap assessment passed; two additional business units live under SLA monitoring."
                    ],
                    isActive: currentRoadmapIndex === 2
                  },
                  {
                    phase: "Phase 4",
                    title: "Enterprise-Wide Production (Months 12-18)",
                    description: [
                      "Localize dashboards and alerts for APAC and other target regions.",
                      "Integrate GaussAutomate triggers with existing ITSM and SOAR tooling.",
                      "Deploy an executive KPI cockpit powered by GaussFlow insights.",
                      "Milestone: At least five mission-critical workflows running in production with 99.9 % platform uptime."
                    ],
                    isActive: currentRoadmapIndex === 3
                  },
                  {
                    phase: "Phase 5",
                    title: "Continuous Optimization & Expansion (Months 18-24)",
                    description: [
                      "Feed outcome data back into GaussData for continuous model fine-tuning.",
                      "Add new digital-twin domains (e.g., energy, logistics) to broaden coverage.",
                      "Co-develop advanced playbooks alongside line-of-business stakeholders.",
                      "Milestone: Year-one ROI > 3x documented; roadmap approved for global or multi-subsidiary rollout."
                    ],
                    isActive: currentRoadmapIndex === 4
                  }
                ].map((item, index) => (
                  <div key={index} className="transition-all duration-300 flex-1">
                    {/* Phase Header */}
                    <div 
                      className={`
                        flex items-center gap-1 pb-3 cursor-pointer hover:opacity-80 transition-opacity duration-200
                      ${item.isActive ? '' : 'border-b border-[#49525B] border-opacity-20'}
                      `}
                      onClick={() => handleRoadmapClick(index)}
                    >
                      <div className={`
                        w-[80px] min-w-[80px] px-0 py-2 rounded-lg flex items-center justify-center text-center flex-shrink-0
                        ${item.isActive 
                          ? 'bg-[#0F78F8] text-white' 
                          : 'bg-[#C8CDD3] bg-opacity-12 border border-[#49525B] text-[#49525B]'
                        }
                      `}>
                        <span className="text-lg font-medium whitespace-nowrap">{item.phase}</span>
                      </div>
                      <div className="flex-1 ml-1">
                      <h3 className={`
                          transition-all duration-300
                        ${item.isActive 
                            ? 'text-[#49525B] text-xl font-semibold' 
                          : 'text-[#49525B] text-lg font-medium'
                        }
                      `}>
                        {item.title}
                      </h3>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${item.isActive 
                        ? 'h-auto opacity-100 mb-1' 
                        : 'h-0 opacity-0'
                      }
                    `}>
                      <div className="py-[10px] pl-0">
                        <ul className="text-[#111112] text-sm leading-[1.5] space-y-2">
                          {item.description.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-[#111112] flex items-start">
                              <span className="mr-2 mt-1.5 w-1 h-1 bg-[#111112] rounded-full flex-shrink-0"></span>
                              <span className="flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side - Static Image */}
              <div className="hidden md:block flex-shrink-0">
                <div className="w-[436px] h-[466px] rounded-lg overflow-hidden">
                  <Image
                    src="/img/frame-1171275575-1.png"
                    alt="Implementation Roadmap Visualization"
                    width={436}
                    height={466}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Try Gaussian Section */}
        <section className="py-14 bg-white px-4 md:px-0">
          <div className="max-w-full mx-auto flex justify-center">
            <div className="max-w-full">
              <div className="bg-gradient-to-b from-white to-[#EFF5F9] rounded-2xl p-6 md:p-12 shadow-lg">
                <div className="flex flex-col items-center gap-7 text-center">
                  <h2 className="text-[#111112] text-2xl md:text-[32px] font-semibold leading-[1.3]">
                    Protect Your Systems with Automated and Secured Digital-Twin Agents
                  </h2>

                  <p className="text-black text-sm leading-[1.5] max-w-3xl">
                    Experience Gaussian in action. We&apos;ll guide you through a tailored scenario—demonstrating how our automated platform not only detects and contains a breach in real time, but also spins up a live digital twin to simulate downstream supply-chain or financial impacts so you can respond with total confidence.
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[14px] w-full md:w-auto">
                    <Button
                      property1="primary"
                      primaryText="Try Gaussian"
                      primaryIcon="right"
                      to="/contact-us?reason=try"
                      className="bg-[#0B1F3A] text-white hover:bg-[#0A1A2E] px-4 py-3 w-full md:w-auto"
                      primary={<MoveUpRight className="text-white w-6 h-6" />}
                    />
                    <Button 
                      property1="secondary"
                      primaryText="Contact Us"
                      to="/contact-us?reason=contact"
                      className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-4 py-3 w-full md:w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Business Model Section - Redesigned based on Figma */}
        <section className="py-20 px-4 md:px-6 bg-[#F5F7FA] relative overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0 opacity-50">
            {/* Left Background - Waves */}
            <div className="absolute left-0 top-0 w-1/2 h-full">
              <Image
                src="/img/clip-path-group-1.png"
                alt="Pricing Background Left"
                fill
                className="w-full h-full object-contain opacity-100 scale-200"
              />
            </div>
            
            {/* Right Background - X Pattern */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <Image
                src="/img/icon-plus-space-sm-screen-size-desktop-1-1.png"
                alt="Pricing Background Right"
                fill
                className="w-full h-full object-contain opacity-80 scale-150"
              />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Business Model</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              {/* Pricing Cards Container - Side by side with horizontal scroll */}
              <div className="w-full lg:w-auto overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 items-center min-w-max">
                  {/* SaaS Subscription Card */}
                  <div className="w-[336px] bg-white border border-gray-200 rounded-lg p-8 shadow-lg flex-shrink-0">
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">SaaS Subscription</h3>
                      <span className="inline-block text-gray-600 text-sm rounded-full">Coming Soon</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-600">SaaS Subscription</p>
                    </div>
                    <Button 
                      property1="primary"
                      primaryText="Contact Us"
                      primaryIcon="left"
                      to="/contact-us?reason=contact"
                      className="w-full bg-blue-900 text-white hover:bg-blue-800"
                      primary={<PhoneIncoming size={20} className="text-white" />}
                    />
                  </div>

                  {/* PaaS Subscription Card - Staggered */}
                  <div className="w-[336px] bg-[#0B1F3A] border-2 border-[#1065E5] rounded-lg p-8 shadow-lg mt-0 md:mt-12 flex-shrink-0">
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">PaaS Subscription</h3>
                      <span className="inline-block text-[#909BA6] text-sm rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <div className="mb-6">
                      <p className="text-white">SaaS Subscription</p>
                    </div>
                    <Button 
                      property1="secondary"
                      primaryText="Contact Us"
                      primaryIcon="left"
                      to="/contact-us?reason=contact"
                      className="w-full bg-white text-blue-900 hover:bg-gray-100"
                      primary={<PhoneIncoming size={20} className="text-blue-900" />}
                    />
                  </div>
                </div>
              </div>

              {/* Potential ROI Section */}
              <div className="flex-1 lg:max-w-md mt-8 lg:mt-0">
                <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Potential ROI</h3>
                  <div className="space-y-4 overflow-y-auto scrollbar-hide max-h-[300px]">
                    {[
                      "Lower direct cyber-attack costs.",
                      "Fewer operational disruptions from untested changes.",
                      "Rapid scenario testing for more confident decision-making."
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                          <Check size={20} className="text-gray-900" />
                        </div>
                        <p className="text-gray-900 text-sm md:text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
