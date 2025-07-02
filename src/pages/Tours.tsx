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

const tours = [
  {
    id: 1,
    name: "Золотое кольцо природы",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    description:
      "Путешествие по самым красивым природным местам России с посещением национальных парков",
    duration: "7 дней",
    difficulty: "Легкий",
    price: 45000,
    rating: 4.9,
    reviews: 89,
    groupSize: "до 12 человек",
    features: ["Все включено", "Гид", "Транспорт", "Проживание", "Питание"],
    category: "Экотуризм",
    region: "Центральная Россия",
    dates: ["15 июля", "22 июля", "5 августа"],
  },
  {
    id: 2,
    name: "Таежные тропы",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    description:
      "Пешеходный тур по нетронутой тайге с ночевками в палатках и костром под звездами",
    duration: "5 дней",
    difficulty: "Средний",
    price: 28500,
    rating: 4.8,
    reviews: 156,
    groupSize: "до 8 человек",
    features: ["Кемпинг", "Питание", "Снаряжение", "Гид"],
    category: "Пеший туризм",
    region: "Сибирь",
    dates: ["20 июля", "27 июля", "10 августа"],
  },
  {
    id: 3,
    name: "Байкальские просторы",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    description:
      "Комфортный тур к священному озеру с проживанием в эко-отелях и баней на берегу",
    duration: "6 дней",
    difficulty: "Легкий",
    price: 52000,
    rating: 4.9,
    reviews: 234,
    groupSize: "до 16 человек",
    features: ["Отель", "Все включено", "Баня", "Экскурсии", "Рыбалка"],
    category: "Озерный туризм",
    region: "Сибирь",
    dates: ["18 июля", "25 июля", "8 августа"],
  },
  {
    id: 4,
    name: "Алтайские вершины",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    description:
      "Активный тур для опытных путешественников с восхождениями и рафтингом",
    duration: "10 дней",
    difficulty: "Сложный",
    price: 68000,
    rating: 4.7,
    reviews: 67,
    groupSize: "до 6 человек",
    features: ["Альпинизм", "Рафтинг", "Кемпинг", "Инструктор", "Снаряжение"],
    category: "Горный туризм",
    region: "Алтай",
    dates: ["12 июля", "26 июля", "2 августа"],
  },
  {
    id: 5,
    name: "Карельские озера",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    description:
      "Семейный тур по красивейшим озерам Карелии с рыбалкой и сбором ягод",
    duration: "4 дня",
    difficulty: "Легкий",
    price: 32000,
    rating: 4.6,
    reviews: 142,
    groupSize: "до 20 человек",
    features: ["Семейный", "Рыбалка", "Ягоды", "Гостевой дом", "Питание"],
    category: "Семейный туризм",
    region: "Карелия",
    dates: ["14 июля", "21 июля", "28 июля"],
  },
  {
    id: 6,
    name: "Камчатские гейзеры",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    description:
      "Уникальное путешествие в долину гейзеров с вертолетными экскурсиями",
    duration: "8 дней",
    difficulty: "Средний",
    price: 125000,
    rating: 5.0,
    reviews: 45,
    groupSize: "до 10 человек",
    features: [
      "Вертолет",
      "Люкс",
      "Все включено",
      "Фотосафари",
      "Термальные источники",
    ],
    category: "Премиум туризм",
    region: "Камчатка",
    dates: ["16 июля", "30 июля", "6 августа"],
  },
];

export default function Tours() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([20000, 130000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");

  const allFeatures = [
    "Все включено",
    "Гид",
    "Транспорт",
    "Кемпинг",
    "Отель",
    "Питание",
    "Снаряжение",
  ];
  const categories = [
    "Экотуризм",
    "Пеший туризм",
    "Озерный туризм",
    "Горный туризм",
    "Семейный туризм",
    "Премиум туризм",
  ];
  const difficulties = ["Легкий", "Средний", "Сложный"];

  const filteredTours = tours
    .filter((tour) => {
      const matchesSearch =
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesCategory =
        !selectedCategory || tour.category === selectedCategory;
      const matchesDifficulty =
        !selectedDifficulty || tour.difficulty === selectedDifficulty;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => tour.features.includes(feature));

      return (
        matchesSearch &&
        matchesPrice &&
        matchesCategory &&
        matchesDifficulty &&
        matchesFeatures
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
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Сложный":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Туры и экскурсии
            </h1>
            <p className="text-xl text-muted-foreground">
              Организованные путешествия с опытными гидами
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
                      placeholder="Название тура"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Цена за тур: {priceRange[0].toLocaleString()}₽ -{" "}
                    {priceRange[1].toLocaleString()}₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={150000}
                    min={15000}
                    step={5000}
                    className="w-full"
                  />
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Категория
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
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Difficulty */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Сложность
                  </label>
                  <Select
                    value={selectedDifficulty}
                    onValueChange={setSelectedDifficulty}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Любая сложность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Любая сложность</SelectItem>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Включено
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
                    setPriceRange([20000, 130000]);
                    setSelectedCategory("");
                    setSelectedDifficulty("");
                    setSelectedFeatures([]);
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </Card>
            </div>

            {/* Tours List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Найдено {filteredTours.length} туров
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="price-low">Сначала дешевые</SelectItem>
                    <SelectItem value="price-high">Сначала дорогие</SelectItem>
                    <SelectItem value="duration">По длительности</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {filteredTours.map((tour) => (
                  <Card
                    key={tour.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-primary text-white">
                          {tour.category}
                        </Badge>
                        <Badge
                          className={`absolute top-4 left-4 ${getDifficultyColor(tour.difficulty)}`}
                        >
                          {tour.difficulty}
                        </Badge>
                      </div>

                      <CardContent className="p-6 md:col-span-2">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">
                              {tour.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {tour.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-primary">
                              {tour.price.toLocaleString()}₽
                            </div>
                            <div className="text-sm text-muted-foreground">
                              за человека
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Clock"
                              className="text-muted-foreground"
                              size={16}
                            />
                            <span className="text-sm">{tour.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Users"
                              className="text-muted-foreground"
                              size={16}
                            />
                            <span className="text-sm">{tour.groupSize}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="MapPin"
                              className="text-muted-foreground"
                              size={16}
                            />
                            <span className="text-sm">{tour.region}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Star"
                              className="text-yellow-500"
                              size={16}
                            />
                            <span className="text-sm font-medium">
                              {tour.rating}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              ({tour.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tour.features.slice(0, 4).map((feature, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {tour.features.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{tour.features.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Icon
                              name="Calendar"
                              className="text-muted-foreground"
                              size={16}
                            />
                            <div className="flex space-x-2">
                              {tour.dates.slice(0, 3).map((date, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {date}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            Забронировать тур
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredTours.length === 0 && (
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
