import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundAnimation } from "@/components/common/BackgroundAnimation";
=======
>>>>>>> f13f5b27285cad47b707e905ad0293173a743a3f

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "CodersEra - Tech Community",
  description: "A tech community for networking, learning, and collaboration",
=======
  title: "CodersEra",
  description: "",
  icons: {
    icon:"/logo.jpg"
  }
>>>>>>> f13f5b27285cad47b707e905ad0293173a743a3f
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundAnimation />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
=======
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Video Background */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
          src="/bg2.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Black Overlay with Blur */}
        {/* <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs -z-10 pointer-events-none" /> */}
        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
>>>>>>> f13f5b27285cad47b707e905ad0293173a743a3f
      </body>
    </html>
  );
}
