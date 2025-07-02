import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";

const bookingHistory = [
  {
    id: 1,
    hotelName: "Эко-отель 'Алтайский рай'",
    dates: "15-20 июня 2024",
    price: 62500,
    status: "completed",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=100",
  },
  {
    id: 2,
    hotelName: "База отдыха 'Байкальские берега'",
    dates: "28 мая - 2 июня 2024",
    price: 44500,
    status: "completed",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=100",
  },
  {
    id: 3,
    hotelName: "Глэмпинг 'Лесные домики'",
    dates: "12-15 июля 2024",
    price: 47400,
    status: "upcoming",
    rating: null,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=100",
  },
];

const favorites = [
  {
    id: 1,
    name: "Карельские леса",
    type: "Направление",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=100",
  },
  {
    id: 2,
    name: "Санаторий 'Здоровые источники'",
    type: "Отель",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=100",
  },
];

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    firstName: "Анна",
    lastName: "Волкова",
    email: "anna.volkova@email.com",
    phone: "+7 (999) 123-45-67",
    city: "Москва",
    birthDate: "1990-05-15",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving user info:", userInfo);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Завершено
          </Badge>
        );
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Предстоит</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Отменено</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="bookings">Бронирования</TabsTrigger>
              <TabsTrigger value="favorites">Избранное</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b37c?ixlib=rb-4.0.3&w=150" />
                      <AvatarFallback className="text-2xl">
                        {userInfo.firstName.charAt(0)}
                        {userInfo.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl">
                        {userInfo.firstName} {userInfo.lastName}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Активный путешественник
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            className="text-yellow-500"
                            size={16}
                          />
                          <span className="text-sm font-medium">4.9</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="MapPin"
                            className="text-muted-foreground"
                            size={16}
                          />
                          <span className="text-sm">{userInfo.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя</Label>
                        <Input
                          id="firstName"
                          value={userInfo.firstName}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input
                          id="lastName"
                          value={userInfo.lastName}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              lastName: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userInfo.email}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          value={userInfo.phone}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Город</Label>
                        <Input
                          id="city"
                          value={userInfo.city}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              city: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">Дата рождения</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={userInfo.birthDate}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              birthDate: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {isEditing ? (
                      <>
                        <Button
                          onClick={handleSave}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Сохранить
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Отмена
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                      >
                        <Icon name="Edit" className="mr-2" size={16} />
                        Редактировать
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>История бронирований</CardTitle>
                  <p className="text-muted-foreground">
                    Ваши поездки и предстоящие бронирования
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <img
                        src={booking.image}
                        alt={booking.hotelName}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{booking.hotelName}</h4>
                        <p className="text-sm text-muted-foreground">
                          {booking.dates}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="font-bold text-primary">
                            {booking.price.toLocaleString()}₽
                          </span>
                          {getStatusBadge(booking.status)}
                          {booking.rating && (
                            <div className="flex items-center space-x-1">
                              <Icon
                                name="Star"
                                className="text-yellow-500"
                                size={14}
                              />
                              <span className="text-sm">{booking.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        {booking.status === "upcoming" && (
                          <Button size="sm" variant="outline">
                            Изменить
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Избранное</CardTitle>
                  <p className="text-muted-foreground">
                    Сохраненные отели и направления
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {favorites.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <Badge variant="secondary" className="mt-1">
                          {item.type}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки аккаунта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Уведомления по email</h4>
                        <p className="text-sm text-muted-foreground">
                          Получать новости и предложения
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Настроить
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Конфиденциальность</h4>
                        <p className="text-sm text-muted-foreground">
                          Управление видимостью профиля
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Настроить
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Смена пароля</h4>
                        <p className="text-sm text-muted-foreground">
                          Обновить пароль для безопасности
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Изменить
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-destructive">
                          Удалить аккаунт
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Полное удаление профиля и данных
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Удалить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
