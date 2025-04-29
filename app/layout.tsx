import type { Metadata } from "next";
import "./globals.css";
import "@/public/fonts/font.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export const metadata: Metadata = {
  title: "jakratoolstech.com",
  description: "จำหน่ายอะไหล่ เครื่องจักรอุตสาหกรรม ครบวงจร ส่งไวทั่วประเทศ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased kanit-regular bg-gray-50`}>
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
