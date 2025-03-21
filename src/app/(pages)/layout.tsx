import { ReactNode } from "react";

import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
