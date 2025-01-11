import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Validate the `defaultUrl` to ensure it is a valid URL
try {
  new URL(defaultUrl);
} catch (error) {
  console.error("Invalid default URL:", defaultUrl);
  throw new Error(`Default URL is invalid: ${defaultUrl}`);
}

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Todo App",
  description: "An Auth and NextJS server actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="sticky top-0 bg-background text-foreground">
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
