"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

export default function Home() {
  const { data } = useSession()
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Home page</p>
      <p>{data?.user.name}</p>
      <p>{data?.user.email}</p>
      <p>use Batter auth</p>
      <Button>Logout</Button>
    </div>
  );
}
