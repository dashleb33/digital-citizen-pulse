import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Layout from "@/components/Layout";

// Define the form schema
const surveySchema = z.object({
  // Demographics
  age: z.string().min(1, "Пожалуйста, выберите возрастную группу"),
  gender: z.string().min(1, "Пожалуйста, выберите пол"),
  education: z.string().min(1, "Пожалуйста, выберите уровень образования"),
  occupation: z.string().min(1, "Пожалуйста, выберите сферу деятельности"),
  region: z.string().min(1, "Пожалуйста, укажите регион"),
  
  // AI Trust Questions
  ai_knowledge: z.string().min(1, "Пожалуйста, оцените свои знания об ИИ"),
  ai_general_trust: z.string().min(1, "Пожалуйста, выберите вариант ответа"),
  ai_transparency: z.string().min(1, "Пожалуйста, выберите вариант ответа"),
  
  // Other technologies
  biometric_trust: z.string().min(1, "Пожалуйста, выберите вариант ответа"),
  autonomous_vehicles_trust: z.string().min(1, "Пожалуйста, выберите вариант ответа"),
  
  email: z.string().email("Пожалуйста, введите корректный email").optional().or(z.literal("")),
});

const Survey = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState("demographics");
  
  // Initialize the form
  const form = useForm<z.infer<typeof surveySchema>>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      age: "",
      gender: "",
      education: "",
      occupation: "",
      region: "",
      ai_knowledge: "",
      ai_general_trust: "",
      ai_transparency: "",
      biometric_trust: "",
      autonomous_vehicles_trust: "",
      email: "",
    },
  });
  
  // Submit handler
  function onSubmit(data: z.infer<typeof surveySchema>) {
    console.log(data);
    toast({
      title: "Спасибо за участие в опросе!",
      description: "Ваши ответы были успешно сохранены.",
    });
  }
  
  // Next tab handler
  const handleNextTab = () => {
    if (currentTab === "demographics") {
      // Validate demographics fields before proceeding
      form.trigger(["age", "gender", "education", "occupation", "region"]).then((isValid) => {
        if (isValid) setCurrentTab("ai_trust");
      });
    } else if (currentTab === "ai_trust") {
      // Validate AI trust fields before proceeding
      form.trigger(["ai_knowledge", "ai_general_trust", "ai_transparency"]).then((isValid) => {
        if (isValid) setCurrentTab("other_tech");
      });
    }
  };
  
  // Previous tab handler
  const handlePrevTab = () => {
    if (currentTab === "ai_trust") setCurrentTab("demographics");
    else if (currentTab === "other_tech") setCurrentTab("ai_trust");
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Опрос о доверии к технологиям ИИ</h1>
            <p className="text-muted-foreground">
              Ваше мнение поможет лучше понять общественное отношение к современным технологиям
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Анкета исследования</CardTitle>
              <CardDescription>
                Пожалуйста, ответьте на все вопросы. Заполнение займет примерно 10-15 минут.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <Tabs value={currentTab} onValueChange={setCurrentTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="demographics">Демография</TabsTrigger>
                      <TabsTrigger value="ai_trust">Отношение к ИИ</TabsTrigger>
                      <TabsTrigger value="other_tech">Другие технологии</TabsTrigger>
                    </TabsList>
                    
                    {/* Demographics */}
                    <TabsContent value="demographics" className="space-y-6 pt-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Возраст</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите возрастную группу" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="18-24">18-24 лет</SelectItem>
                                <SelectItem value="25-34">25-34 лет</SelectItem>
                                <SelectItem value="35-44">35-44 лет</SelectItem>
                                <SelectItem value="45-54">45-54 лет</SelectItem>
                                <SelectItem value="55-64">55-64 лет</SelectItem>
                                <SelectItem value="65+">65 лет и старше</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Пол</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите пол" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Мужской</SelectItem>
                                <SelectItem value="female">Женский</SelectItem>
                                <SelectItem value="other">Другой</SelectItem>
                                <SelectItem value="prefer_not_to_say">Предпочитаю не указывать</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="education"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Образование</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите уровень образования" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="middle">Среднее</SelectItem>
                                <SelectItem value="spec_middle">Среднее специальное</SelectItem>
                                <SelectItem value="incomplete_higher">Неполное высшее</SelectItem>
                                <SelectItem value="higher">Высшее</SelectItem>
                                <SelectItem value="graduate">Ученая степень</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Сфера деятельности</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите сферу деятельности" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="it">Информационные технологии</SelectItem>
                                <SelectItem value="finance">Финансы и банковское дело</SelectItem>
                                <SelectItem value="education">Образование</SelectItem>
                                <SelectItem value="healthcare">Здравоохранение</SelectItem>
                                <SelectItem value="government">Государственная служба</SelectItem>
                                <SelectItem value="manufacturing">Производство</SelectItem>
                                <SelectItem value="retail">Торговля</SelectItem>
                                <SelectItem value="services">Услуги</SelectItem>
                                <SelectItem value="other">Другое</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Регион проживания</FormLabel>
                            <FormControl>
                              <Input placeholder="Укажите регион проживания" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    {/* AI Trust */}
                    <TabsContent value="ai_trust" className="space-y-6 pt-4">
                      <FormField
                        control={form.control}
                        name="ai_knowledge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Как бы вы оценили свой уровень знаний об искусственном интеллекте?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="very_low" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Очень низкий
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="low" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Низкий
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="medium" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Средний
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="high" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Высокий
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="expert" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Экспертный
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-4" />

                      <FormField
                        control={form.control}
                        name="ai_general_trust"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Насколько вы в целом доверяете технологиям искусственного интеллекта?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not_at_all" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Совсем не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_distrust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="neutral" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Нейтрально
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="fully_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Полностью доверяю
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-4" />

                      <FormField
                        control={form.control}
                        name="ai_transparency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Насколько важна для вас прозрачность работы систем искусственного интеллекта?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not_important" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Совсем не важно
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="slightly_important" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Немного важно
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="moderately_important" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Умеренно важно
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="very_important" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Очень важно
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="critically_important" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Критически важно
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    {/* Other Technologies */}
                    <TabsContent value="other_tech" className="space-y-6 pt-4">
                      <FormField
                        control={form.control}
                        name="biometric_trust"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Насколько вы доверяете системам биометрической идентификации?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not_at_all" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Совсем не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_distrust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="neutral" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Нейтрально
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="fully_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Полностью доверяю
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-4" />

                      <FormField
                        control={form.control}
                        name="autonomous_vehicles_trust"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Насколько вы доверяете беспилотным транспортным средствам?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not_at_all" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Совсем не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_distrust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном не доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="neutral" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Нейтрально
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mostly_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    В основном доверяю
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="fully_trust" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Полностью доверяю
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Separator className="my-4" />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email для получения результатов исследования (необязательно)</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              Мы будем использовать ваш email только для отправки результатов исследования.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                  </Tabs>
                  
                  <div className="flex justify-between pt-2">
                    {currentTab !== "demographics" && (
                      <Button type="button" variant="outline" onClick={handlePrevTab}>
                        Назад
                      </Button>
                    )}
                    
                    {currentTab !== "other_tech" ? (
                      <Button type="button" onClick={handleNextTab} className="ml-auto">
                        Далее
                      </Button>
                    ) : (
                      <Button type="submit" className="ml-auto">
                        Отправить
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Survey;
