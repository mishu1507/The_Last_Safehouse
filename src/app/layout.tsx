import type { Metadata } from "next";
import { Bebas_Neue, Courier_Prime, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bebas",
    display: "swap",
});

const courierPrime = Courier_Prime({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-courier",
    display: "swap",
});

const shareTechMono = Share_Tech_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-share-tech",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Aditi Borkar | Cybersecurity Systems Engineer",
    description:
        "Portfolio of Aditi Borkar - Cybersecurity Engineering Student building investigation frameworks and simulation-driven learning platforms. Explore projects, certifications, and systems thinking approach.",
    keywords: [
        "cybersecurity",
        "portfolio",
        "Aditi Borkar",
        "digital forensics",
        "security engineer",
        "ForensicLens",
        "systems engineering",
    ],
    authors: [{ name: "Aditi Borkar" }],
    openGraph: {
        title: "Aditi Borkar | Cybersecurity Systems Engineer",
        description:
            "Turning complex systems into understandable experiences. Explore my cyber systems lab.",
        type: "website",
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${bebasNeue.variable} ${courierPrime.variable} ${shareTechMono.variable}`} suppressHydrationWarning>
            <head>
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
