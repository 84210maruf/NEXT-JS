"use client"

import { useSession } from "../lib/auth-client";

export default function Home() {
  const { data } = useSession();
  console.log(data)
  return (

    <main className="pt-10">
      <div>Home page</div>
      <hr />
        <p>Name : {data?.user.name}</p>
        <p>Email :{data?.user.email}</p>

    </main>

  );
}
