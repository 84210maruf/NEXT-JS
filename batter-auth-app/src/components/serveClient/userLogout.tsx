"use client";

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";

export default function LogOutUser() {
  const { data } = useSession(); // Assuming `useSession` provides a `signOut` method

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p>Welcome, {data?.user.name}</p>
      {/* <p>Welcome, {data?.}</p> */}
      <p>Email: {data?.user.email}</p>
      <p>AuthTocken: {data?.session.token}</p>
      <Button onClick={()=>{signOut()}}>Logout</Button>
    </div>
  );
}