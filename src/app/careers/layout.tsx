import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Kiran Prava",
    description: "Join Kiran Prava. Careers in industrial coding, marking, and packaging solutions.",
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
