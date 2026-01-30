import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "María González",
      roleKey: "testimonials.role.creator",
      avatar: "MG",
      quoteKey: "testimonials.quote1",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      roleKey: "testimonials.role.entrepreneur",
      avatar: "CR",
      quoteKey: "testimonials.quote2",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      roleKey: "testimonials.role.cm",
      avatar: "AM",
      quoteKey: "testimonials.quote3",
      rating: 5,
    },
    {
      name: "Luis Pérez",
      roleKey: "testimonials.role.youtuber",
      avatar: "LP",
      quoteKey: "testimonials.quote4",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}{" "}
            <span className="text-primary glow-green">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(testimonial.roleKey)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{t(testimonial.quoteKey)}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
