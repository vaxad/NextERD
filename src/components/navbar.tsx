import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { ModeToggle } from "@/components/ui/theme-toggler";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex w-full justify-between items-center min-h-14 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto px-6 border-b border-foreground">
                <div className="flex items-center gap-2 min-w-32 cursor-pointer">
                    <div className="size-6 rounded-full bg-foreground"></div>
                    <h1 className="text-lg font-black">NextERD</h1>
                </div>
                <div className="min-w-32 flex items-center gap-3 justify-end">
                    <Link href={"https://github.com/vaxad/NextERD/"} className="flex w-fit items-center gap-1 hover:border-b border-foreground cursor-pointer">
                        Repo
                        <ArrowTopRightIcon />
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
