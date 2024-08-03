import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* 
 * Mantine Configuration 
 * https://github.com/mantinedev/next-app-template/blob/master/app/layout.tsx
*/

import '@mantine/core/styles.css';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enterprise Dashboard",
  description: "A comprehensive dashboard for enterprise-level data management and analytics.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}