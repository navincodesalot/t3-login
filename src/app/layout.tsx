import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from 'react';
import { Navbar } from "@/components/navbar";
import { Skeleton } from "@/components/ui/skeleton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Login",
  description: "Login system using T3",
  icons: [{ rel: "favicon", url: "/61457.png" }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={twMerge("bg-background font-sans text-foreground", inter.variable, "bg-white")}>
          <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
            <div className="flex justify-end ml-auto">
                <Navbar/>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
