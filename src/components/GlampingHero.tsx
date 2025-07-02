import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function GlampingHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 text-white">
        <div className="flex items-center space-x-2">
          <Icon name="Home" className="text-white" size={28} />
          <span className="text-xl font-bold">GLAMPING HOTEL</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm">
          <span>📞 (495) 000-00-00</span>
          <span>🏠 Русский (рус) 🇷🇺</span>
          <span>English 🇺🇸</span>
          <span>中文 🇨🇳</span>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="relative z-20 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-white" size={24} />
              <span className="text-lg font-semibold text-white">
                GLAMPING HOTEL
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-white text-sm">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Главная
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Каталог отелей
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Номера данного
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Личный кабинет
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Туры
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Новости
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Контакты
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Icon
                name="Search"
                className="text-white cursor-pointer hover:text-yellow-300"
                size={20}
              />
              <Icon
                name="User"
                className="text-white cursor-pointer hover:text-yellow-300"
                size={20}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Background Forest Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Glamping House */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://cdn.poehali.dev/files/820f5166-4752-4abe-9137-abbdf4aedb81.jpg"
          alt="Glamping House"
          className="w-64 h-48 object-cover opacity-90 rounded-lg shadow-2xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GLAMPING HOTEL
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            ПОЧУВСТВУЙ КОМФОРТ И ЭЛЕГАНТНОСТЬ ПРИРОДНЫХ ОТЕЛЕЙ С СОБСТВЕННОЙ
            ДУШИ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg font-semibold"
            >
              КАТАЛОГ ОТЕЛЕЙ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
            >
              ТУРЫ
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
}
