import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed">
              En Jall AI, recopilamos información para proporcionar y mejorar nuestros servicios:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">Información de Cuenta</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Correo electrónico</li>
                  <li>Nombre de usuario</li>
                  <li>Contraseña (encriptada)</li>
                  <li>Historial de transacciones y puntos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Información de Uso</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Herramientas utilizadas y tiempo de uso</li>
                  <li>Dirección IP y datos de conexión</li>
                  <li>Tipo de dispositivo y navegador</li>
                  <li>Páginas visitadas y acciones realizadas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Contenido Generado</h3>
                <p className="text-muted-foreground">
                  Al usar cuentas compartidas, el contenido que genere puede ser temporalmente 
                  visible en los sistemas. No almacenamos ni analizamos su contenido de forma 
                  permanente, pero puede quedar en los registros de los proveedores (OpenAI, Google, etc.).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">2. Cómo Usamos su Información</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Proporcionar el servicio:</strong> Gestionar su cuenta, procesar pagos y dar acceso a las herramientas.</li>
              <li><strong>Comunicaciones:</strong> Enviar confirmaciones, actualizaciones de servicio y ofertas (puede desuscribirse).</li>
              <li><strong>Seguridad:</strong> Detectar fraude, abuso y proteger la plataforma.</li>
              <li><strong>Mejoras:</strong> Analizar patrones de uso para mejorar el servicio.</li>
              <li><strong>Cumplimiento legal:</strong> Responder a requerimientos legales válidos.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">3. Compartir Información</h2>
            <p className="text-muted-foreground leading-relaxed">
              No vendemos su información personal. Podemos compartirla con:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Proveedores de IA:</strong> OpenAI, Google y Eleven Labs reciben datos necesarios para procesar sus solicitudes.</li>
              <li><strong>Procesadores de pago:</strong> Para completar transacciones de forma segura.</li>
              <li><strong>Servicios de análisis:</strong> Google Analytics y similares (datos anonimizados).</li>
              <li><strong>Autoridades:</strong> Cuando sea legalmente requerido.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">4. Seguridad de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de seguridad estándar de la industria:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Encriptación SSL/TLS para todas las conexiones</li>
              <li>Contraseñas hasheadas con algoritmos seguros</li>
              <li>Acceso restringido a datos personales</li>
              <li>Monitoreo de actividad sospechosa</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Sin embargo, ningún sistema es 100% seguro. Use contraseñas únicas y fuertes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">5. Sus Derechos</h2>
            <p className="text-muted-foreground leading-relaxed">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales.</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta.</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de su cuenta y datos.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerse al procesamiento para marketing.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para ejercer estos derechos, contacte:{" "}
              <a href="mailto:privacidad@jallai.com" className="text-primary hover:underline">
                privacidad@jallai.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Usamos cookies esenciales para el funcionamiento del sitio y cookies de análisis 
              para entender cómo se usa la plataforma. Puede configurar su navegador para 
              rechazar cookies, aunque esto puede afectar la funcionalidad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">7. Retención de Datos</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Datos de cuenta:</strong> Mientras la cuenta esté activa + 2 años después de eliminación.</li>
              <li><strong>Transacciones:</strong> 5 años por requisitos fiscales.</li>
              <li><strong>Logs de uso:</strong> 90 días.</li>
              <li><strong>Contenido generado:</strong> No lo almacenamos permanentemente.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">8. Menores de Edad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro servicio no está dirigido a menores de 18 años. No recopilamos 
              intencionalmente información de menores. Si descubrimos que un menor ha 
              creado una cuenta, la eliminaremos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">9. Cambios a esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta política ocasionalmente. Notificaremos cambios 
              significativos por email. Le recomendamos revisar esta página periódicamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">10. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para preguntas sobre privacidad:{" "}
              <a href="mailto:privacidad@jallai.com" className="text-primary hover:underline">
                privacidad@jallai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
