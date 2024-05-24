import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import { i18n, type Locale } from "../../i18n-config";
import { NavigationQuery } from "@/gql/graphql";
import { getNavigation } from "@/queries/getNavigation";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const { navigation }: NavigationQuery = await getNavigation();

  const nav = navigation?.page.map((p) => {
    return {
      url: `${p.__typename === "Pdp" ? "/pdp/" : "/"}${p.slug}`,
      label: p.title,
    };
  });

  return (
    <html lang={params.lang}>
      <body className={plusJakartaSans.className}>
        <GlobalHeader nav={nav} />
        {children}
        <GlobalFooter nav={nav} />
      </body>
    </html>
  );
}
