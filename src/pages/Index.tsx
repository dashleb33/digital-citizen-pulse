import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronRight, 
  BarChart3, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Shield
} from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const stats = [
    { 
      icon: <Users className="h-8 w-8 text-primary" />, 
      value: "1200+", 
      label: "Респондентов" 
    },
    { 
      icon: <BarChart3 className="h-8 w-8 text-primary" />, 
      value: "15+", 
      label: "Исследуемых технологий" 
    },
    { 
      icon: <Lightbulb className="h-8 w-8 text-primary" />, 
      value: "4", 
      label: "Ключевых фактора доверия" 
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className={`space-y-4 max-w-3xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text">
                Дарья Лебедева - задание от ТД
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Комплексное исследование уровня доверия граждан и бизнеса к технологиям ИИ и другим цифровым инновациям
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              <Link to="/survey">
                <Button size="lg" className="font-medium">
                  Принять участие в опросе <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/results">
                <Button size="lg" variant="outline" className="font-medium">
                  Ознакомиться с результатами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 md:py-16 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className={`border-2 border-muted ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-secondary/50 p-3 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Research Focus Section */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Ключевые направления исследования</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наше исследование направлено на выявление факторов, влияющих на уровень доверия к современным технологиям
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded mr-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Технологии ИИ</h3>
                    <p className="text-muted-foreground">
                      Изучение отношения к различным приложениям искусственного интеллекта: генеративный ИИ, системы рекомендаций, автоматические решения
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Безопасность персональных данных</h3>
                    <p className="text-muted-foreground">
                      Анализ уровня доверия к системам биометрической идентификации, сбору и использованию персональных данных
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ваше мнение важно для нас</h2>
          <p className="text-muted-foreground mb-8">
            Примите участие в исследовании и помогите сформировать более глубокое понимание отношения общества к современным технологиям
          </p>
          <Link to="/survey">
            <Button size="lg" className="font-medium">
              Пройти опрос
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
