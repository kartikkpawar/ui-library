import Footer from "@/components/landing/layout/footer";
import Header from "@/components/landing/header";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: {
    template: "Codesnippet UI = Opensource components",
    default: "CodeSnippet UI",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      <main className="relative w-full pt-0 md:pt-0">{children}</main>
      <Footer />
    </Fragment>
  );
}
