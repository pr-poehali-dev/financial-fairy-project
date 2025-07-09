import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [deposit, setDeposit] = useState(1000);
  const [months, setMonths] = useState(12);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const passiveIncome = deposit * 0.25 * months;
  const activeIncome = deposit * 0.45 * months;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Оксана свяжется с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="w-6 h-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-secondary">
                Финансовая фея
              </h1>
            </div>
            <Button
              variant="outline"
              className="border-amber-300 text-secondary hover:bg-amber-50"
            >
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                💰 Арбитражный эксперт
              </Badge>
              <h2 className="text-5xl font-bold text-secondary leading-tight">
                Финансовая фея
              </h2>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-amber-200">
                <h3 className="text-2xl font-semibold text-secondary mb-4">
                  ПОЗВОЛЬТЕ ПРЕДСТАВИТЬСЯ
                </h3>
                <h4 className="text-3xl font-bold text-primary mb-4">
                  ОКСАНА ДЕРЖАВИНА
                </h4>
                <p className="text-lg text-secondary/80 mb-4">
                  Крипто-инвестор, арбитражник и предприниматель
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Clock" className="w-5 h-5 text-amber-600" />
                  <span className="text-secondary">
                    9 лет в сфере арбитража
                  </span>
                </div>
                <p className="text-secondary leading-relaxed">
                  Я создала этот мини-сайт, чтобы вы разобрались в арбитраже и
                  составили свой личный план по доходу от{" "}
                  <span className="font-bold text-primary">2000$-4000$</span> в
                  месяц.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/img/7433a222-33d9-46e7-86e9-3aa53fb31cbd.jpg"
                alt="Оксана Державина"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Что вам больше подходит?
            </h2>
            <p className="text-xl text-secondary/80">
              Выберите свой путь к финансовой независимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Passive Income */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Icon
                      name="TrendingUp"
                      className="w-6 h-6 text-amber-600"
                    />
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    20-30% в месяц
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-secondary">
                  Пассивный доход
                </CardTitle>
                <CardDescription className="text-base">
                  Стабильные инвестиции в надежные проекты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80 mb-6 leading-relaxed">
                  Поймёте, как вкладывать деньги в надёжные арбитражные проекты,
                  чтобы создать капитал на будущее, приумножить деньги и
                  получать пассивный доход 20-30% в долларах.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-secondary">Надёжность</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-secondary">
                    Узнать больше
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Active Income */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Icon name="Zap" className="w-6 h-6 text-amber-600" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    40-50% в месяц
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-secondary">
                  Активный доход
                </CardTitle>
                <CardDescription className="text-base">
                  Уникальная торговая стратегия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80 mb-6 leading-relaxed">
                  Покажу вам нашу стратегию заработка арбитражем, чтобы делать
                  40-50% к депозиту ежемесячно по уникальной торговой стратегии.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-secondary">
                      Высокий доход
                    </span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-secondary">
                    Начать сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Калькулятор доходности
            </h2>
            <p className="text-xl text-secondary/80">
              Рассчитайте свой потенциальный доход
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-secondary">
                  Ваш будущий доход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label
                        htmlFor="deposit"
                        className="text-secondary font-medium"
                      >
                        Начальный депозит ($)
                      </Label>
                      <Input
                        id="deposit"
                        type="number"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="mt-2"
                        min="100"
                        step="100"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="months"
                        className="text-secondary font-medium"
                      >
                        Период (месяцев)
                      </Label>
                      <Input
                        id="months"
                        type="number"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="mt-2"
                        min="1"
                        max="60"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon
                          name="TrendingUp"
                          className="w-5 h-5 text-green-600"
                        />
                        <span className="font-semibold text-green-800">
                          Пассивный доход
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">
                        ${passiveIncome.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-600">
                        за {months} месяцев (25% в месяц)
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Zap" className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">
                          Активный доход
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">
                        ${activeIncome.toLocaleString()}
                      </p>
                      <p className="text-sm text-blue-600">
                        за {months} месяцев (45% в месяц)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Получить консультацию
            </h2>
            <p className="text-xl text-secondary/80">
              Свяжитесь с Оксаной для персональной консультации
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-secondary">
                  Заявка на консультацию
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-secondary font-medium"
                    >
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-secondary font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-secondary font-medium"
                    >
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2"
                      rows={4}
                      placeholder="Расскажите о своих целях и вопросах..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-secondary py-3 text-lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Sparkles" className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold">Финансовая фея</h3>
            </div>
            <p className="text-white/80">
              Ваш путь к финансовой независимости начинается здесь
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
