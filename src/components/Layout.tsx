
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart4, ClipboardList, Home, Info, UserRound } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navItems = [
    { title: "Главная", path: "/", icon: <Home className="h-5 w-5 mr-2" /> },
    { title: "Опрос", path: "/survey", icon: <ClipboardList className="h-5 w-5 mr-2" /> },
    { title: "Результаты", path: "/results", icon: <BarChart4 className="h-5 w-5 mr-2" /> },
    { title: "О проекте", path: "/about", icon: <Info className="h-5 w-5 mr-2" /> },
    { title: "Для экспертов", path: "/experts", icon: <UserRound className="h-5 w-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-md bg-primary/10 p-1">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl">Digital Citizen Pulse</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  className="flex items-center"
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile navigation will go here in future implementation */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Citizen Pulse. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
