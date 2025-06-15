"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

// Separate component that uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    // Check the reason parameter to determine prefill message
    const reason = searchParams.get('reason');
    
    let prefillMessage = "";
    
    switch (reason) {
      case 'try':
        prefillMessage = "Hi, I'm interested in trying Gaussian. Please let me know how I can get started.";
        break;
      case 'demo':
        prefillMessage = "Hi, I'd like to schedule a demo session to better understand how Gaussian works for my team.";
        break;
      case 'contact':
        prefillMessage = "Hi, I'd like to get in touch regarding Gaussian. Please let me know the next steps.";
        break;
      default:
        prefillMessage = "";
    }
    
    if (prefillMessage) {
      // Prefill message
      setMessage(prefillMessage);
      
      // Auto-focus on name field after a short delay
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Reset errors
    setErrors({
      name: "",
      email: "",
      message: ""
    });
    
    // Validate required fields
    let hasErrors = false;
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };
    
    if (!name.trim()) {
      newErrors.name = "Nama wajib diisi";
      hasErrors = true;
    }
    
    if (!email.trim()) {
      newErrors.email = "Email wajib diisi";
      hasErrors = true;
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Format email tidak valid. Contoh: nama@domain.com";
        hasErrors = true;
      }
    }
    
    if (!message.trim()) {
      newErrors.message = "Pesan wajib diisi";
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      setIsSubmitting(false);
      // Focus on first error field
      if (newErrors.name) {
        nameInputRef.current?.focus();
      }
      return;
    }
    
    // Create email content
    const subject = `Contact Form Submission from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}

---
This message was sent from the Gaussian contact form.
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:contact@gaussian.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    try {
      window.location.href = mailtoLink;
      // Show success message
      setTimeout(() => {
        alert('Email client akan terbuka. Silakan kirim email dari aplikasi email Anda.');
        setIsSubmitting(false);
      }, 1000);
    } catch {
      alert('Terjadi kesalahan saat membuka email client. Pastikan Anda memiliki aplikasi email yang terpasang.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white flex flex-col w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
        <Image
          src="/img/frame-17-1.png"
          alt="Background"
          fill
          className="w-full h-full object-contain object-left-top"
        />
      </div>

      <NavBar />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-7 md:gap-12 py-[100px] md:py-[120px] px-4 md:px-[70px]">
          <div className="flex flex-col gap-[14px] max-w-4xl text-center">
            <h1 className="text-2xl md:text-[42px] font-semibold text-[#0B1F3A] leading-[1.3] md:leading-[1.5]">
              Get in Touch
            </h1>
            <h2 className="text-lg md:text-[24px] font-medium md:font-semibold text-[#0B1F3A] leading-[1.3]">
              Partner With Gaussian — Shape Asia&apos;s AI Future
            </h2>
            <p className="text-sm md:text-[18px] text-[#49525B] leading-[1.5] mt-[14px]">
              Asia&apos;s financial, industrial, and cyber-security landscapes are evolving at break-neck speed. Gaussian is engineering the autonomous, digital-twin platform that will keep tomorrow&apos;s leaders ahead of risk, cost, and competition. We&apos;re now inviting a select group of strategic partners across the region to co-design industry-defining solutions and capture first-mover advantage.
            </p>
          </div>

          {/* Main Content Container - Benefits + Contact Section */}
          <div className="flex flex-col gap-7 md:gap-12 w-full max-w-7xl">
            {/* Benefits Cards */}
            <div className="bg-gradient-to-b from-white to-[#EFF5F9] border border-[#1065E5] rounded-md md:rounded-md flex flex-col md:flex-row gap-1 md:gap-10 p-[14px] md:p-7 w-full">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 md:gap-[14px] flex-1 pb-[14px] md:pb-0 md:pr-7 border-b md:border-b-0 md:border-r border-[#5E6975]">
                <h3 className="text-sm md:text-[18px] font-semibold md:font-medium text-[#111112] leading-[1.3]">
                  Unlock rapid ROI
                </h3>
                <p className="text-sm md:text-[14px] text-[#0F1538] leading-[1.5] opacity-70">
                  By embedding our secure, multi-LLM engine into your existing tech stack
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col gap-2 md:gap-[14px] flex-1 py-[14px] md:py-0 md:px-7 border-b md:border-b-0 md:border-r border-[#5E6975]">
                <h3 className="text-sm md:text-[18px] font-semibold md:font-medium text-[#111112] leading-[1.3]">
                  Co-innovate at R&D hubs
                </h3>
                <p className="text-sm md:text-[14px] text-[#0F1538] leading-[1.5] opacity-70">
                  In Singapore, Sydney, and Jakarta, backed by founders with 200+ combined patents and publications.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-2 md:gap-[14px] flex-1 pt-[14px] md:pt-0 md:pl-7">
                <h3 className="text-sm md:text-[18px] font-semibold md:font-medium text-[#111112] leading-[1.3]">
                  Accelerate compliance
                </h3>
                <p className="text-sm md:text-[14px] text-[#0F1538] leading-[1.5] opacity-70">
                  With architecture aligned to MAS, OJK, HKMA, and APRA guidelines from day one.
                </p>
              </div>
            </div>

            {/* Contact Form and Info Section */}
            <div className="flex flex-col md:flex-row gap-7 w-full">
              {/* Contact Form Card */}
              <div className="bg-gradient-to-b from-white to-[#EFF5F9] rounded-md md:rounded-md border-1 md:border-none border-[#5E6975] flex flex-col justify-between gap-[14px] md:gap-[14px] p-[14px] md:p-7 flex-1 md:flex-[2] min-h-[500px] shadow-lg order-1 md:order-1">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] h-full">
                  {/* Form Fields Container */}
                  <div className="flex flex-col gap-[14px] w-full">
                    {/* Name Field Card */}
                    <div className="flex flex-col gap-2">
                      <label className="text-lg md:text-[18px] font-normal text-[#111112] leading-[1.5] font-['Poppins']">Your Name *</label>
                      <div className={`border rounded bg-white px-4 py-3 ${errors.name ? 'border-red-500' : 'border-[#49525B]'}`}>
                        <input
                          type="text"
                          placeholder="Enter your name here..."
                          className="w-full text-[14px] text-[#49525B] leading-[1.5] bg-transparent outline-none font-['Poppins']"
                          ref={nameInputRef}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm font-['Poppins']">{errors.name}</p>
                      )}
                    </div>

                    {/* Email and Company Row Cards - Stack on Mobile */}
                    <div className="flex flex-col md:flex-row gap-[14px] md:gap-7">
                      {/* Email Field Card */}
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-lg md:text-[18px] font-normal text-[#111112] leading-[1.5] font-['Poppins']">Work Email *</label>
                        <div className={`border rounded bg-white flex items-center gap-2 px-4 py-3 ${errors.email ? 'border-red-500' : 'border-[#49525B]'}`}>
                          <Mail size={21} color="#49525B" />
                          <input
                            type="email"
                            placeholder="Enter your email address here..."
                            className="w-full text-[14px] text-[#49525B] leading-[1.5] bg-transparent outline-none font-['Poppins']"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-sm font-['Poppins']">{errors.email}</p>
                        )}
                      </div>

                      {/* Company Field Card */}
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-lg md:text-[18px] font-normal text-[#111112] leading-[1.5] font-['Poppins']">Company Name</label>
                        <div className="border border-[#49525B] rounded bg-white px-4 py-3">
                          <input
                            type="text"
                            placeholder="Enter your company name here..."
                            className="w-full text-[14px] text-[#49525B] leading-[1.5] bg-transparent outline-none font-['Poppins']"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Field Card */}
                    <div className="flex flex-col gap-2">
                      <label className="text-lg md:text-[18px] font-normal text-[#111112] leading-[1.5] font-['Poppins']">Message *</label>
                      <div className={`border rounded bg-white px-4 py-3 h-32 ${errors.message ? 'border-red-500' : 'border-[#49525B]'}`}>
                        <textarea
                          placeholder="Enter your message here..."
                          className="w-full h-full text-[14px] text-[#49525B] leading-[1.5] bg-transparent outline-none resize-none font-['Poppins']"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-500 text-sm font-['Poppins']">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`rounded-lg flex items-center gap-2 px-4 py-3 w-full md:w-auto justify-center md:justify-start transition-all duration-300 ease-in-out ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed text-white' 
                          : 'bg-[#0B1F3A] hover:bg-[#0A1A2E] hover:shadow-lg text-white cursor-pointer'
                      }`}
                    >
                      <span className="text-lg md:text-[18px] font-normal leading-[1.5] font-['Poppins']">
                        {isSubmitting ? 'Mengirim...' : 'Submit'}
                      </span>
                      {!isSubmitting && <ArrowUpRight size={24} color="white" />}
                      {isSubmitting && (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Info Cards */}
              <div className="flex flex-col gap-[14px] md:gap-[15px] flex-1 order-2 md:order-2">
                {/* Phone Card */}
                <div className="bg-white md:bg-[#F5F7FA] border border-[#1065E5] md:border-none rounded-[5px] md:rounded-[10px] flex flex-col justify-center gap-[14px] p-[14px] h-auto md:h-36 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Phone size={24} color="#0B1F3A" />
                    <h3 className="text-lg md:text-[18px] font-medium text-[#111112] leading-[1.3] font-['Poppins']">Phone</h3>
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-lg md:text-[18px] text-[#0F1538] leading-[1.5] opacity-70 font-['Poppins']">
                      Phone (SG): +65 9775 6731<br />
                      Phone (ID): +62 8111 4429 75<br />
                      Phone (AU): +61 499 0921 83
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white md:bg-[#F5F7FA] border border-[#1065E5] md:border-none rounded-[5px] md:rounded-[10px] flex flex-col justify-center gap-[14px] p-[14px] h-auto md:h-36 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Mail size={24} color="#0B1F3A" />
                    <h3 className="text-lg md:text-[18px] font-medium text-[#111112] leading-[1.3] font-['Poppins']">Email</h3>
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-lg md:text-[18px] text-[#0F1538] leading-[1.5] opacity-70 font-['Poppins']">
                      contact@gaussian.au<br />
                      fred@gaussian.sg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function ContactFormLoading() {
  return (
    <div className="bg-white flex flex-col w-full relative overflow-hidden">
      <NavBar />
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col items-center gap-7 md:gap-12 py-[100px] md:py-[120px] px-4 md:px-[70px]">
          <div className="flex flex-col gap-[14px] max-w-4xl text-center">
            <h1 className="text-2xl md:text-[42px] font-semibold text-[#0B1F3A] leading-[1.3] md:leading-[1.5]">
              Get in Touch
            </h1>
            <p className="text-sm md:text-[18px] text-[#49525B] leading-[1.5] mt-[14px]">
              Loading...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={<ContactFormLoading />}>
      <ContactForm />
    </Suspense>
  );
} 