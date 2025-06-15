"use client";

import React from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white flex flex-col w-full">
      <NavBar />
      
      {/* Body */}
      <div className="flex flex-col items-center gap-7 md:gap-12 pt-[100px] md:pt-[120px] px-4 md:px-[250px] pb-8 md:pb-12">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-7 md:gap-[47px] w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-[14px] w-full">
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-[#0B1F3A] text-2xl md:text-[42px] font-semibold md:font-semibold leading-[1.3] md:leading-[1.5] text-center font-['Poppins']">
                Privacy Policy
        </h1>
              <div className="flex flex-col gap-[14px] w-full">
                <p className="text-[#111112] text-sm leading-[1.5] text-center font-['Poppins']">
                  Effective 20 May 2025
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
                Gaussian Pte. Ltd. and its affiliates (&quot;Gaussian,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respect your privacy. This policy explains how we collect, use, disclose, and protect personal data obtained through the gaussian.ai website and any sub-domains (collectively, the &quot;Site&quot;). The policy is designed to meet or exceed the requirements of the EU and UK GDPR, Singapore PDPA, Australia&apos;s Privacy Act, the CCPA/CPRA, and sector-specific rules such as HIPAA and GLBA to the extent they apply to marketing-site interactions. Processing that occurs inside the Gaussian SaaS platform is governed by a separate Data Processing Addendum executed with each customer.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              1. Scope of This Policy
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              This policy applies to personal data you provide directly on the Site—for example when you fill out a contact form, subscribe to a newsletter, register for an event, or communicate with us by email using links provided on the Site. It also covers limited data we collect automatically when you visit, such as your IP address and pages viewed. The policy does not cover information we process on behalf of customers inside our cloud platform.
                </p>
              </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              2. Data We Collect
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              When you engage with the Site we may collect your name, job title, company, business email address, business phone number, industry, and project interests if you choose to share them. In addition, our analytics tools capture device and browser details, IP address, referring URLs, and the time you spend on each page. We also record your marketing preferences—for instance, whether you have opted in to receive product updates. The Site is intended for business audiences; we do not intentionally solicit or store sensitive personal data such as health records or government identifiers.
                </p>
              </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              3. How and Why We Use Personal Data
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              We use contact details to respond to enquiries, schedule product demonstrations, send newsletters you have requested, and invite you to events. Site-usage data helps us secure the Site, diagnose performance issues, and understand which content resonates with visitors. In regulated industries we may retain certain information to comply with legal or audit obligations. Where the GDPR applies, our lawful bases are legitimate interest, consent, and, where necessary, legal obligation. We keep personal data only as long as necessary for the purpose collected—typically no more than twenty-four months after your last interaction for enquiries and marketing, fourteen months for analytics logs (which are then aggregated), or longer if required to establish, exercise, or defend legal claims.
                </p>
              </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              4. Disclosure of Data
            </h2>
            </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              Gaussian does not sell personal data. We share it only with service providers that host our website, manage our customer-relationship systems, send emails, or provide analytics—each bound by strict confidentiality and data-processing agreements. We may also share information with professional advisers under privilege, with law-enforcement agencies when legally compelled, or with successor entities in the event of a merger or acquisition, provided equivalent privacy safeguards remain in place.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              5. International Data Transfers
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              Our remote-first team operates from several jurisdictions, and our cloud infrastructure is located in AWS regions such as Singapore, Sydney, Tokyo, Frankfurt, and Virginia. When personal data originating in the European Economic Area or the United Kingdom is transferred outside those regions, we rely on the EU and UK Standard Contractual Clauses and apply additional technical measures—such as encryption and strict access controls—to protect the data.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              6. Data Security
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              Gaussian employs administrative, technical, and physical safeguards appropriate to the sensitivity of the information we hold. Data is encrypted in transit using TLS 1.3 and at rest using AES-256. Access to systems follows a least-privilege model enforced by multi-factor authentication, with all actions logged. We continuously monitor for intrusion attempts, perform annual penetration tests, and maintain a SOC 2 Type II security program.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              7. Your Privacy Rights
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              Depending on your jurisdiction, you may have the right to access the personal data we hold about you, correct inaccurate information, request deletion, restrict or object to certain processing, receive a portable copy of your data, or withdraw consent for marketing at any time. You can exercise these rights by emailing privacy@gaussian.au. We respond to all requests within thirty days, or ten business days for California residents exercising CPRA rights. You also have the right to lodge a complaint with your local supervisory authority.
              </p>
            </div>

          {/* Section 8 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              8. Cookies and Similar Technologies
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              The Site uses first-party cookies and privacy-centric analytics tools to maintain security, remember language or region settings, and understand aggregate visitor behaviour. You can disable cookies through your browser; however, some Site features may not function correctly without them.
            </p>
          </div>

          {/* Section 9 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              9. Children&apos;s Privacy
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              The Site is directed to business professionals and is not intended for children under sixteen years of age. We do not knowingly collect personal data from minors. If you believe a child has provided us with personal information, please contact us so that we can delete it.
            </p>
          </div>

          {/* Section 10 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              10. Changes to This Policy
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              We may update this Privacy Policy from time to time to reflect legal, technical, or business developments. When we make material changes, we will revise the &quot;Effective Date&quot; above and provide a prominent notice on the Site or via email. Your continued use of the Site after an update signifies acceptance of the revised policy.
            </p>
          </div>

          {/* Section 12 */}
          <div className="flex flex-col gap-[14px] w-full">
            <h2 className="text-[#5E6975] text-lg md:text-2xl font-semibold leading-[1.3] text-left font-['Poppins']">
              12. Contact Us
            </h2>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <p className="text-[#5E6975] text-sm md:text-lg leading-[1.5] text-left font-['Poppins']">
              Questions about this policy, our privacy practices, or your rights should be sent to privacy@gaussian.au. You may also write to the Gaussian Privacy Office, 68 Circular Road, #02-01, Singapore 049422
            </p>
            </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 