"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Books I've read",
        path: "/books",
    },
    {
        name: "Things I've learned",
        path: "/learn",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent classname="flex flex-col">
                <div>logo</div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
