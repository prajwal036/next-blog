import localFont from "next/font/local";
import "./globals.css";
import { BlogProvider } from "./context/BlogContext";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Prajwal's Blog",
  description: "Coding round",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrapping Context Provider */}
        <BlogProvider>
          <Navbar />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
