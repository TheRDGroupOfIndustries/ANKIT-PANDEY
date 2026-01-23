"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Define paths where Navbar and Footer should NOT be shown
    const isStudio = pathname.startsWith("/sanity-studio");

    // Note: Since we also want to hide it on 404 pages, 
    // and Next.js doesn't have a specific pathname for 'not found' in usePathname,
    // we can handle the 404 page internal layout separately or 
    // rely on the fact that most 404 pages want to be full-screen anyway.
    // For now, let's just exclude Studio. 
    // If the user wants 404 to also hide it, we'll ensure not-found.tsx works well.

    if (isStudio) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
