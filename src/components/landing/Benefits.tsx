import { Sparkles, Play, Mic, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t, isVenezuela } = useLanguage();

  const benefits = [
    {
      icon: Sparkles,
      titleKey: "benefits.chatgpt.title",
      descKey: "benefits.chatgpt.desc",
      color: "primary" as const,
    },
    {
      icon: Play,
      titleKey: "benefits.video.title",
      descKey: "benefits.video.desc",
      color: "accent" as const,
    },
    {
      icon: Mic,
      titleKey: "benefits.voice.title",
      descKey: "benefits.voice.desc",
      color: "primary" as const,
    },
    {
      icon: Wallet,
      titleKey: isVenezuela ? "benefits.payment.title" : "benefits.payment.titleGlobal",
      descKey: isVenezuela ? "benefits.payment.desc" : "benefits.payment.descGlobal",
      color: "accent" as const,
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("benefits.title")}{" "}
            <span className="text-primary glow-green">{t("benefits.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.titleKey}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    benefit.color === "primary"
                      ? "bg-primary/20"
                      : "bg-accent/20"
                  }`}
                >
                  <benefit.icon
                    className={`w-7 h-7 ${
                      benefit.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold">{t(benefit.titleKey)}</h3>
                <p className="text-muted-foreground">{t(benefit.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
