import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Отели", href: "/hotels" },
  { name: "Туры", href: "/tours" },
  { name: "Места", href: "/places" },
  { name: "Умный подбор", href: "/smart-selection" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="MapPin" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">НатураТур</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-foreground hover:text-primary font-medium transition-colors relative",
                  location.pathname === link.href && "text-primary",
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={18} />
              </Button>
            </Link>
            <Link to="/calendar">
              <Button variant="ghost" size="sm">
                <Icon name="Calendar" size={18} />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Войти
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Регистрация
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-green-100 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-foreground hover:text-primary font-medium transition-colors px-2 py-1",
                    location.pathname === link.href &&
                      "text-primary bg-primary/5 rounded",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-green-100">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary"
                  >
                    Войти
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="bg-primary text-white">
                    Регистрация
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
