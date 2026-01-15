import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat-alt",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://arpitaggarwal.netlify.app"),
  title: {
    default: "Arpit Aggarwal | Software Developer",
    template: "%s | Arpit Aggarwal",
  },
  description:
    "Arpit Aggarwal is a software developer specializing in modern web development using React, Next.js, and scalable backend systems.",
  keywords: [
    "Arpit Aggarwal",
    "Software Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Arpit Aggarwal", url: "https://arpitaggarwal.netlify.app" }],
  creator: "Arpit Aggarwal",
  openGraph: {
    title: "Arpit Aggarwal | Software Developer",
    description:
      "Portfolio of Arpit Aggarwal - software developer focused on building clean, scalable web applications.",
    url: "https://arpitaggarwal.netlify.app",
    siteName: "Arpit Aggarwal Portfolio",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Arpit Aggarwal Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Aggarwal | Software Developer",
    description:
      "Software developer portfolio showcasing projects, skills, and experience.",
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <body className="bg-[#3f3f3f] text-white antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
