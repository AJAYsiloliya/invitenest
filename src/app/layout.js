import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "InviteNest - Create Beautiful Digital Invitations",
    template: "%s | InviteNest",
  },
  description:
    "Create beautiful digital wedding, birthday, love and event invitations online with InviteNest.",
  verification: {
    google: "O-qZjT2rnnfeV_2seXjMsTMaU0U3D_YGXO5gH0VUNvU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        </body>
    </html>
  );
}
