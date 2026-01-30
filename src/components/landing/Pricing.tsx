import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t, isVenezuela } = useLanguage();

  const plans = [
    {
      nameKey: "pricing.day",
      descKey: "pricing.dayDesc",
      prices: {
        chatgpt: "$0.3",
        ultra: "$1.4",
        elevenlabs: "$0.5",
      },
      popular: false,
    },
    {
      nameKey: "pricing.week",
      descKey: "pricing.weekDesc",
      prices: {
        chatgpt: "$1.8",
        ultra: "$8",
        elevenlabs: "$3",
      },
      popular: true,
    },
    {
      nameKey: "pricing.fortnight",
      descKey: "pricing.fortnightDesc",
      prices: {
        chatgpt: "$3.2",
        ultra: "$14",
        elevenlabs: "$5.5",
      },
      popular: false,
    },
    {
      nameKey: "pricing.month",
      descKey: "pricing.monthDesc",
      prices: {
        chatgpt: "$5.5",
        ultra: "$25",
        elevenlabs: "$10",
      },
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}{" "}
            <span className="text-accent glow-orange">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.nameKey}
              className={`relative bg-card border-border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary box-glow-green"
                  : "hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {t("pricing.mostPopular")}
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{t(plan.nameKey)}</CardTitle>
                <p className="text-muted-foreground text-sm">{t(plan.descKey)}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">ChatGPT Plus</span>
                    <span className="font-bold text-primary">
                      {plan.prices.chatgpt}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Google AI Ultra</span>
                    <span className="font-bold text-accent">
                      {plan.prices.ultra}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Eleven Labs</span>
                    <span className="font-bold text-primary">
                      {plan.prices.elevenlabs}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t("pricing.instantAccess")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{isVenezuela ? t("pricing.paymentBs") : t("pricing.paymentFlex")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t("pricing.whatsappSupport")}</span>
                  </div>
                </div>

                <Button
                  onClick={() => window.location.href = '/comprar'}
                  className={`w-full ${
                    plan.popular ? "box-glow-green" : ""
                  }`}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  {t("pricing.buy")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          {isVenezuela ? t("pricing.disclaimer") : t("pricing.disclaimerGlobal")}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
