import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "KABIR HOSSAIN | Cyber Security Specialist",
  description: "Pixel-perfect portfolio for Kabir Hossain, Junior Cyber Security Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans min-h-screen bg-white text-[#2d2e32]`}>
        {children}
      </body>
    </html>
  );
}
