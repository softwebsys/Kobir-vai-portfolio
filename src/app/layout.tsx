import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "KABIR HOSSAIN | Cyber Security Specialist",
  description: "Senior-level security aesthetics for a Junior Cyber Security Engineer. Specializing in vulnerability assessment and network security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0e0e0e] selection:bg-white selection:text-black">

        {children}
      </body>
    </html>

  );
}

