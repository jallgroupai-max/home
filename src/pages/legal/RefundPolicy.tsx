import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2">Política de Reembolsos</h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">1. Política General</h2>
            <p className="text-muted-foreground leading-relaxed">
              En Jall AI nos esforzamos por ofrecer un servicio de calidad. Entendemos que 
              pueden surgir situaciones donde necesite un reembolso. Esta política describe 
              cuándo y cómo procesamos las solicitudes de reembolso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">2. Reembolsos Elegibles</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-medium text-accent">✓ Sí procesamos reembolsos cuando:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Falla técnica de nuestra parte:</strong> Si no puede acceder al servicio 
                  por más de 24 horas consecutivas debido a problemas de nuestra plataforma.
                </li>
                <li>
                  <strong>Cargo duplicado:</strong> Si se le cobró dos veces por la misma transacción.
                </li>
                <li>
                  <strong>Puntos no utilizados:</strong> Puntos comprados en los últimos 7 días que 
                  NO hayan sido activados ni utilizados.
                </li>
                <li>
                  <strong>Error en el monto:</strong> Si el monto cobrado difiere del precio mostrado.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">3. Reembolsos No Elegibles</h2>
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-medium text-destructive">✗ NO procesamos reembolsos cuando:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Tiempo ya activado:</strong> Una vez que activa el acceso a una herramienta, 
                  el tiempo comienza a correr inmediatamente.
                </li>
                <li>
                  <strong>Cambio de opinión:</strong> Si simplemente decidió que no quiere usar el servicio 
                  después de activarlo.
                </li>
                <li>
                  <strong>Problemas externos:</strong> Interrupciones de ChatGPT, Google AI u otros 
                  proveedores están fuera de nuestro control.
                </li>
                <li>
                  <strong>Violación de términos:</strong> Si su cuenta fue suspendida por violar 
                  nuestros términos de servicio.
                </li>
                <li>
                  <strong>Puntos promocionales:</strong> Los créditos gratuitos o de bienvenida no 
                  son reembolsables.
                </li>
                <li>
                  <strong>Solicitudes fuera de plazo:</strong> Más de 30 días desde la compra.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">4. Proceso de Solicitud</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Contacte a Soporte</h3>
                  <p className="text-muted-foreground">
                    Envíe un email a{" "}
                    <a href="mailto:reembolsos@jallai.com" className="text-primary hover:underline">
                      reembolsos@jallai.com
                    </a>{" "}
                    con el asunto "Solicitud de Reembolso".
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Proporcione Información</h3>
                  <p className="text-muted-foreground">
                    Incluya: email de su cuenta, fecha de la transacción, monto pagado, 
                    método de pago usado y motivo detallado de la solicitud.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Revisión</h3>
                  <p className="text-muted-foreground">
                    Revisaremos su solicitud en un plazo de 3-5 días hábiles y le 
                    notificaremos nuestra decisión.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Procesamiento</h3>
                  <p className="text-muted-foreground">
                    Si es aprobado, el reembolso se procesará al método de pago original 
                    en 5-10 días hábiles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">5. Métodos de Reembolso</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Pago Móvil / Transferencia:</strong> Reembolso a la misma cuenta bancaria 
                (puede tomar hasta 10 días hábiles).
              </li>
              <li>
                <strong>Tarjeta de crédito/débito:</strong> Reembolso a la tarjeta original 
                (puede tomar 1-2 ciclos de facturación).
              </li>
              <li>
                <strong>Criptomonedas:</strong> Reembolso en la misma criptomoneda al wallet 
                original (sujeto a fluctuaciones de precio).
              </li>
              <li>
                <strong>Crédito en cuenta:</strong> Opcionalmente, puede recibir el reembolso 
                como puntos adicionales en su cuenta (procesamiento inmediato).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">6. Compensación por Interrupciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si experimentamos interrupciones significativas del servicio (más de 4 horas), 
              automáticamente extendemos el tiempo de acceso afectado. No es necesario 
              solicitar esta compensación; se aplica automáticamente a todos los usuarios activos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">7. Disputas</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si no está de acuerdo con nuestra decisión sobre un reembolso, puede solicitar 
              una revisión adicional respondiendo al email de decisión. Un supervisor revisará 
              su caso en un plazo de 5 días hábiles adicionales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">8. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para solicitudes de reembolso o preguntas:{" "}
              <a href="mailto:reembolsos@jallai.com" className="text-primary hover:underline">
                reembolsos@jallai.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              WhatsApp:{" "}
              <a href="https://wa.me/+584121234567" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                +58 412-123-4567
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
