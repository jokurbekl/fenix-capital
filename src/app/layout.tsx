import "~/styles/globals.css";
import "~/styles/styles.pure.css";
import "~/styles/bootstrap.min.css";
import Head from "next/head";

// import { GeistSans } from "geist/font/sans";

export const metadata = {
  title:
    "FiNex Capital | Fully Automated Software Trading Artificial Intelligence",
  description:
    "Fully Automated Software Trading Artificial Intelligence autonomously generating profits on your personal account.",
  icons: [{ rel: "icon", url: "/logo.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
