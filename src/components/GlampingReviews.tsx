import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Иван",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150",
    text: "Спасибо, что согласились заменить большую комнату, которую изначально были готовы отремонтировать для нас.",
  },
  {
    id: 2,
    name: "Анастасия",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b37c?ixlib=rb-4.0.3&w=150",
    text: "Спасибо, что согласились заменить большую комнату, которую изначально были готовы отремонтировать для нас.",
  },
  {
    id: 3,
    name: "Вероника",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150",
    text: "Спасибо, что согласились заменить большую комнату, которую изначально были готовы отремонтировать для нас.",
  },
];

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=300",
    alt: "Hotel room",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=300",
    alt: "Hotel exterior",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&w=300",
    alt: "Hotel interior",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300",
    alt: "Nature view",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=300",
    alt: "Forest cabin",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=300",
    alt: "Mountain view",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=300",
    alt: "Luxury room",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=300",
    alt: "Hotel amenities",
  },
];

const news = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=300",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor a leo sit amet efficitur. Aenean bibendum enim et...",
    date: "15 мая 2024",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=300",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor a leo sit amet efficitur. Aenean bibendum enim et...",
    date: "28 апреля 2024",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&w=300",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor a leo sit amet efficitur. Aenean bibendum enim et...",
    date: "12 апреля 2024",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor a leo sit amet efficitur. Aenean bibendum enim et...",
    date: "3 апреля 2024",
  },
];

export default function GlampingReviews() {
  return (
    <div className="bg-orange-50 py-16">
      <div className="container mx-auto px-6">
        {/* Reviews Section */}
        <div className="mb-16">
          <div className="bg-slate-800 text-white text-center py-3 mb-8">
            <h2 className="text-xl font-semibold">ОТЗЫВЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-slate-700 text-white border-0"
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-slate-600 text-white">
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-3">{review.name}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2">
              Полный список
            </Button>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="bg-slate-800 text-white text-center py-3 mb-8">
            <h2 className="text-xl font-semibold">ФОТО</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-32 object-cover rounded hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2">
              Полный список
            </Button>
          </div>
        </div>

        {/* News Section */}
        <div>
          <div className="bg-slate-800 text-white text-center py-3 mb-8">
            <h2 className="text-xl font-semibold">НОВОСТИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {news.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt="News"
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {article.title}
                  </p>
                  <div className="text-xs text-slate-400">{article.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2">
              Полный список
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
