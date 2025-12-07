import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

const ibmPlexSansKR = localFont({
  src: [
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Text.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@ibm/plex-sans-kr/fonts/complete/woff2/hinted/IBMPlexSansKR-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-sans-kr",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "higher ideal",
    template: "%s | higher ideal",
  },
  description: "이선의 개발 블로그",
  icons: {
    icon: "/favicon.svg",
  },
};

const navbar = (
  <Navbar logo={<span className="font-bold">higher ideal</span>} />
);

const footer = <Footer>© 2025 higher ideal</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <body
        className={`${ibmPlexSansKR.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/yourusername/my-blog"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
