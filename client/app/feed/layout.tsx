import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/feed/navbar";

export const metadata: Metadata = {
  title: "Feed",
};

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container flex-grow px-6 pt-16 mx-auto bg-red-500 max-w-7xl">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/aoleszkiewicz"
          title="aoleszkiewicz's github profile"
        >
          <span className="text-default-600">Created by</span>
          <p className="text-primary">aoleszkiewicz</p>
        </Link>
      </footer>
    </div>
  );
}
