
import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Next App Home Layout",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-4">
      <body>
        <nav>
          <ul className="flex flex-row gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs(DB)</Link></li>
            <li><Link href="/posts">Posts(API)</Link></li>
            <li><Link href="/create-post">Create Post</Link></li>
            <li><Link href="/signin">SignIn</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
            <li><Link href="/test-data">TestData</Link></li>
            <li><Link href="/search">searchParams</Link></li>
          </ul>
        </nav>
        <hr />

        {children}

      </body>
    </html>
  );
}
