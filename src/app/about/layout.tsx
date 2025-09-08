import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Este é um blog com Next.js",
  description: "About",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
  }) {  
    return (
      <>
      <h1>Aqui vem um layout da About</h1>
      {children}
      </>
  );
}
