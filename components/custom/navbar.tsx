import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import * as React from "react";
import { Logo } from "../ui/logo";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <div className="bg-black">
            <div className="bg-black pt-2">
                <div className="flex items-center px-4 max-w-[76rem] mx-auto">
                    <p className="text-white menlo mr-3">contact</p>
                    <p className="text-white menlo">email</p>
                    <div className="ml-auto mr-0 flex items-center">
                        <a href="/tour-details" className="text-white menlo">
                            socials
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-gray-900 my-2" />
            {/* TODO: make this sticky */}
            <div className="bg-black pb-2  ">
                <div className="flex items-center px-4 max-w-[76rem] mx-auto">
                    <a href="/">
                        <Logo className="text-white h-9 w-auto" />
                    </a>
                    <div className="hidden md:block ml-auto mr-0">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-3">
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-red-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-red-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-100 data-[state=open]:text-red-500 font-medium hover:bg-white/5">
                                        Collections
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <Logo className="text-white h-9 w-auto" />
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            shadcn/ui
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed
                                                            components that you
                                                            can copy and paste
                                                            into your apps.
                                                            Accessible.
                                                            Customizable. Open
                                                            Source.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <div title="Introduction">
                                                Re-usable components built using
                                                Radix UI and Tailwind CSS.
                                            </div>
                                            <div title="Installation">
                                                How to install dependencies and
                                                structure your app.
                                            </div>
                                            <div title="Typography">
                                                Styles for headings, paragraphs,
                                                lists...etc
                                            </div>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-red-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            Tours
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-red-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};
