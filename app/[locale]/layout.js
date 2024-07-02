import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import "../globals.css";
import React from "react";
import { useMessages, NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viviane's developer portfolio",
  description: "My developer portfolio, for profesionnal use",
};

export default function RootLayout({ children, locale }) {
RootLayout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
  const t = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={t}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
