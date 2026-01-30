import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2">Términos de Servicio</h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al acceder y utilizar los servicios de Jall AI ("nosotros", "nuestro" o "la Plataforma"), 
              usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna 
              parte de estos términos, no podrá acceder al servicio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">2. Descripción del Servicio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Jall AI proporciona acceso a herramientas de inteligencia artificial de terceros, 
              incluyendo pero no limitado a ChatGPT, Google AI Ultra y Eleven Labs, mediante un 
              sistema de alquiler por tiempo. El acceso se realiza a través de cuentas compartidas 
              optimizadas para ofrecer precios accesibles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">3. Registro y Cuenta</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Debe proporcionar información precisa y completa durante el registro.</li>
              <li>Es responsable de mantener la confidencialidad de su cuenta y contraseña.</li>
              <li>Debe tener al menos 18 años o contar con el consentimiento de un tutor legal.</li>
              <li>Una cuenta por persona. Las cuentas múltiples pueden ser suspendidas.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">4. Uso Aceptable</h2>
            <p className="text-muted-foreground leading-relaxed">Al usar nuestros servicios, usted acepta NO:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Generar contenido ilegal, difamatorio, obsceno o que viole derechos de terceros.</li>
              <li>Usar las herramientas para crear malware, spam o contenido fraudulento.</li>
              <li>Intentar acceder a cuentas de otros usuarios o sistemas no autorizados.</li>
              <li>Revender, sublicenciar o compartir su acceso con terceros.</li>
              <li>Usar automatización o bots para acceder al servicio.</li>
              <li>Generar contenido que promueva violencia, discriminación o actividades ilegales.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">5. Sistema de Puntos y Pagos</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Los puntos adquiridos no son reembolsables una vez utilizados.</li>
              <li>El tiempo de acceso comienza inmediatamente después de la activación.</li>
              <li>Los precios pueden cambiar con previo aviso de 30 días.</li>
              <li>Los puntos promocionales tienen fecha de vencimiento y no son transferibles.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">6. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              El contenido que usted genera utilizando las herramientas de IA le pertenece, sujeto a 
              los términos de los proveedores originales (OpenAI, Google, Eleven Labs). Jall AI no 
              reclama propiedad sobre su contenido generado. Sin embargo, al usar cuentas compartidas, 
              su contenido puede ser visible temporalmente para nuestro equipo de soporte.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">7. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Jall AI se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos 
              responsables por: interrupciones del servicio de terceros, pérdida de datos o contenido, 
              resultados de las herramientas de IA, o daños indirectos derivados del uso del servicio. 
              Nuestra responsabilidad máxima se limita al monto pagado en los últimos 30 días.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">8. Suspensión y Terminación</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de suspender o terminar su cuenta sin previo aviso si 
              viola estos términos. En caso de terminación por incumplimiento, no habrá reembolso 
              de puntos no utilizados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">9. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos modificar estos términos en cualquier momento. Los cambios significativos 
              serán notificados por email con al menos 15 días de anticipación. El uso continuado 
              del servicio después de los cambios constituye su aceptación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">10. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para preguntas sobre estos términos, contáctenos en:{" "}
              <a href="mailto:legal@jallai.com" className="text-primary hover:underline">
                legal@jallai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
