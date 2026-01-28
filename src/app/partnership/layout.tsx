import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Strategic Partnership | Kiran Prava",
    description: "Partner with Kiran Prava for distribution, integration, or technology collaboration.",
};

export default function PartnershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
