import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary glow-green">
              Jall AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("precios")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t("nav.pricing")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t("nav.faq")}
            </button>
            
            {/* Language Selector - Subtle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 text-foreground/60 hover:text-primary transition-colors text-sm">
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{language}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("es")}
                  className={language === "es" ? "bg-primary/10 text-primary" : ""}
                >
                  🇪🇸 {t("language.spanish")}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-primary/10 text-primary" : ""}
                >
                  🇺🇸 {t("language.english")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              onClick={() => setLoginOpen(true)}
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              {t("nav.login")}
            </Button>
            <Button
              onClick={() => setRegisterOpen(true)}
              className="box-glow-green"
            >
              {t("nav.register")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("precios")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {t("nav.pricing")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {t("nav.faq")}
            </button>
            
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 py-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setLanguage("es")}
                className={`text-sm ${language === "es" ? "text-primary font-medium" : "text-muted-foreground"}`}
              >
                ES
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm ${language === "en" ? "text-primary font-medium" : "text-muted-foreground"}`}
              >
                EN
              </button>
            </div>

            <Button
              variant="outline"
              onClick={() => {
                setIsOpen(false);
                setLoginOpen(true);
              }}
              className="w-full border-primary/50 text-foreground hover:bg-primary/10 mb-2"
            >
              {t("nav.login")}
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                setRegisterOpen(true);
              }}
              className="w-full box-glow-green"
            >
              {t("nav.register")}
            </Button>
          </div>
        )}
      </div>

      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSwitchToRegister={() => setRegisterOpen(true)}
      />
      <RegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onSwitchToLogin={() => setLoginOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
