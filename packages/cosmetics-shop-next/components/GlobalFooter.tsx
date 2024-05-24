"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "../i18n-config";

type NavItem = {
  url: string;
  label: string;
};

interface Props {
  nav: NavItem[];
}

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

export default function GlobalFooter({ nav }: Props) {
  const pathname = usePathname();

  let slug = "";

  if (pathname === "/") {
    slug = "home";
  } else if (pathname === "/en") {
    slug = "home";
  } else if (pathname === "/fr") {
    slug = "home";
  } else {
    slug = pathname.replace("/fr/pdp/", "").replace("/en/pdp/", "");
  }

  return (
    <footer className="bg-dark text-light mx-auto max-w-screen-2xl">
      <div className="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8">
        <div className="space-x-4">
          <span className="font-bold font-title text-2xl">
            <Link href="/">skncre</Link>
          </span>
          <span className="text-md">
            By
            <Link
              className="underline"
              href="https://hygraph.com"
              target="_blank"
            >
              Hygraph
            </Link>
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
          {nav.map((navItem: NavItem) => {
            return (
              <Link
                href={addLocaleToPath(pathname, navItem.url)}
                key={navItem.label}
                className="lowercase"
              >
                {navItem.label}
              </Link>
            );
          })}
          <Link href={`/api/draft?slug=${slug}&secret=MY_SECRET_TOKEN`}>
            draft mode
          </Link>
        </nav>
      </div>
    </footer>
  );
}
