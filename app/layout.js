import localFont from "next/font/local";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Navigator from "@/components/navigator";
import AnimateBackground from "@/components/animebg";
import ContactPlatform from "@/components/contact";
import PulseStar from "@/components/star";

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

const taffy = localFont({
  src: "./fonts/taffy.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arved Wonnek",
  description: "This is the personal website of Arved Wonnek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimateBackground />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="bg-center h-screen w-full bg-cover" style={{ backgroundImage: 'url(/back4.jpg)' }}>
            <div className="h-full w-full bg-black/25 overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>
          <Navigator />
          <ContactPlatform />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
