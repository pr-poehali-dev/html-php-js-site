import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">НатураТур</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium"
            >
              Отели
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium"
            >
              Туры
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium"
            >
              Места
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium"
            >
              Контакты
            </a>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Войти
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Откройте мир
            <span className="text-primary block">природного туризма</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Уютные отели в живописных местах, незабываемые туры по самым
            красивым уголкам планеты
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-5xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Куда едем?
              </label>
              <div className="relative">
                <Icon
                  name="MapPin"
                  className="absolute left-3 top-3 text-muted-foreground"
                  size={20}
                />
                <Input
                  placeholder="Выберите направление"
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Заезд
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 pl-3 text-left font-normal border-2 hover:border-primary",
                      !checkIn && "text-muted-foreground",
                    )}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    {checkIn ? format(checkIn, "dd.MM.yyyy") : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Выезд
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 pl-3 text-left font-normal border-2 hover:border-primary",
                      !checkOut && "text-muted-foreground",
                    )}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    {checkOut
                      ? format(checkOut, "dd.MM.yyyy")
                      : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Гостей
              </label>
              <Select>
                <SelectTrigger className="h-12 border-2 focus:border-primary">
                  <SelectValue placeholder="2 взрослых" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 взрослый</SelectItem>
                  <SelectItem value="2">2 взрослых</SelectItem>
                  <SelectItem value="3">3 взрослых</SelectItem>
                  <SelectItem value="4">4 взрослых</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="h-12 bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              <Icon name="Search" className="mr-2" size={20} />
              Найти
            </Button>
          </div>
        </Card>

        {/* Quick Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Лучшие отзывы
            </h3>
            <p className="text-muted-foreground">
              Более 10,000 довольных путешественников
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Безопасность
            </h3>
            <p className="text-muted-foreground">
              Проверенные отели и безопасные маршруты
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Поддержка 24/7
            </h3>
            <p className="text-muted-foreground">
              Всегда готовы помочь в путешествии
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
