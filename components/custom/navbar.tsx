import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@headlessui/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Logo } from "../ui/logo";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDestinations = () => {
        setIsDestinationsOpen(!isDestinationsOpen);
    };

    const DESTINATION_LIST: {
        url: string;
        flag: string;
        country: string;
    }[] = [
        {
            url: "/country/india",
            flag: "🇮🇳",
            country: "India",
        },
        {
            url: "/country/uae",
            flag: "🇦🇪",
            country: "UAE / Dubai",
        },
        {
            url: "/country/egypt",
            flag: "🇪🇬",
            country: "Egypt",
        },
        {
            url: "/country/saudi-arabia",
            flag: "🇸🇦",
            country: "Saudi Arabia",
        },
    ];

    return (
        <div className="bg-black">
            <div className="hidden md:block bg-black pt-2">
                <div className="flex items-center px-4 max-w-[76rem] gap-x-5 mx-auto">
                    <a
                        href="tel:+16782759457"
                        className="text-white hover:text-blue-500 font-medium cursor-pointer text-sm flex items-center "
                    >
                        <span className="mr-2.5">🇺🇸</span>
                        +1 (678) 275-9457
                    </a>
                    <a
                        href="mailto:info@nobletravels.com"
                        className="text-white hover:text-blue-500 font-medium cursor-pointer text-sm flex items-center "
                    >
                        <HiOutlineMail className="text-lg mr-2 text-gray-500" />
                        info@nobletravels.com
                    </a>
                    <div className="ml-auto mr-0 flex items-center">
                        <a
                            href="tel:+918800883595"
                            className="text-white hover:text-blue-500 font-medium cursor-pointer text-sm flex items-center "
                        >
                            <span className="mr-2.5">🇮🇳</span>
                            +91 8800883595
                        </a>
                    </div>
                </div>
            </div>
            <hr className="hidden md:block border-gray-900 mt-2" />
            <div className="bg-black sticky top-0 z-50">
                <div className="px-4 max-w-[76rem] mx-auto">
                    <div className="flex items-center justify-between py-2 w-full">
                        <div className="w-full flex items-center">
                            <a href="/">
                                <Logo className="text-white h-9 w-auto" />
                            </a>
                            <div className="hidden md:flex ml-auto mr-0 items-center justify-end w-full">
                                <NavigationMenu>
                                    <NavigationMenuList className="flex space-x-3">
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="h-9 px-4 py-2 rounded-md text-gray-100 data-[state=open]:text-blue-500 text-sm font-medium hover:bg-white/5 submenu-trigger">
                                                Destinations
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="ml-20 w-56 bg-black border border-gray-900 shadow-2xl rounded-lg p-2">
                                                    {DESTINATION_LIST.map(
                                                        (dest, idx: number) => (
                                                            <a
                                                                href={dest.url}
                                                                key={idx}
                                                            >
                                                                <li className="w-full py-2 px-3 hover:bg-gray-900/50 text-gray-300 hover:text-blue-500 rounded-md cursor-pointer">
                                                                    <p className="text-sm font-medium">
                                                                        <span className="mr-3">
                                                                            {
                                                                                dest.flag
                                                                            }
                                                                        </span>
                                                                        {
                                                                            dest.country
                                                                        }
                                                                    </p>
                                                                </li>
                                                            </a>
                                                        )
                                                    )}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link
                                                href="/tours"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                                    All Tours
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link
                                                href="/hpk"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                                    Hotel Price Killer{" "}
                                                    <span className="ml-1.5 text-[0.625rem] py-0.5 px-1 rounded-lg border border-emerald-500 bg-emerald-900 text-emerald-500 font-bold">
                                                        NEW
                                                    </span>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link
                                                href="/luxury"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                                    Luxury Trains
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link
                                                href="/accessibility"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                                    Accessible Tourism
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link
                                                href="/contact"
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                                    Contact
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                        <Button
                            className="md:hidden text-white"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                    <div
                        className={`md:hidden pb-1 overflow-hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                        <NavigationMenu className="w-full">
                            <NavigationMenuList className="mt-3 flex-col space-y-2 pb-4 items-start">
                                <NavigationMenuItem>
                                    <Link href="/hpk" legacyBehavior passHref>
                                        <NavigationMenuLink className="inline-block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                            Hotel Price Killer{" "}
                                            <span className="ml-1.5 text-[0.625rem] py-0.5 px-1 rounded-lg border border-emerald-500 bg-emerald-900 text-emerald-500 font-bold">
                                                NEW
                                            </span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <div className="w-full">
                                    <button
                                        onClick={toggleDestinations}
                                        className="flex items-center justify-between w-full h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5"
                                    >
                                        Destinations
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                isDestinationsOpen
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                    {isDestinationsOpen && (
                                        <div className="pl-4 mt-2 space-y-2">
                                            {DESTINATION_LIST.map(
                                                (dest, idx: number) => (
                                                    <Link
                                                        href={dest.url}
                                                        key={idx}
                                                        className="block w-full pl-2 py-1 rounded-md text-gray-200 font-medium hover:text-white text-sm"
                                                    >
                                                        <span className="mr-4">
                                                            {dest.flag}
                                                        </span>
                                                        {dest.country}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                                <NavigationMenuItem>
                                    <Link href="/tours" legacyBehavior passHref>
                                        <NavigationMenuLink className="block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                            All Tours
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/luxury"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink className="block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                            Luxury Trains
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/accessibility"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink className="block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
                                            Accessible Tourism
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/contact"
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink className="block h-9 px-4 py-2 rounded-md text-gray-100 hover:text-blue-500 text-sm font-medium hover:bg-white/5">
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
