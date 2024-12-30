// get those fonts!
import "@fontsource/monaspace-neon";
import "@fontsource/monaspace-krypton";
import "@fontsource/monaspace-radon";
import "@fontsource/monaspace-argon";
import "@fontsource/monaspace-xenon";

// always import global styles last
import "./globals.css";

import Script from "next/script";

export const metadata = {
  title: "zuedev's space",
  description: "Hello, World! I'm zuedev.",
  icons: {
    icon: "/avatar.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default ({ children }) => {
  const theme = [
    "zd-theme-default",
    "zd-theme-cyberpunk2077-yellow",
    "zd-theme-neon",
  ].sort(() => Math.random() - 0.5)[0];

  return (
    <html
      lang="en"
      className={`${theme} bg-[--zd-theme-background-light] text-[--zd-theme-foreground-light] dark:bg-[--zd-theme-background-dark] dark:text-[--zd-theme-foreground-dark]`}
    >
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
        <Script src="/layout.js" />
      </body>
    </html>
  );
};
