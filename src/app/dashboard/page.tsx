import { useAuthStore } from '@/store/authStore';

const Dashboard = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Chào, {token || 'bạn'}!</h1>
    </div>
  );
};

export default Dashboard;
