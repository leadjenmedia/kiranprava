import type { Metadata } from "next";
import { Inter, Outfit, Roboto } from "next/font/google";
import "./globals.css";
import SupportButton from "@/components/SupportButton";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
});

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Kiran Prava Pvt Ltd | Industrial Coding & Packaging Solutions",
    description: "A reliable professional industrial coding & packaging solutions partner for Indian manufacturers. CIJ, TIJ, TTO Printers and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${outfit.variable} ${roboto.variable} antialiased`}
                suppressHydrationWarning
            >
                {children}
                <SupportButton />
            </body>
        </html>
    );
}
