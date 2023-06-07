"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
  });

// export default function Loading() {
//     return (
//         <>
//             <body className={twMerge("bg-background font-sans text-foreground", inter.variable, "bg-white")}>
//           <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
//             <div className="flex justify-end ml-auto">
//             {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */}
//             <h1>loading...</h1>
//             </div>
//           </header>
//         </body>
//         </>
//     );
//   }


import * as React from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"

export default function Loading() {
    return (
        <>
            <body className={twMerge("bg-background font-sans text-foreground", inter.variable, "bg-white")}>
                <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
                    <div className="flex justify-end ml-auto">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>  
                                    <div className="flex justify-end ml-auto">
                                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                                    </div>

                                    <div className="absolute right-[8rem]">
                                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                                    </div>        

                                    <div className="flex justify-end ml-auto">
                                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                                    </div>       
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </header>
            </body>
        </>
    );
}