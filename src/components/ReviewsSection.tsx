import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Волкова",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b37c?ixlib=rb-4.0.3&w=150",
    rating: 5,
    date: "15 июня 2024",
    location: "Алтайские горы",
    text: "Невероятные впечатления! Отель органично вписан в природный ландшафт, а персонал очень внимательный. Завтраки с видом на горы - это что-то особенное. Обязательно вернемся еще раз!",
    photos: 3,
  },
  {
    id: 2,
    name: "Михаил Петров",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150",
    rating: 5,
    date: "28 мая 2024",
    location: "Байкальские берега",
    text: "Прекрасное место для семейного отдыха. Дети в восторге от рыбалки, а жена от СПА-процедур с использованием местных трав. Рекомендую всем, кто ищет единение с природой.",
    photos: 7,
  },
  {
    id: 3,
    name: "Елена Соколова",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150",
    rating: 5,
    date: "10 июля 2024",
    location: "Карельские леса",
    text: "Удивительная атмосфера спокойствия и уюта. Деревянные домики с каминами, звуки леса, чистейший воздух. Это именно то, что нужно для восстановления сил после городской суеты.",
    photos: 5,
  },
];

const stats = [
  {
    number: "4.9",
    label: "Средний рейтинг",
    icon: "Star",
  },
  {
    number: "12,847",
    label: "Довольных гостей",
    icon: "Users",
  },
  {
    number: "98%",
    label: "Рекомендуют друзьям",
    icon: "Heart",
  },
  {
    number: "247",
    label: "Проверенных отелей",
    icon: "MapPin",
  },
];

export default function ReviewsSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Нам доверяют
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Более 10,000 путешественников уже выбрали наши природные отели и
            туры
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    className="text-primary"
                    size={24}
                  />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Отзывы наших гостей
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые нашли свой идеальный отдых на
              природе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-green-50/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              className="text-yellow-500"
                              size={14}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="MapPin" className="text-primary" size={16} />
                    <span className="text-sm font-medium text-primary">
                      {review.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Icon name="Camera" size={16} />
                      <span>{review.photos} фото</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-primary">
                      <Icon name="ThumbsUp" size={16} />
                      <span>Полезно</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Хотите поделиться своим опытом?
            </p>
            <div className="flex items-center justify-center space-x-1 text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors">
              <Icon name="Edit" size={20} />
              <span>Написать отзыв</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
