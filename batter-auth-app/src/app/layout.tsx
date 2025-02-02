import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
        />
        <ul className="flex space-x-4 justify-center py-10 font-bold">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/signin">SignIn</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>

        {children}
      </body>
    </html>
  );
}
