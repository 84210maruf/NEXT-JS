// "use client";
import prisma from "../lib/prisma";
import LogoutBtn from '../componants/LogoutBtn'
import { getUserCached } from "../lib/userCache";
import { useSession } from "../lib/auth-client";
import { get } from "http";
// import { useEffect } from "react";


export default function Home() {
  // const { data } = useSession();
  // const  {data} = getUserCached()
  // console.log("Data : ",data)

  // const [data] = await prisma.session.findMany()
  // const [user] = await getUserCached()

  // const user = await prisma.user.findUnique({
  //   where:{
  //     id:data.userId
  //   }
  // })
  // console.log(data)

  return (
    <main className="pt-10 flex flex-col items-center justify-center gap-y-2">
      <div>Home page</div>
      <hr />
      <p className="font-bold py-4">User Login INFO from Direct PrismaDB:</p>
      {/* <p>Session Id : {data?.userId}</p>
      <p>User Name :{user?.name}</p>
      <p>Email :{user?.email}</p> */}
      {/* <p>{data?.user.name}</p> */}
      {/* <LogoutBtn /> */}
    </main>
  );
}