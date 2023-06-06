"use client"
import * as React from "react"
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";

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
                        <SignInButton>
                            <div className="absolute right-[8rem]">
                            <Button size="lg" variant="ghost">Login</Button>
                            </div>
                        </SignInButton>         

                        <SignUpButton>
                            <div className="flex justify-end ml-auto">
                            <Button size="lg">Sign Up</Button>
                            </div>
                        </SignUpButton>
                    </SignedOut>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}