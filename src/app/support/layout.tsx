import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Support | Kiran Prava",
    description: "24/7 assistance, on-site deployment within 24 hours, spare parts. Phone, email, and technical support.",
};

export default function SupportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
