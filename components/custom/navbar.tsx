import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    onNavChange,
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
                        <NavigationMenu onValueChange={onNavChange}>
                            <NavigationMenuList className="space-x-3">
                                {/* <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem> */}
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-100 data-[state=open]:text-blue-500 font-medium hover:bg-white/5 submenu-trigger">
                                        Destinations
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="min-w-60 mt-2 ml-20 bg-black border border-gray-900 rounded-lg">
                                        <ul className="p-1.5">
                                            <a href="/india">
                                                <li className="hover:bg-white/5 text-gray-300 hover:text-white rounded-md cursor-pointer">
                                                    <NavigationMenuLink
                                                        asChild
                                                        className="px-3 py-1.5"
                                                    >
                                                        <p className="text-sm font-medium">
                                                            <span className="mr-2">
                                                                🇮🇳
                                                            </span>
                                                            India
                                                        </p>
                                                    </NavigationMenuLink>
                                                </li>
                                            </a>
                                            <a href="/uae">
                                                <li className="hover:bg-white/5 text-gray-300 hover:text-white rounded-md cursor-pointer">
                                                    <NavigationMenuLink
                                                        asChild
                                                        href="/uae"
                                                        className="px-3 py-1.5"
                                                    >
                                                        <p className="text-sm font-medium">
                                                            <span className="mr-2">
                                                                🇦🇪
                                                            </span>
                                                            UAE / Dubai
                                                        </p>
                                                    </NavigationMenuLink>
                                                </li>
                                            </a>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/tours" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            All Tours
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/accessibility"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
                                            }
                                        >
                                            Accesible Tourism
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/contact"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={
                                                "h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
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
