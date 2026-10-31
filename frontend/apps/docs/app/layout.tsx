import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/ui/styles/typography.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "docs",
  description: "docs app",
};

const apps = [
  { name: "web", url: `http://localhost:${process.env.PORT_WEB}` },
  { name: "docs", url: `http://localhost:${process.env.PORT_DOCS}` },
  { name: "order", url: `http://localhost:${process.env.PORT_ORDER}` },
  { name: "dashboard", url: `http://localhost:${process.env.PORT_DASHBOARD}` },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{ display: "flex", gap: "1.25rem", maxWidth: "42rem", margin: "0 auto", padding: "1.25rem 1.5rem 0" }}>
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              style={app.name === "docs" ? { color: "var(--color-link)" } : undefined}
            >
              {app.name}
            </a>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
