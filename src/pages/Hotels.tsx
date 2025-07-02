import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";

const hotels = [
  {
    id: 1,
    name: "Эко-отель 'Алтайский рай'",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    location: "Республика Алтай, Майминский район",
    price: 12500,
    rating: 4.8,
    reviews: 324,
    features: ["Wi-Fi", "Завтрак", "Парковка", "Баня", "Экскурсии"],
    category: "Эко-отель",
    rooms: 24,
    distance: "15 км от центра",
  },
  {
    id: 2,
    name: "База отдыха 'Байкальские берега'",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    location: "Иркутская область, пос. Листвянка",
    price: 8900,
    rating: 4.9,
    reviews: 567,
    features: ["Пляж", "Рыбалка", "Сауна", "Кафе", "Прокат"],
    category: "База отдыха",
    rooms: 32,
    distance: "2 км от Байкала",
  },
  {
    id: 3,
    name: "Гостевой дом 'Карельские просторы'",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    location: "Республика Карелия, г. Петрозаводск",
    price: 6200,
    rating: 4.7,
    reviews: 198,
    features: ["Камин", "Кухня", "Сад", "Мангал", "Тишина"],
    category: "Гостевой дом",
    rooms: 12,
    distance: "30 км от города",
  },
  {
    id: 4,
    name: "Глэмпинг 'Лесные домики'",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    location: "Московская область, Рузский район",
    price: 15800,
    rating: 4.6,
    reviews: 89,
    features: ["Все включено", "Спа", "Йога", "Конные прогулки"],
    category: "Глэмпинг",
    rooms: 8,
    distance: "90 км от Москвы",
  },
  {
    id: 5,
    name: "Усадьба 'Русские традиции'",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    location: "Тульская область, Ясногорский район",
    price: 9400,
    rating: 4.5,
    reviews: 156,
    features: ["Музей", "Мастер-классы", "Ресторан", "Конюшня"],
    category: "Усадьба",
    rooms: 16,
    distance: "120 км от Москвы",
  },
  {
    id: 6,
    name: "Санаторий 'Здоровые источники'",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    location: "Краснодарский край, г. Сочи",
    price: 18200,
    rating: 4.8,
    reviews: 412,
    features: ["Лечение", "Бассейн", "Диетпитание", "Процедуры"],
    category: "Санаторий",
    rooms: 64,
    distance: "10 км от моря",
  },
];

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([5000, 20000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");

  const allFeatures = [
    "Wi-Fi",
    "Завтрак",
    "Парковка",
    "Баня",
    "Пляж",
    "Рыбалка",
    "Сауна",
    "Камин",
    "Спа",
  ];

  const filteredHotels = hotels
    .filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesCategory =
        !selectedCategory || hotel.category === selectedCategory;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => hotel.features.includes(feature));

      return (
        matchesSearch && matchesPrice && matchesCategory && matchesFeatures
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Каталог отелей
            </h1>
            <p className="text-xl text-muted-foreground">
              Найдите идеальное место для отдыха на природе
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Фильтры</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Поиск
                  </label>
                  <div className="relative">
                    <Icon
                      name="Search"
                      className="absolute left-3 top-3 text-muted-foreground"
                      size={16}
                    />
                    <Input
                      placeholder="Название или город"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Цена за ночь: {priceRange[0]}₽ - {priceRange[1]}₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={25000}
                    min={3000}
                    step={500}
                    className="w-full"
                  />
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Тип размещения
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все категории</SelectItem>
                      <SelectItem value="Эко-отель">Эко-отель</SelectItem>
                      <SelectItem value="База отдыха">База отдыха</SelectItem>
                      <SelectItem value="Гостевой дом">Гостевой дом</SelectItem>
                      <SelectItem value="Глэмпинг">Глэмпинг</SelectItem>
                      <SelectItem value="Усадьба">Усадьба</SelectItem>
                      <SelectItem value="Санаторий">Санаторий</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Удобства
                  </label>
                  <div className="space-y-2">
                    {allFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={() => handleFeatureToggle(feature)}
                        />
                        <label
                          htmlFor={feature}
                          className="text-sm cursor-pointer"
                        >
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setPriceRange([5000, 20000]);
                    setSelectedCategory("");
                    setSelectedFeatures([]);
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </Card>
            </div>

            {/* Hotels List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Найдено {filteredHotels.length} отелей
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="price-low">Сначала дешевые</SelectItem>
                    <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <Card
                    key={hotel.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary text-white">
                        {hotel.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {hotel.name}
                      </h3>

                      <div className="flex items-center space-x-1 text-muted-foreground mb-2">
                        <Icon name="MapPin" size={16} />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      <div className="flex items-center space-x-1 text-muted-foreground mb-4">
                        <Icon name="Navigation" size={16} />
                        <span className="text-sm">{hotel.distance}</span>
                      </div>

                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            className="text-yellow-500"
                            size={16}
                          />
                          <span className="font-medium">{hotel.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({hotel.reviews})
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Home"
                            className="text-muted-foreground"
                            size={16}
                          />
                          <span className="text-sm text-muted-foreground">
                            {hotel.rooms} номеров
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {hotel.features.slice(0, 3).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {hotel.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{hotel.features.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            {hotel.price.toLocaleString()}₽
                          </span>
                          <span className="text-sm text-muted-foreground">
                            /ночь
                          </span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Забронировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredHotels.length === 0 && (
                <div className="text-center py-12">
                  <Icon
                    name="Search"
                    className="mx-auto text-muted-foreground mb-4"
                    size={48}
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Ничего не найдено
                  </h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
