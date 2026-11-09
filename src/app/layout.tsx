import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-jn1z.vercel.app"),
  title: "Subrahmanya Manjunatha Bhat — AI/ML, Software Development and Technology Portfolio",
  description:
    "Information Science & Engineering student at Presidency University, Bengaluru. AI/ML and software developer building practical software and intelligent tools that turn ideas into useful real-world experiences.",
  alternates: { canonical: "https://my-portfolio-jn1z.vercel.app/" },
  openGraph: {
    type: "website",
    url: "https://my-portfolio-jn1z.vercel.app/",
    siteName: "Subrahmanya Manjunatha Bhat — Portfolio",
    title: "Subrahmanya Manjunatha Bhat — AI/ML, Software Development and Technology Portfolio",
    description:
      "AI/ML and software developer building practical software and intelligent tools that turn ideas into useful real-world experiences.",
    images: [{ url: "/image-of-mine.jpg", width: 880, height: 880, alt: "Portrait of Subrahmanya Manjunatha Bhat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrahmanya Manjunatha Bhat — AI/ML, Software Development and Technology Portfolio",
    description:
      "AI/ML and software developer building practical software and intelligent tools that turn ideas into useful real-world experiences.",
    images: ["/image-of-mine.jpg"],
  },
  authors: [{ name: "Subrahmanya Manjunatha Bhat" }],
  creator: "Subrahmanya Manjunatha Bhat",
  keywords: ["Subrahmanya Bhat", "AI", "Machine Learning", "Software Development", "Presidency University", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-[#F4EFE7] text-[#28221E]`}
      >
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-[#28221E] px-4 py-2 text-sm font-medium text-[#FBF9F5] focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none focus:ring-2 focus:ring-[#B64A32]"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
