import { Poppins, Audiowide } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
  display: "swap",
});

export const metadata = {
  title: "KABIR HOSSAIN | Cyber Security Specialist",
  description: "Pixel-perfect portfolio for Kabir Hossain, Junior Cyber Security Engineer based in Dhaka, specializing in Network Security and Vulnerability Assessments.",
  keywords: ["Cyber Security", "Network Security", "Vulnerability Assessment", "Ethical Hacking", "Kabir Hossain", "Bangladesh", "Security Engineer"],
  authors: [{ name: "Kabir Hossain" }],
  openGraph: {
    title: "KABIR HOSSAIN | Cyber Security Specialist",
    description: "Junior Cyber Security Engineer specializing in digital frontier protection.",
    url: "https://kabirhossain.bd",
    siteName: "Kabir Hossain Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${audiowide.variable} font-sans min-h-screen bg-white text-[#2d2e32]`}>
        {children}
      </body>
    </html>
  );
}
