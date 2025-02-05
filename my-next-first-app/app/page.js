import prisma from "../lib/prisma";
import LogoutBtn from '../componants/LogoutBtn'
import { getUserCached } from "../lib/userCache";


export default async function Home() {

  const [data] = await prisma.session.findMany()
  const [user] = await getUserCached()

  // const user = await prisma.user.findUnique({
  //   where:{
  //     id:data.userId
  //   }
  // })
  // console.log(data)

  return (
    <main className="pt-10">
      <div>Home page</div>
      <hr />
      <p className="font-bold py-4">User Login INFO from Direct PrismaDB:</p>
      <p>Session Id : {data?.userId}</p>
      <p>User Name :{user?.name}</p>
      <p>Email :{user?.email}</p>
      <LogoutBtn />
    </main>
  );
}