import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowLeft, Wallet, Gift, CheckCircle, Sparkles, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Comprar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showRechargeDialog, setShowRechargeDialog] = useState(false);
  const [hasAccount, setHasAccount] = useState<boolean | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: isLogin ? "¡Bienvenido de vuelta!" : "¡Cuenta creada!",
      description: isLogin 
        ? "Redirigiendo a tu panel de recarga..." 
        : "Verifica tu email para recibir $1.5 gratis. Redirigiendo...",
    });

    // Simulate redirect
    setTimeout(() => {
      setShowRechargeDialog(false);
      setHasAccount(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Button>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo funciona{" "}
            <span className="text-primary glow-green">Jall AI</span>?
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accede a las mejores herramientas de IA de forma simple y económica.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">1. Recarga tu cuenta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mínimo <span className="text-primary font-bold">$2</span> para empezar. 
                Paga con tu método de pago favorito.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl">2. Elige tu herramienta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                ChatGPT Plus, Google AI Ultra, Eleven Labs... 
                Alquila solo lo que necesitas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">3. ¡Crea sin límites!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Acceso inmediato a tu herramienta. 
                Sin tarjeta de crédito internacional.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bonus Card */}
        <Card className="bg-primary/10 border-primary/30 mb-12">
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">¡$1.5 GRATIS!</h3>
                <p className="text-muted-foreground">
                  Regístrate y verifica tu email para recibir saldo de prueba.
                </p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="box-glow-green whitespace-nowrap"
              onClick={() => setShowRechargeDialog(true)}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Recargar Ahora
            </Button>
          </CardContent>
        </Card>

        {/* Pricing reminder */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Precios por día</CardTitle>
            <CardDescription>Alquila solo lo que necesitas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span>ChatGPT Plus</span>
                <span className="font-bold text-primary">$0.3</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span>Google AI Ultra</span>
                <span className="font-bold text-accent">$1.4</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span>Eleven Labs</span>
                <span className="font-bold text-primary">$0.5</span>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              También disponible: <span className="text-accent font-medium">Pack Creador</span> - Veo 3 + Google AI Ultra + ChatGPT Plus por solo <span className="text-primary font-bold">$1.5/día</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recharge Dialog */}
      <Dialog open={showRechargeDialog} onOpenChange={setShowRechargeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {hasAccount === null 
                ? "¿Ya tienes cuenta?" 
                : isLogin 
                  ? "Iniciar Sesión" 
                  : "Crear Cuenta"}
            </DialogTitle>
            <DialogDescription>
              {hasAccount === null 
                ? "Para acreditar tu recarga necesitamos saber si ya estás registrado."
                : isLogin
                  ? "Ingresa tus credenciales para continuar"
                  : "Crea tu cuenta y recibe $1.5 gratis al verificar tu email"}
            </DialogDescription>
          </DialogHeader>

          {hasAccount === null ? (
            <div className="flex flex-col gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  setHasAccount(true);
                  setIsLogin(true);
                }}
                className="box-glow-green"
              >
                Sí, tengo cuenta
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  setHasAccount(false);
                  setIsLogin(false);
                }}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                No, quiero registrarme
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full box-glow-green">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full"
                onClick={() => {
                  setHasAccount(null);
                  setFormData({ email: "", password: "", confirmPassword: "" });
                }}
              >
                Volver
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Comprar;
