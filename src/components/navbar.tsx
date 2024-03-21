"use client"
import * as React from "react"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import  UserButton from "@/components/user-button"
// import { Button } from "@/components/ui/button";
import SignInAndSignUp from "@/components/signin-and-signup"

export function Navbar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <SignedIn>
                        <div className="flex justify-end ml-auto">
                            <UserButton/>
                        </div>
                    </SignedIn>
                    <SignedOut>
                        {/* <SignInButton>
                            <div className="absolute right-[8rem]">
                                <Button size="xlg" variant="ghost">Login</Button>
                            </div>
                        </SignInButton>         

                        <SignUpButton>
                            <div className="flex justify-end ml-auto">
                            <Button size="xlg">Sign Up</Button>
                            </div>
                        </SignUpButton> */}
                        <SignInAndSignUp/>
                    </SignedOut>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}