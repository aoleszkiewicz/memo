import { Link } from "@nextui-org/link";

import { title, subtitle } from "@/components/primitives";
import { Navbar } from "@/components/navbar";

export default function RootPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="justify-center inline-block max-w-lg text-center">
            <h1 className={title()}>Save your&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            <h1 className={title()}>
              memories & pass the vibe to your friends.
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              You decide which memories to share.
            </h2>
          </div>
        </section>
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
