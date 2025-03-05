
import LogOutUser from '@/components/serveClient/userLogout';
import { useSession } from '@/lib/auth-client';

export default function Home() {
  const  data  = useSession;
  console.log(data.name);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className='py-4'>Home page</p>
      {data ? <p>Logged in as {data.name}</p> : <p>Not logged in</p>}
      <LogOutUser />
    </div>
  );
}
