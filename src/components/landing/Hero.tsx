import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, Mic, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import RegisterDialog from "./RegisterDialog";
import LoginDialog from "./LoginDialog";

const Hero = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { t, isVenezuela } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 md:pt-20 pb-8 md:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs text-primary">{t("hero.badge.noCard")}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs text-accent">{t("hero.badge.noVpn")}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {t("hero.title")}{" "}
              <span className="text-primary glow-green">{t("hero.pricePerDay")}</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              {t("hero.subtitle")}{" "}
              <span className="text-accent">{isVenezuela ? t("hero.payInBs") : t("hero.payInUsd")}</span> {t("hero.createVideos")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => setRegisterOpen(true)}
                className="text-base md:text-lg px-6 md:px-8 box-glow-green"
              >
                {t("hero.registerFree")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("precios")}
                className="text-base md:text-lg px-6 md:px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                {t("hero.seePricing")}
              </Button>
            </div>
            
            {/* Trust badges - inline on mobile */}
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs md:text-sm">{t("hero.activeCreators")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs md:text-sm">{isVenezuela ? t("hero.paymentBs") : t("hero.paymentFlex")}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-card rounded-xl md:rounded-2xl border border-border p-3 md:p-6 box-glow-green">
              {/* Mockup Header */}
              <div className="flex items-center gap-1.5 mb-3 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-destructive" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary" />
              </div>
              
              {/* Mockup Content - Vertical stack */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-2.5 md:p-4 bg-secondary rounded-lg">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm md:text-base">ChatGPT Plus</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{t("hero.mockup.active")} • $0.3/día</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 p-2.5 md:p-4 bg-secondary rounded-lg">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Play className="w-4 h-4 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm md:text-base">Google AI Ultra</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{t("hero.mockup.viralVideos")} • $1.4/día</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 p-2.5 md:p-4 bg-secondary rounded-lg">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Mic className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm md:text-base">Eleven Labs</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{t("hero.mockup.proVoices")}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 p-2.5 md:p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-primary text-sm md:text-base">{isVenezuela ? t("hero.mockup.paymentBs") : t("hero.mockup.paymentFlex")}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{isVenezuela ? t("hero.mockup.noIntCard") : t("hero.mockup.payAsYouGo")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium box-glow-orange">
              {t("hero.limitedOffer")}
            </div>
          </div>
        </div>
      </div>

      <RegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onSwitchToLogin={() => setLoginOpen(true)}
      />
      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSwitchToRegister={() => setRegisterOpen(true)}
      />
    </section>
  );
};

export default Hero;
