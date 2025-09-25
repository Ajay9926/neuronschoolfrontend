import type { Metadata } from "next";
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Best Data Science Course in Indore | Neurons School",
  icons: {
    icon: 'Images/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
