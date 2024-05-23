"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "../i18n-config";

function addLocaleToPath(pathname: string, wantedUrl: string) {
  const segments = pathname.split("/");
  // @ts-ignore
  const locale = i18n.locales.includes(segments[1]) ? segments[1] : null;

  if (locale) {
    return `/${locale}${wantedUrl}`;
  } else {
    return wantedUrl;
  }
}

export default function GlobalHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-dark text-light mx-auto max-w-screen-2xl">
      <div className="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8">
        <Link className="flex space-x-2" href="/">
          <span className="font-bold font-title text-3xl self-end">skncre</span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
          <Link href={addLocaleToPath(pathname, "/pdp/face-serum")}>
            face serum
          </Link>
          <Link href={addLocaleToPath(pathname, "/pdp/face-cream")}>
            face cream
          </Link>
          <Link href={addLocaleToPath(pathname, "/pdp/eye-contour")}>
            eye contour
          </Link>
          <Link href={addLocaleToPath(pathname, "/pdp/bundle")}>
            skncre bundle
          </Link>
        </nav>
      </div>
    </header>
  );
}
