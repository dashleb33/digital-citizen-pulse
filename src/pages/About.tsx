
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ClipboardList, 
  PieChart, 
  Users,
  MegaphoneIcon,
  BookOpenText,
  Building2,
  UserCog
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">О проекте</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Исследовательский проект по изучению уровня доверия граждан и представителей бизнеса к технологиям искусственного интеллекта и другим современным технологиям
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">Цели и задачи</TabsTrigger>
            <TabsTrigger value="methodology">Методология</TabsTrigger>
            <TabsTrigger value="technologies">Исследуемые технологии</TabsTrigger>
            <TabsTrigger value="team">Команда проекта</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>Цели и задачи исследования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <MegaphoneIcon className="h-5 w-5 mr-2 text-primary" />
                      Основные цели проекта
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Проект направлен на комплексное изучение отношения граждан и представителей бизнеса к технологиям искусственного интеллекта и другим современным технологиям в России. Исследование фокусируется на выявлении факторов, влияющих на уровень доверия к данным технологиям, и разработке рекомендаций для повышения этого доверия.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <ClipboardList className="h-5 w-5 mr-2 text-primary" />
                      Ключевые задачи
                    </h3>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                      <li>Провести анализ существующих исследований по теме доверия к ИИ в России и мире</li>
                      <li>Выявить основные проблемы и факторы, влияющие на уровень доверия к современным технологиям</li>
                      <li>Разработать и провести комплексное социологическое исследование среди различных групп населения</li>
                      <li>Проанализировать результаты исследования и выработать рекомендации для бизнеса и государства</li>
                      <li>Предложить меры по повышению уровня доверия к технологиям ИИ и другим цифровым инновациям</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <BookOpenText className="h-5 w-5 mr-2 text-primary" />
                      Контекст исследования
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      По мере того как искусственный интеллект и другие передовые технологии все глубже проникают в повседневную жизнь, вопрос общественного доверия к ним становится ключевым фактором их успешного внедрения. Исследование проводится в контексте растущего использования ИИ в различных сферах деятельности и возникающих этических, правовых и социальных вопросов, связанных с этим процессом.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="methodology">
              <Card>
                <CardHeader>
                  <CardTitle>Методология исследования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-primary" />
                      Структура исследования
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Исследование включает в себя несколько взаимосвязанных этапов, каждый из которых направлен на более глубокое понимание факторов, влияющих на доверие к современным технологиям.
                    </p>
                    <ol className="space-y-2 text-muted-foreground list-decimal pl-6">
                      <li>Анализ существующих исследований и публикаций по теме</li>
                      <li>Определение ключевых проблем и направлений исследования</li>
                      <li>Разработка методологии и инструментария исследования</li>
                      <li>Проведение социологического опроса</li>
                      <li>Анализ полученных данных</li>
                      <li>Формулирование выводов и рекомендаций</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Целевая аудитория
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      В исследовании принимают участие различные группы населения, что позволяет получить комплексное представление об отношении общества к современным технологиям. Выборка формируется с учетом следующих факторов:
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                      <li>Возраст (от 18 лет и старше, разделение на 6 возрастных групп)</li>
                      <li>Пол</li>
                      <li>Уровень образования</li>
                      <li>Сфера профессиональной деятельности</li>
                      <li>Регион проживания</li>
                      <li>Уровень дохода</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Методы сбора данных</h3>
                    <p className="text-muted-foreground">
                      Для сбора данных используется комбинированный подход, включающий:
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                      <li>Онлайн-опрос с использованием специализированной платформы</li>
                      <li>Телефонные интервью для охвата старших возрастных групп</li>
                      <li>Глубинные интервью с экспертами в области технологий</li>
                      <li>Фокус-группы с представителями различных целевых аудиторий</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technologies">
              <Card>
                <CardHeader>
                  <CardTitle>Исследуемые технологии</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground mb-4">
                    В рамках исследования изучается отношение общества к различным типам современных технологий, с особым фокусом на этические аспекты их использования и применения:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Системы искусственного интеллекта</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Генеративные модели ИИ (создание текста, изображений, аудио)</li>
                        <li>Системы рекомендаций и персонализации контента</li>
                        <li>Автоматические системы принятия решений</li>
                        <li>Распознавание речи и изображений</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Биометрические системы</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Единая биометрическая система</li>
                        <li>Системы удаленной идентификации</li>
                        <li>Технологии распознавания лиц в общественных местах</li>
                        <li>Биометрическая аутентификация в финансовых сервисах</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Автономные транспортные системы</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Беспилотные автомобили и такси</li>
                        <li>Дроны для доставки</li>
                        <li>Автономные общественные транспортные средства</li>
                        <li>Системы управления городским транспортом</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Технологии обработки персональных данных</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Использование данных для персонализации рекламы</li>
                        <li>Системы анализа пользовательского поведения</li>
                        <li>Технологии профилирования клиентов</li>
                        <li>Обмен данными между компаниями</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Цифровые финансовые технологии</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Цифровая валюта центрального банка</li>
                        <li>Системы автоматического кредитного скоринга</li>
                        <li>Автоматизированные инвестиционные платформы</li>
                        <li>Системы противодействия мошенничеству</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Умные города и системы наблюдения</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                        <li>Системы видеонаблюдения с распознаванием лиц</li>
                        <li>Умные системы управления городской инфраструктурой</li>
                        <li>Технологии анализа перемещений граждан</li>
                        <li>Системы прогнозирования правонарушений</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Команда проекта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <UserCog className="h-5 w-5 mr-2 text-primary" />
                      Исследовательская группа
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Проект реализуется междисциплинарной командой исследователей, обладающих экспертизой в области социологии, психологии, информационных технологий, права и этики.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="border rounded-lg p-4 text-center">
                        <h4 className="font-medium">Научный руководитель</h4>
                        <p className="text-muted-foreground">Антон Иванов</p>
                        <p className="text-sm text-muted-foreground">Доктор социологических наук</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <h4 className="font-medium">Руководитель аналитической группы</h4>
                        <p className="text-muted-foreground">Елена Смирнова</p>
                        <p className="text-sm text-muted-foreground">Кандидат психологических наук</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <h4 className="font-medium">Координатор по работе с данными</h4>
                        <p className="text-muted-foreground">Сергей Петров</p>
                        <p className="text-sm text-muted-foreground">PhD в области Data Science</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-primary" />
                      Организации-партнеры
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Академические учреждения</h4>
                        <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                          <li>Институт социологии РАН</li>
                          <li>Национальный исследовательский университет</li>
                          <li>Центр исследований цифрового общества</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Некоммерческие организации</h4>
                        <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                          <li>Фонд развития цифровой экономики</li>
                          <li>Ассоциация искусственного интеллекта</li>
                          <li>Центр этики цифровых технологий</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Контакты</h3>
                    <p className="text-muted-foreground">
                      Если у вас есть вопросы или предложения по исследованию, пожалуйста, свяжитесь с нами:
                    </p>
                    <div className="mt-2">
                      <p className="text-muted-foreground">Email: research@digital-citizen-pulse.ru</p>
                      <p className="text-muted-foreground">Телефон: +7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default About;
