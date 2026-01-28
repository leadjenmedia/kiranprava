import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | Kiran Prava – CIJ, TIJ, TTO & Packaging",
    description: "Industrial coding, marking, and packaging solutions. CIJ printers, TIJ/TTO systems, end-of-line packaging, and consumables.",
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
