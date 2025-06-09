import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "@/components/ClientShell";
// new wrapper

export const metadata: Metadata = {
  title: "Codewithmonk",
  description: "Learn. Build. Grow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}