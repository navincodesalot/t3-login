import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ClerkProvider, UserButton, SignedIn, SignedOut, SignOutButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button";

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
          <div className="">
          <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      
            <SignedIn>
              <div className="flex justify-end ml-auto">
              <UserButton/>
              </div>
            </SignedIn>
            
            <SignedOut>
              <SignInButton>
                <div className="absolute right-[9.5rem]">
                  <Button size="lg" variant="ghost">Login</Button>
                </div>
              </SignInButton>         

              <SignUpButton>
                <div className="flex justify-end ml-auto">
                  <Button size="lg">Sign Up</Button>
                </div>
              </SignUpButton>
              
            </SignedOut>
            </header>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
