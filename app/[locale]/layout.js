import { Inter } from "next/font/google";
import "../globals.css";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viviane's developer portfolio",
  description: "My developer portfolio, for profesionnal use",
};

export default function RootLayout({ children, locale }) {
  const t = useTranslations('Index');

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
