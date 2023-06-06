import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ClerkProvider, UserButton, SignedIn, SignedOut, SignOutButton, SignInButton, SignUpButton } from '@clerk/nextjs'
// import { Button } from "@/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Login",
  description: "Login system using T3",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={twMerge("bg-background font-sans text-foreground", inter.variable)}>
          <SignedIn>
            <UserButton/>
            <SignOutButton>
              {/* <Button>Sign Up</Button> */}
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              {/* <Button>Login</Button> */}
            </SignInButton>

            <SignUpButton>
              {/* <Button>Sign Up</Button> */}
            </SignUpButton>
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
