import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginApi, LoginRequest } from '@/api/authApi';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState<LoginRequest>({ username: '', password: '' });
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setAuth(data.id_token);
      navigate('/dashboard');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="username"
          placeholder="Tên đăng nhập"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
        {error && <p className="text-red-500">Đăng nhập thất bại</p>}
      </form>
    </div>
  );
};

export default Login;
