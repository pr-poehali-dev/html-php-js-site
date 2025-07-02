import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const promoOffers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    originalPrice: "$2500",
    rating: 4,
    reviews: 127,
    discount: "-20%",
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    originalPrice: "$2500",
    rating: 5,
    reviews: 89,
    discount: "-20%",
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    originalPrice: "$2500",
    rating: 4,
    reviews: 156,
    discount: "-20%",
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
];

const hotOffers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 4,
    reviews: 143,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 5,
    reviews: 234,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 4,
    reviews: 87,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 5,
    reviews: 198,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 4,
    reviews: 156,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
    title: "Глэмпинг «Лесн-Отель»",
    location: "Россия, Республика Карелия",
    price: "$2000",
    rating: 5,
    reviews: 278,
    features: ["2 спальни", "Кухня", "Wi-Fi"],
  },
];

function HotelCard({
  hotel,
  isPromo = false,
}: {
  hotel: any;
  isPromo?: boolean;
}) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="w-full h-48 object-cover"
        />
        {isPromo && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1">
            {hotel.discount}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-slate-800 text-white px-3 py-1 rounded text-lg font-bold">
          {hotel.price}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-slate-800">
          {hotel.title}
        </h3>

        <div className="flex items-center text-sm text-slate-600 mb-3">
          <Icon name="MapPin" size={14} className="mr-1" />
          <span>{hotel.location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < hotel.rating
                    ? "text-yellow-500 fill-current"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-slate-600 ml-2">
              ({hotel.reviews})
            </span>
          </div>
          {isPromo && hotel.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              {hotel.originalPrice}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {hotel.features.map((feature: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function HotelOffers() {
  return (
    <div className="bg-orange-50 py-16">
      <div className="container mx-auto px-6">
        {/* Promotional Offers Section */}
        <div className="mb-16">
          <div className="bg-slate-800 text-white text-center py-3 mb-8">
            <h2 className="text-xl font-semibold">РЕКЛАМНОЕ ПРЕДЛОЖЕНИЯ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {promoOffers.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} isPromo={true} />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2">
              Полный список
            </Button>
          </div>
        </div>

        {/* Hot Offers Section */}
        <div>
          <div className="bg-slate-800 text-white text-center py-3 mb-8">
            <h2 className="text-xl font-semibold">ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hotOffers.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
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
