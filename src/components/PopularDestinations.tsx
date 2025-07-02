import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const destinations = [
  {
    id: 1,
    name: "Алтайские горы",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    price: "от 12,500₽",
    rating: 4.8,
    reviews: 324,
    location: "Республика Алтай",
    category: "Горы",
    features: ["Эко-отели", "Треккинг", "Рафтинг"],
  },
  {
    id: 2,
    name: "Байкальские берега",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400",
    price: "от 8,900₽",
    rating: 4.9,
    reviews: 567,
    location: "Иркутская область",
    category: "Озера",
    features: ["База отдыха", "Рыбалка", "Баня"],
  },
  {
    id: 3,
    name: "Карельские леса",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    price: "от 6,200₽",
    rating: 4.7,
    reviews: 198,
    location: "Республика Карелия",
    category: "Леса",
    features: ["Гостевые дома", "Сбор ягод", "Сауна"],
  },
];

const tours = [
  {
    id: 1,
    name: "Золотое кольцо природы",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=400",
    duration: "7 дней",
    price: "от 45,000₽",
    rating: 4.9,
    reviews: 89,
    group: "до 12 человек",
    features: ["Все включено", "Гид", "Транспорт"],
  },
  {
    id: 2,
    name: "Таежные тропы",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400",
    duration: "5 дней",
    price: "от 28,500₽",
    rating: 4.8,
    reviews: 156,
    group: "до 8 человек",
    features: ["Кемпинг", "Питание", "Снаряжение"],
  },
];

export default function PopularDestinations() {
  return (
    <div className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hotels Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Популярные направления
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальные места для незабываемого отдыха на природе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {destination.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 text-white">
                      <Icon name="MapPin" size={16} />
                      <span className="text-sm font-medium">
                        {destination.location}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {destination.name}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-500" size={16} />
                      <span className="font-medium text-foreground">
                        {destination.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({destination.reviews})
                      </span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {destination.price}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tours Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Организованные туры
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые программы с опытными гидами и полным сопровождением
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/2">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {tour.duration}
                    </Badge>
                  </div>

                  <CardContent className="p-6 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {tour.name}
                      </h3>

                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            className="text-yellow-500"
                            size={16}
                          />
                          <span className="font-medium text-foreground">
                            {tour.rating}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({tour.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Users" size={16} />
                          <span>Группа {tour.group}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-primary mb-4">
                        {tour.price}
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Забронировать тур
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
