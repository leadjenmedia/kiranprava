import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Success Stories | Kiran Prava",
    description: "How Indian manufacturers trust Kiran Prava for coding, marking, and packaging excellence.",
};

export default function SuccessStoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
