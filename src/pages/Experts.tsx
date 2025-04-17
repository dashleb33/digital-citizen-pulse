
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, FileText, MessageSquare, Users } from "lucide-react";

const Experts = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Материалы для экспертов</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Дополнительная информация и ресурсы для специалистов по искусственному интеллекту, этике технологий и социологов
          </p>
        </div>

        <Tabs defaultValue="methodology" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="methodology">Методология</TabsTrigger>
            <TabsTrigger value="references">Литература</TabsTrigger>
            <TabsTrigger value="participation">Участие в исследовании</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="methodology">
              <Card>
                <CardHeader>
                  <CardTitle>Подробная методология исследования</CardTitle>
                  <CardDescription>
                    Расширенное описание исследовательских методов и подходов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Структура выборки</h3>
                    <p className="text-muted-foreground mb-3">
                      Для обеспечения репрезентативности исследования используется квотная выборка, учитывающая следующие параметры:
                    </p>
                    <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                      <li><strong>Возраст:</strong> 18-24, 25-34, 35-44, 45-54, 55-64, 65+</li>
                      <li><strong>Пол:</strong> мужской, женский</li>
                      <li><strong>Образование:</strong> среднее, среднее специальное, неполное высшее, высшее, ученая степень</li>
                      <li><strong>Географическое распределение:</strong> равномерное представительство всех федеральных округов</li>
                      <li><strong>Тип населенного пункта:</strong> мегаполисы, крупные города, малые города, сельская местность</li>
                    </ul>

                    <p className="text-muted-foreground mt-3">
                      Целевой размер выборки: не менее 1200 респондентов для общей выборки и не менее 300 респондентов для выборки представителей бизнеса.
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3 className="text-xl font-medium mb-3">Инструментарий исследования</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Структура анкеты</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>Анкета исследования состоит из 5 основных блоков:</p>
                          <ol className="list-decimal pl-6 mt-2 space-y-1">
                            <li>Демографический блок (возраст, пол, образование, доход, регион и т.д.)</li>
                            <li>Блок об общем отношении к технологиям и уровне технологической грамотности</li>
                            <li>Блок о доверии к системам искусственного интеллекта (общие вопросы, разные применения ИИ)</li>
                            <li>Блок о других современных технологиях (биометрия, автономные системы, обработка данных)</li>
                            <li>Блок о факторах, влияющих на уровень доверия, и мерах по его повышению</li>
                          </ol>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Типы вопросов</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>В исследовании используются различные типы вопросов:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Закрытые вопросы с одиночным и множественным выбором</li>
                            <li>Вопросы со шкалой Лайкерта (5-балльной и 10-балльной)</li>
                            <li>Открытые вопросы для получения развернутых мнений</li>
                            <li>Вопросы-кейсы с описанием ситуаций и оценкой реакции</li>
                            <li>Семантический дифференциал для оценки восприятия технологий</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Методы анализа данных</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>Для анализа собранных данных применяются следующие методы:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Описательный статистический анализ</li>
                            <li>Корреляционный анализ для выявления связей между переменными</li>
                            <li>Регрессионный анализ для определения факторов, влияющих на доверие</li>
                            <li>Кластерный анализ для выделения типологических групп по отношению к технологиям</li>
                            <li>Контент-анализ ответов на открытые вопросы</li>
                            <li>Факторный анализ для выявления латентных переменных</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3 className="text-xl font-medium mb-3">Валидация результатов</h3>
                    <p className="text-muted-foreground mb-3">
                      Для обеспечения достоверности полученных результатов применяются следующие методы валидации:
                    </p>
                    <ul className="space-y-1 text-muted-foreground list-disc pl-6">
                      <li>Триангуляция методов сбора данных (онлайн-опрос, интервью, фокус-группы)</li>
                      <li>Пилотное тестирование опросника на малой выборке с последующей корректировкой</li>
                      <li>Использование контрольных вопросов для проверки внимательности респондентов</li>
                      <li>Экспертная оценка результатов исследования</li>
                      <li>Сравнение полученных данных с результатами аналогичных исследований</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button className="flex items-center">
                      <Download className="mr-2 h-4 w-4" /> Скачать полное описание методологии (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="references">
              <Card>
                <CardHeader>
                  <CardTitle>Обзор литературы и исследований</CardTitle>
                  <CardDescription>
                    Ключевые публикации и исследования по теме доверия к технологиям ИИ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Международные исследования</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">The AI Index Report 2024</h4>
                        <p className="text-muted-foreground">Stanford University Human-Centered Artificial Intelligence</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ежегодный отчет, оценивающий развитие технологий ИИ и их социальное восприятие в разных странах мира.
                        </p>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="text-xs flex items-center">
                            <FileText className="mr-1 h-3 w-3" /> Ознакомиться
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Public Attitudes Toward AI</h4>
                        <p className="text-muted-foreground">Pew Research Center</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Исследование общественного мнения о различных аспектах внедрения искусственного интеллекта.
                        </p>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="text-xs flex items-center">
                            <FileText className="mr-1 h-3 w-3" /> Ознакомиться
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Trust in Artificial Intelligence: A Five Country Study</h4>
                        <p className="text-muted-foreground">Oxford Internet Institute & Reuters Institute</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Сравнительное исследование уровня доверия к ИИ в пяти странах: США, Великобритании, Германии, Японии и Китае.
                        </p>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="text-xs flex items-center">
                            <FileText className="mr-1 h-3 w-3" /> Ознакомиться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Российские исследования</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Отношение россиян к искусственному интеллекту</h4>
                        <p className="text-muted-foreground">ВЦИОМ</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Всероссийский опрос об отношении граждан к внедрению технологий искусственного интеллекта.
                        </p>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="text-xs flex items-center">
                            <FileText className="mr-1 h-3 w-3" /> Ознакомиться
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Индекс готовности к внедрению ИИ</h4>
                        <p className="text-muted-foreground">НИУ ВШЭ</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Исследование готовности различных секторов экономики и общества к внедрению технологий ИИ.
                        </p>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="text-xs flex items-center">
                            <FileText className="mr-1 h-3 w-3" /> Ознакомиться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Ключевые академические публикации</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">The Psychology of Human-AI Trust: Methodological Advances and Empirical Findings</h4>
                        <p className="text-muted-foreground">Journal of Artificial Intelligence Research</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Обзор психологических факторов, влияющих на формирование доверия между человеком и системами ИИ.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Trust in Artificial Intelligence: A Meta-Analysis</h4>
                        <p className="text-muted-foreground">ACM Transactions on Human-Computer Interaction</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Метаанализ исследований о факторах, влияющих на доверие пользователей к системам искусственного интеллекта.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">Ethical Dimensions of AI Trust</h4>
                        <p className="text-muted-foreground">Ethics and Information Technology</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Анализ этических аспектов доверия к искусственному интеллекту и их влияния на внедрение технологий.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button className="flex items-center">
                      <Download className="mr-2 h-4 w-4" /> Скачать полную библиографию (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="participation">
              <Card>
                <CardHeader>
                  <CardTitle>Участие в исследовании</CardTitle>
                  <CardDescription>
                    Информация для экспертов, желающих принять участие в исследовании или включиться в экспертную группу
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Возможности для экспертов</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader className="pb-2">
                          <div className="flex items-center mb-2">
                            <MessageSquare className="h-5 w-5 text-primary mr-2" />
                            <CardTitle className="text-lg">Экспертное интервью</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Мы приглашаем специалистов в области ИИ, этики технологий, права и социологии принять участие в серии глубинных интервью по вопросам доверия к современным технологиям.
                          </p>
                          <Button variant="outline" className="w-full mt-4">
                            Записаться на интервью
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="border">
                        <CardHeader className="pb-2">
                          <div className="flex items-center mb-2">
                            <Users className="h-5 w-5 text-primary mr-2" />
                            <CardTitle className="text-lg">Экспертная панель</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Присоединяйтесь к нашей экспертной панели для регулярного участия в оценке результатов исследования и формулировании рекомендаций.
                          </p>
                          <Button variant="outline" className="w-full mt-4">
                            Стать экспертом панели
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3 className="text-xl font-medium mb-3">Дорожная карта исследования</h3>
                    <div className="relative pl-6 border-l-2 border-muted space-y-6">
                      <div className="relative">
                        <div className="absolute -left-[25px] w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Фаза 1: Подготовка (март-апрель 2025)</h4>
                        <p className="text-muted-foreground mt-1">
                          Анализ литературы, разработка методологии, формирование инструментария исследования
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] w-4 h-4 bg-primary/70 rounded-full"></div>
                        <h4 className="font-medium">Фаза 2: Полевой этап (май-июль 2025)</h4>
                        <p className="text-muted-foreground mt-1">
                          Проведение массового опроса, интервью с экспертами, фокус-группы
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] w-4 h-4 bg-primary/50 rounded-full"></div>
                        <h4 className="font-medium">Фаза 3: Анализ данных (август-сентябрь 2025)</h4>
                        <p className="text-muted-foreground mt-1">
                          Обработка и анализ собранных данных, предварительная интерпретация результатов
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] w-4 h-4 bg-primary/30 rounded-full"></div>
                        <h4 className="font-medium">Фаза 4: Экспертная оценка (октябрь 2025)</h4>
                        <p className="text-muted-foreground mt-1">
                          Обсуждение результатов с экспертной панелью, формулирование выводов и рекомендаций
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] w-4 h-4 bg-primary/20 rounded-full"></div>
                        <h4 className="font-medium">Фаза 5: Публикация результатов (ноябрь-декабрь 2025)</h4>
                        <p className="text-muted-foreground mt-1">
                          Подготовка и публикация итогового отчета, научных статей, презентация результатов
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3 className="text-xl font-medium mb-3">Контакты для экспертов</h3>
                    <p className="text-muted-foreground mb-4">
                      Для получения дополнительной информации или обсуждения возможностей сотрудничества, пожалуйста, свяжитесь с координатором экспертной группы:
                    </p>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="font-medium">Елена Смирнова</p>
                      <p className="text-muted-foreground">Руководитель аналитической группы</p>
                      <p className="text-muted-foreground">Email: e.smirnova@digital-citizen-pulse.ru</p>
                      <p className="text-muted-foreground">Телефон: +7 (495) 123-45-67 доб. 234</p>
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

export default Experts;
