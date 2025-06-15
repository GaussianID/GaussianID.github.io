import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaussian - Agentic Solution for Intelligent Digital Twin and Cybersecurity",
  description: "Gaussian empowers enterprises in finance, HR, supply chain, and strategy with real-time insights, automated processes, and autonomous threat defense. By combining LLM-driven digital twin technology with cyber protection, it helps safeguard critical systems while optimizing complex operations.",
  keywords: "AI, Digital Twin, Cybersecurity, LLM, Automation, Enterprise, Finance, Banking",
  authors: [{ name: "Gaussian" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
