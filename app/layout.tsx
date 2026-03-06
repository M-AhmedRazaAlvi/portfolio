import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Profile from "../public/images/profile.jpeg";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ahmed Raza Alvi",
  description:
    "Ahmed Raza Alvi is a software engineer who builds accessible, inclusive products and digital experiences for the web and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Raza Alvi",
    url: "https://ahmedrazaalvi.vercel.app/",
    image: "",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "RootPointers",
    },
    sameAs: [
      "https://github.com/M-AhmedRazaAlvi",
      "https://www.linkedin.com/in/ahmed-raza-alvi-51847020b",
      "https://api.whatsapp.com/send?phone=923034069202",
    ],
    description:
      "Software Engineer specializing in Flutter, iOS, and Android development. Expert in building high-quality, feature-rich mobile applications.",
    knowsAbout: [
      "Flutter",
      "iOS",
      "Android",
      "GraphQL",
      "AI",
      "Firebase",
      "BLoC",
      "GetX",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href={Profile.src} />
        <meta property="og:image" content={Profile.src}></meta>
        <meta property="og:image:secure_url" content={Profile.src}></meta>
        <meta name="google-adsense-account" content="ca-pub-3740913295618449" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3740913295618449"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
