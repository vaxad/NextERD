"use client"

import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

export default function Error() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/");
    }, [router])

    return (<></>)
}
