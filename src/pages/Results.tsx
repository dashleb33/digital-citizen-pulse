
import React from "react";
import Layout from "@/components/Layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Results = () => {
  // Sample data for charts
  const aiTrustData = [
    { name: 'Совсем не доверяют', value: 15 },
    { name: 'В основном не доверяют', value: 25 },
    { name: 'Нейтрально', value: 30 },
    { name: 'В основном доверяют', value: 20 },
    { name: 'Полностью доверяют', value: 10 }
  ];
  
  const biometricTrustData = [
    { name: 'Совсем не доверяют', value: 20 },
    { name: 'В основном не доверяют', value: 30 },
    { name: 'Нейтрально', value: 25 },
    { name: 'В основном доверяют', value: 15 },
    { name: 'Полностью доверяют', value: 10 }
  ];

  const autonomousVehiclesTrustData = [
    { name: 'Совсем не доверяют', value: 25 },
    { name: 'В основном не доверяют', value: 35 },
    { name: 'Нейтрально', value: 20 },
    { name: 'В основном доверяют', value: 15 },
    { name: 'Полностью доверяют', value: 5 }
  ];

  const ageDistributionData = [
    { name: '18-24', count: 120 },
    { name: '25-34', count: 250 },
    { name: '35-44', count: 180 },
    { name: '45-54', count: 150 },
    { name: '55-64', count: 100 },
    { name: '65+', count: 80 }
  ];
  
  const occupationDistributionData = [
    { name: 'ИТ', count: 300 },
    { name: 'Финансы', count: 200 },
    { name: 'Образование', count: 150 },
    { name: 'Здравоохранение', count: 120 },
    { name: 'Госслужба', count: 90 },
    { name: 'Производство', count: 80 },
    { name: 'Торговля', count: 100 },
    { name: 'Услуги', count: 110 },
    { name: 'Другое', count: 150 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Результаты исследования</h1>
          <p className="text-muted-foreground">
            Предварительный анализ данных опроса о доверии к технологиям ИИ и другим современным технологиям
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="ai_trust">Доверие к ИИ</TabsTrigger>
            <TabsTrigger value="demographics">Демография</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-3">
                  <CardHeader>
                    <CardTitle>Ключевые выводы</CardTitle>
                    <CardDescription>
                      Основные наблюдения на основе собранных данных
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Общий уровень доверия к ИИ</h3>
                        <p className="text-muted-foreground">
                          В целом, только 30% респондентов выразили положительное отношение к технологиям искусственного интеллекта. 
                          Большинство опрошенных (55%) занимают нейтральную или негативную позицию.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Факторы, влияющие на уровень доверия</h3>
                        <p className="text-muted-foreground">
                          Ключевые факторы, влияющие на уровень доверия: прозрачность работы систем ИИ, 
                          защита персональных данных и наличие понятных правил регулирования.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Различия между группами</h3>
                        <p className="text-muted-foreground">
                          Наблюдаются значительные различия в уровне доверия между возрастными группами 
                          и представителями разных профессиональных сфер. Респонденты из ИТ-сферы и молодое 
                          поколение демонстрируют более высокий уровень доверия к новым технологиям.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Доверие к ИИ</CardTitle>
                    <CardDescription>
                      Распределение уровня доверия к технологиям ИИ
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={aiTrustData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {aiTrustData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Доверие к биометрии</CardTitle>
                    <CardDescription>
                      Распределение уровня доверия к биометрической идентификации
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={biometricTrustData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {biometricTrustData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Доверие к беспилотникам</CardTitle>
                    <CardDescription>
                      Распределение уровня доверия к беспилотным транспортным средствам
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={autonomousVehiclesTrustData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {autonomousVehiclesTrustData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="ai_trust">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Сравнительный анализ доверия к различным технологиям</CardTitle>
                    <CardDescription>
                      Уровень доверия к различным типам современных технологий
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={[
                          { name: 'ИИ в целом', positive: 30, neutral: 30, negative: 40 },
                          { name: 'Чат-боты', positive: 45, neutral: 25, negative: 30 },
                          { name: 'Рекомендательные системы', positive: 55, neutral: 25, negative: 20 },
                          { name: 'ИИ в здравоохранении', positive: 40, neutral: 20, negative: 40 },
                          { name: 'ИИ в финансах', positive: 25, neutral: 25, negative: 50 }
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="positive" name="Положительное" fill="#00C49F" />
                        <Bar dataKey="neutral" name="Нейтральное" fill="#FFBB28" />
                        <Bar dataKey="negative" name="Отрицательное" fill="#FF8042" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Факторы, влияющие на доверие к ИИ</CardTitle>
                    <CardDescription>
                      Оценка значимости различных факторов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={[
                          { name: 'Прозрачность алгоритмов', score: 8.5 },
                          { name: 'Защита персональных данных', score: 9.2 },
                          { name: 'Понятные правила регулирования', score: 7.8 },
                          { name: 'Точность работы', score: 8.1 },
                          { name: 'Контроль человеком', score: 8.7 }
                        ]}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 10]} />
                        <YAxis dataKey="name" type="category" width={100} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#0088FE" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="demographics">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Распределение респондентов по возрасту</CardTitle>
                    <CardDescription>
                      Возрастная структура участников исследования
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={ageDistributionData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" name="Количество респондентов" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Распределение респондентов по сфере деятельности</CardTitle>
                    <CardDescription>
                      Профессиональная структура участников исследования
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={occupationDistributionData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="count" name="Количество респондентов" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Уровень доверия к ИИ по возрастным группам</CardTitle>
                    <CardDescription>
                      Распределение уровня доверия среди разных возрастных категорий
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart
                        data={[
                          { name: '18-24', positive: 60, neutral: 25, negative: 15 },
                          { name: '25-34', positive: 50, neutral: 30, negative: 20 },
                          { name: '35-44', positive: 40, neutral: 30, negative: 30 },
                          { name: '45-54', positive: 30, neutral: 35, negative: 35 },
                          { name: '55-64', positive: 20, neutral: 30, negative: 50 },
                          { name: '65+', positive: 15, neutral: 25, negative: 60 }
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="positive" name="Положительное" fill="#00C49F" />
                        <Bar dataKey="neutral" name="Нейтральное" fill="#FFBB28" />
                        <Bar dataKey="negative" name="Отрицательное" fill="#FF8042" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Results;
