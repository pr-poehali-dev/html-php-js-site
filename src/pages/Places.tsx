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
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";

const places = [
  {
    id: 1,
    name: "Долина гейзеров",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    description:
      "Уникальное место на Камчатке с природными горячими источниками и гейзерами",
    location: "Камчатский край",
    category: "Геотермальные источники",
    rating: 4.9,
    reviews: 156,
    bestTime: "Июль-Сентябрь",
    accessibility: "Вертолет",
    features: [
      "Гейзеры",
      "Горячие источники",
      "Уникальная флора",
      "Фотосафари",
    ],
  },
  {
    id: 2,
    name: "Плато Путорана",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    description: "Таинственное плато за полярным кругом с водопадами и озерами",
    location: "Красноярский край",
    category: "Горные плато",
    rating: 4.8,
    reviews: 89,
    bestTime: "Июнь-Август",
    accessibility: "Экспедиция",
    features: ["Водопады", "Озера", "Северное сияние", "Дикая природа"],
  },
  {
    id: 3,
    name: "Ленские столбы",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    description: "Величественные скальные образования вдоль реки Лена",
    location: "Республика Саха (Якутия)",
    category: "Скальные образования",
    rating: 4.7,
    reviews: 234,
    bestTime: "Май-Сентябрь",
    accessibility: "Речной транспорт",
    features: ["Скалы", "Река Лена", "Смотровые площадки", "Палеонтология"],
  },
  {
    id: 4,
    name: "Куршская коса",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    description:
      "Уникальная песчаная коса между Балтийским морем и Куршским заливом",
    location: "Калининградская область",
    category: "Прибрежные дюны",
    rating: 4.6,
    reviews: 312,
    bestTime: "Апрель-Октябрь",
    accessibility: "Автомобиль",
    features: ["Дюны", "Орнитологическая станция", "Пляжи", "Музеи"],
  },
  {
    id: 5,
    name: "Мультинские озера",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    description: "Каскад горных озер в сердце Алтая с кристально чистой водой",
    location: "Республика Алтай",
    category: "Горные озера",
    rating: 4.8,
    reviews: 178,
    bestTime: "Июнь-Сентябрь",
    accessibility: "Пеший туризм",
    features: ["Горные озера", "Треккинг", "Рыбалка", "Кемпинг"],
  },
  {
    id: 6,
    name: "Столбы Выветривания",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    description:
      "Мансийские болваны - загадочные каменные столбы на плато Мань-Пупу-нёр",
    location: "Республика Коми",
    category: "Геологические памятники",
    rating: 4.9,
    reviews: 67,
    bestTime: "Июль-Август",
    accessibility: "Экспедиция",
    features: [
      "Каменные столбы",
      "Мистика",
      "Труднодоступность",
      "Уникальность",
    ],
  },
];

export default function Places() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAccessibility, setSelectedAccessibility] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const categories = [
    "Геотермальные источники",
    "Горные плато",
    "Скальные образования",
    "Прибрежные дюны",
    "Горные озера",
    "Геологические памятники",
  ];
  const accessibilityOptions = [
    "Вертолет",
    "Экспедиция",
    "Речной транспорт",
    "Автомобиль",
    "Пеший туризм",
  ];

  const filteredPlaces = places
    .filter((place) => {
      const matchesSearch =
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || place.category === selectedCategory;
      const matchesAccessibility =
        !selectedAccessibility || place.accessibility === selectedAccessibility;

      return matchesSearch && matchesCategory && matchesAccessibility;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Уникальные места
            </h1>
            <p className="text-xl text-muted-foreground">
              Откройте для себя самые удивительные уголки России
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-3 text-muted-foreground"
                size={16}
              />
              <Input
                placeholder="Поиск мест..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все категории</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedAccessibility}
              onValueChange={setSelectedAccessibility}
            >
              <SelectTrigger>
                <SelectValue placeholder="Доступность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Любая доступность</SelectItem>
                {accessibilityOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="reviews">По отзывам</SelectItem>
                <SelectItem value="name">По названию</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <Card
                key={place.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {place.category}
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {place.accessibility}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {place.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {place.description}
                  </p>

                  <div className="flex items-center space-x-1 text-muted-foreground mb-4">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">{place.location}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-500" size={16} />
                      <span className="font-medium">{place.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({place.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Calendar"
                        className="text-muted-foreground"
                        size={16}
                      />
                      <span className="text-sm text-muted-foreground">
                        {place.bestTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {place.features.slice(0, 3).map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {place.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{place.features.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
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
  );
}
