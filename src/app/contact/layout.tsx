import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Kiran Prava – Industrial Coding & Packaging",
    description: "Get in touch for demos, quotes, and technical support. Response within 2 hours. Cuttack, Odisha.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
