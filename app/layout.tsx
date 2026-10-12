import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dhyey Trivedi — Frontend Developer & Creative Designer",
    description:
        "The portfolio of Dhyey Trivedi: frontend developer, UI/UX enthusiast, and creative designer.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffc5",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://api.fontshare.com" />
                <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen overflow-x-hidden font-satoshi text-ink">
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
