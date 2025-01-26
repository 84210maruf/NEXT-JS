
"use client";
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button";
import { Book, Briefcase, FileText, HomeIcon, Pen, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { toast } from "sonner";


export default function Home() {
  const { data } = useSession()
  const logOut = async () => {
    await authClient.signOut(
      {
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logout Sucessfully")

          },
        }
      }
    );

  }
  return (
    <section>
      <Navbar />

      <div className="flex flex-col justify-center items-center space-y-3">

        <ThemeToggle />
        <p>{data?.user.name}</p>
        <p>{data?.user.email}</p>
        <Button variant={"destructive"} size={"icon"}>
          <Pen />
        </Button>
        <Button onClick={() => logOut()} >
          Logout
        </Button>
      </div>
    </section>
  );
}
