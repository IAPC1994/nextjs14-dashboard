import { SimpleWidget } from '../../components/SimpleWidget';


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard of the application',
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General information</span>

      <div className="flex flex-wrap p-2 gap-10 justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}