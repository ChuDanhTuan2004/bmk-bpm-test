import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, CloudCog } from "lucide-react";
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://bmktech.vn/wp-content/uploads/2025/01/Group-5.png" alt="BMK Logo" className="h-10" />
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Về BMK</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Sản phẩm</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Tin tức</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Hỗ trợ</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Tuyển dụng</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Liên hệ</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                    <Button variant="outline" className="rounded-lg border-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer" onClick={handleLogin}>
                        Đăng nhập
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">BMK</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Bảo hiểm không ngủ</h2>
                    <div className="flex flex-wrap gap-2 mb-8 text-gray-600">
                        <span>Mang tiện ích.</span>
                        <span>Giảm âu lo.</span>
                        <span>Đổi mới.</span>
                        <span>Hấp dẫn.</span>
                        <span>Tận tâm.</span>
                        <span>Minh bạch.</span>
                        <span>Đồng hành.</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg">
                            Mua bảo hiểm ngay
                        </Button>
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2">
                            <Play className="size-4" />
                            Tìm hiểu thêm
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="https://bmktech.vn/wp-content/themes/inon/images/bg_hero.png" alt="Insurance Illustration" className="w-full" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-none shadow-md p-6 rounded-2xl">
                        <CardContent className="flex flex-col items-center p-6">
                            <div className="mb-4 text-center">
                                <svg viewBox="0 0 24 24" className="size-8 text-green-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                </svg>
                            </div>
                            <div className="text-2xl font-bold text-center">50.000+</div>
                            <div className="text-gray-600 text-center">Đối tác hài lòng</div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md p-6 rounded-2xl">
                        <CardContent className="flex flex-col items-center p-6">
                            <div className="mb-4 text-center">
                                <CloudCog className="size-8 text-green-600 mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-center">1.000.000+</div>
                            <div className="text-gray-600 text-center">Lượt truy cập</div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md p-6 rounded-2xl">
                        <CardContent className="flex flex-col items-center p-6">
                            <div className="mb-4 text-center">
                                <Users className="size-8 text-green-600 mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-center">1.000.000+</div>
                            <div className="text-gray-600 text-center">Người dùng</div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
