"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import GlobalLoader from "./GlobalLoader";
import { ThemeProvider } from "@/app/context/ThemeProvider";
import { Navbar } from "./Navbar";

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Since useRouter().events does not exist in App Router, simulate transitions manually
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate slight load

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <ThemeProvider>
        {loading && <GlobalLoader />}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
