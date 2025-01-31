
import prisma from "../prisma/prisma";
import { authClient, signOut } from "../lib/auth-client";
import LogoutBtn from '../componants/LogoutBtn'

export default async function Home() {

  const [data] = await prisma.session.findMany()
  const user = await prisma.user.findUnique({
    where:{
      id:data.userId
    }
  })

  const handleLogout = async () => {
    await authClient.signOut()
  };

  return (
    <main className="pt-10">
      <div>Home page</div>
      <hr />
      <p className="font-bold py-4">User Login INFO:</p>
      <p>Name : {user?.name}</p>
      <p>Email :{user?.email}</p>
      <LogoutBtn />
    </main>
  );
}