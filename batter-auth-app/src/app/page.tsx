
import LogOutUser from '@/components/serveClient/userLogout';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className='py-4'>Home page</p>
      <LogOutUser />
    </div>
  );
}
