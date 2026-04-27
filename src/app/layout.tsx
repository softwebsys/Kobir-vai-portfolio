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
      className={`${outfit.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0b] selection:bg-primary selection:text-primary-foreground">
        <div className="fixed inset-0 -z-50 h-full w-full bg-[#0a0a0b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(10,10,11,1))]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>
        {children}
      </body>
    </html>
  );
}

