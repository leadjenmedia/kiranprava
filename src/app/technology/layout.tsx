import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Technology | Kiran Prava",
    description: "Industry 4.0–ready coding, marking, and packaging. Smart PLC integration, IoT diagnostics, and global compliance.",
};

export default function TechnologyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
