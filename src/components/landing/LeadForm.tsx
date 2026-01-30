import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    plan: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.plan) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa el email y selecciona un plan.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual database call when backend is enabled
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just log the data and show success
    console.log("Lead captured:", formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "¡Registro exitoso!",
      description: "Te contactaremos pronto por WhatsApp.",
    });
  };

  if (isSuccess) {
    return (
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-primary box-glow-green">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground">
                Te contactaremos pronto por WhatsApp para activar tu acceso.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ email: "", whatsapp: "", plan: "" });
                }}
              >
                Enviar otro registro
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-card/50">
      <div className="max-w-md mx-auto">
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              ¿Listo para{" "}
              <span className="text-primary glow-green">Empezar</span>?
            </CardTitle>
            <p className="text-muted-foreground">
              Déjanos tus datos y te contactamos por WhatsApp.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+58 412 1234567"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Plan de interés *</Label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) =>
                    setFormData({ ...formData, plan: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chatgpt-dia">ChatGPT Plus - Día</SelectItem>
                    <SelectItem value="chatgpt-semana">ChatGPT Plus - Semana</SelectItem>
                    <SelectItem value="chatgpt-quincena">ChatGPT Plus - Quincena</SelectItem>
                    <SelectItem value="chatgpt-mes">ChatGPT Plus - Mes</SelectItem>
                    <SelectItem value="ultra-dia">Google AI Ultra - Día</SelectItem>
                    <SelectItem value="ultra-semana">Google AI Ultra - Semana</SelectItem>
                    <SelectItem value="elevenlabs">Eleven Labs - Créditos</SelectItem>
                    <SelectItem value="suite-completa">Suite Completa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full box-glow-green"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Quiero Empezar
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
