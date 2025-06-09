import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "@/components/ClientShell";
import Head from "next/head";

// new wrapper

export const metadata: Metadata = {
  title: "Codewithmonk",
  description: "Learn. Build. Grow.",
  icons: {
    icon: "/logo.png", // or "/logo.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/logo.png" />
        {/* <link rel="icon" href="/logo.png" type="image/png" /> */}
      </Head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
