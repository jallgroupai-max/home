import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isVenezuela: boolean;
  countryCode: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Spanish-speaking countries
const SPANISH_SPEAKING_COUNTRIES = [
  "VE", "ES", "MX", "AR", "CO", "PE", "CL", "EC", "GT", "CU", 
  "BO", "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ"
];

export const translations = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.pricing": "Precios",
    "nav.faq": "FAQ",
    "nav.login": "Iniciar Sesión",
    "nav.register": "Registrarme",

    // Hero
    "hero.badge.noCard": "Sin tarjeta de crédito",
    "hero.badge.noVpn": "Sin VPN para ChatGPT",
    "hero.title": "Suite Creativa Completa desde",
    "hero.pricePerDay": "$0.3/día",
    "hero.subtitle": "ChatGPT Plus + Google AI Ultra + Eleven Labs.",
    "hero.payInBs": "Paga en Bs.",
    "hero.payInUsd": "Paga por lo que consumes.",
    "hero.createVideos": "y crea videos virales hoy.",
    "hero.registerFree": "Registrarme Gratis",
    "hero.seePricing": "Ver Precios",
    "hero.activeCreators": "+500 creadores activos",
    "hero.paymentBs": "Pago en bolívares",
    "hero.paymentFlex": "Pago flexible",
    "hero.limitedOffer": "Oferta Limitada",
    "hero.mockup.active": "Activo",
    "hero.mockup.viralVideos": "Videos Virales",
    "hero.mockup.proVoices": "Voces Pro • Créditos",
    "hero.mockup.paymentBs": "Pago en Bolívares",
    "hero.mockup.paymentFlex": "Pago Flexible",
    "hero.mockup.noIntCard": "Sin tarjeta internacional",
    "hero.mockup.payAsYouGo": "Paga por lo que usas",

    // Problem Solution
    "problem.title": "¿Cansado de las",
    "problem.titleHighlight": "Suscripciones Costosas",
    "problem.subtitle": "Olvídate de gastar fortunas en herramientas de IA. Con Jall AI, alquilas por uso y pagas en bolívares locales.",
    "problem.theProblem": "El Problema",
    "problem.item1": "ChatGPT Plus cuesta $20/mes completos",
    "problem.item2": "Necesitas tarjeta de crédito internacional",
    "problem.item3": "Pagas aunque no uses todo el mes",
    "problem.item4": "Cada herramienta requiere suscripción separada",
    "solution.theSolution": "La Solución Jall AI",
    "solution.item1": "Desde",
    "solution.item1Price": "$0.3/día",
    "solution.item1Suffix": "- paga lo que uses",
    "solution.item2": "Pago directo en",
    "solution.item2Highlight": "bolívares",
    "solution.item2Global": "Múltiples métodos de pago",
    "solution.item2GlobalHighlight": "disponibles",
    "solution.item3": "Sin compromisos mensuales",
    "solution.item4": "Suite completa: ChatGPT + Video + Audio",

    // Benefits
    "benefits.title": "Todo lo que Necesitas para",
    "benefits.titleHighlight": "Crear",
    "benefits.subtitle": "Una suite completa de herramientas de IA para creadores de contenido.",
    "benefits.chatgpt.title": "Acceso Ilimitado ChatGPT",
    "benefits.chatgpt.desc": "GPT-4 completo sin límites. Crea contenido, código, estrategias de marketing y más.",
    "benefits.video.title": "Videos Virales con Google AI",
    "benefits.video.desc": "Genera videos increíbles con Google AI Ultra. Perfectos para TikTok, Reels e historias.",
    "benefits.voice.title": "Voces Pro con Eleven Labs",
    "benefits.voice.desc": "Voces realistas en español para tus videos. Narración profesional en segundos.",
    "benefits.payment.title": "Pagos Simples en Bs.",
    "benefits.payment.titleGlobal": "Pagos Simples",
    "benefits.payment.desc": "Sin tarjeta internacional. Paga cómodo en bolívares por transferencia o pago móvil.",
    "benefits.payment.descGlobal": "Múltiples métodos de pago: Binance Pay, criptomonedas y tarjetas de crédito/débito.",

    // Pricing
    "pricing.title": "Precios",
    "pricing.titleHighlight": "Transparentes",
    "pricing.subtitle": "Elige el período que necesites. Sin letras pequeñas. Pago en Bs.",
    "pricing.day": "Día",
    "pricing.week": "Semana",
    "pricing.fortnight": "Quincena",
    "pricing.month": "Mes",
    "pricing.dayDesc": "Prueba rápida",
    "pricing.weekDesc": "Mejor valor",
    "pricing.fortnightDesc": "Proyecto extendido",
    "pricing.monthDesc": "Creador serio",
    "pricing.mostPopular": "Más Popular",
    "pricing.instantAccess": "Acceso inmediato",
    "pricing.paymentBs": "Pago en bolívares",
    "pricing.paymentFlex": "Pago flexible",
    "pricing.whatsappSupport": "Soporte WhatsApp",
    "pricing.buy": "Comprar",
    "pricing.disclaimer": "* Precios en USD. Te indicamos el equivalente en Bs. al momento de pagar.",
    "pricing.disclaimerGlobal": "* Precios en USD. Paga solo por lo que consumes.",

    // Testimonials
    "testimonials.title": "Lo que Dicen Nuestros",
    "testimonials.titleHighlight": "Creadores",
    "testimonials.subtitle": "Únete a cientos de creadores que ya están usando Jall AI.",
    "testimonials.role.creator": "Creadora de Contenido",
    "testimonials.role.entrepreneur": "Emprendedor Digital",
    "testimonials.role.cm": "Community Manager",
    "testimonials.role.youtuber": "YouTuber",
    "testimonials.quote1": "¡Videos virales sin gastar fortunas! Con Jall AI pude hacer crecer mi TikTok de 500 a 50K seguidores en 2 meses.",
    "testimonials.quote2": "El pago en bolívares fue lo que me convenció. Sin complicaciones con tarjetas internacionales. ChatGPT cuando lo necesito.",
    "testimonials.quote3": "Las voces de Eleven Labs son increíbles. Mis clientes no pueden creer que no contrato locutores profesionales.",
    "testimonials.quote4": "Google AI Ultra cambió mi juego. Videos de calidad profesional desde mi teléfono. El precio por día es ridículamente bajo.",

    // FAQ
    "faq.title": "Preguntas",
    "faq.titleHighlight": "Frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber antes de empezar.",
    "faq.q1": "¿Cómo funciona Jall AI?",
    "faq.a1": "Es muy simple: recargas saldo en tu cuenta y alquilas las herramientas que necesites. Usamos un sistema de puntos donde 100 puntos = $1 USD (por ejemplo, ChatGPT Plus diario cuesta 30 puntos). ¡Al registrarte y verificar tu email, recibes $1.5 gratis para probar! En la plataforma verás todo en puntos, pero aquí te mostramos precios en USD para mayor claridad.",
    "faq.q2": "¿Cómo puedo pagar?",
    "faq.a2": "Aceptamos Pago Móvil, transferencia bancaria, tarjeta de crédito/débito, Criptomonedas y Binance Pay. El monto mínimo de recarga es $2 (200 puntos). ¡No necesitas tarjeta internacional, pero si la tienes también funciona! Pronto integraremos métodos de pago de otros países.",
    "faq.a2.global": "Aceptamos tarjeta de crédito/débito, Criptomonedas y Binance Pay. El monto mínimo de recarga es $2 (200 puntos). Pronto integraremos más métodos de pago.",
    "faq.q3": "¿Qué incluye cada plan?",
    "faq.a3": "ChatGPT Plus: Acceso completo a GPT-4o, generación de imágenes ilimitadas, análisis de documentos, código avanzado y plugins. Google AI Ultra: Veo 3 para videos virales + Nano Banana Pro ilimitado para imágenes de alta calidad. Eleven Labs: Voces profesionales con clonación de voz, perfectas para videos, podcasts y contenido. El tiempo que compres es tuyo las 24 horas.",
    "faq.q4": "¿Qué pasa si no uso todo el tiempo que compré?",
    "faq.a4": "El tiempo que compras es válido por el período seleccionado (día, semana, quincena o mes). Te recomendamos elegir el período que mejor se ajuste a tu uso real. Puedes empezar con un día para probar.",
    "faq.q5": "¿Cómo accedo a las herramientas después de pagar?",
    "faq.a5": "¡Todo se hace internamente en nuestra plataforma! No necesitas VPN, correos adicionales ni claves complejas. Solo tu acceso a Jall AI y las ideas para crear. Así de simple.",
    "faq.q6": "¿Las cuentas son compartidas? ¿Qué pasa con mi privacidad?",
    "faq.a6": "Sí, las herramientas funcionan con cuentas compartidas, lo que nos permite ofrecerte precios tan accesibles. Sin embargo, valoramos mucho tu privacidad y trabajamos constantemente para proteger tus creaciones. Tu contenido es tuyo y nos comprometemos a respetar la confidencialidad de tu trabajo.",

    // Footer
    "footer.description": "Suite creativa completa para creadores. Accede a las mejores herramientas de IA pagando en bolívares.",
    "footer.descriptionGlobal": "Suite creativa completa para creadores. Accede a las mejores herramientas de IA con pagos flexibles.",
    "footer.legal": "Legal",
    "footer.terms": "Términos de Servicio",
    "footer.privacy": "Política de Privacidad",
    "footer.refunds": "Política de Reembolsos",
    "footer.contact": "Contacto",
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",

    // Login Dialog
    "login.title": "Iniciar Sesión",
    "login.subtitle": "Accede a tu cuenta de Jall AI",
    "login.email": "Correo electrónico",
    "login.password": "Contraseña",
    "login.submit": "Ingresar",
    "login.loading": "Ingresando...",
    "login.noAccount": "¿No tienes cuenta?",
    "login.registerHere": "Regístrate aquí",
    "login.demo": "Demo:",
    "login.error.required": "Campos requeridos",
    "login.error.requiredDesc": "Por favor completa todos los campos.",
    "login.error.invalid": "Credenciales incorrectas",
    "login.error.invalidDesc": "El correo o la contraseña no son válidos.",
    "login.success": "¡Bienvenido!",
    "login.successDesc": "Has iniciado sesión correctamente.",

    // Register Dialog
    "register.title": "Crear Cuenta",
    "register.subtitle": "Únete a Jall AI y comienza a crear",
    "register.username": "Nombre de usuario",
    "register.email": "Correo electrónico",
    "register.password": "Contraseña",
    "register.submit": "Registrarme",
    "register.loading": "Registrando...",
    "register.hasAccount": "¿Ya tienes cuenta?",
    "register.loginHere": "Inicia sesión",
    "register.error.required": "Campos requeridos",
    "register.error.requiredDesc": "Por favor completa todos los campos.",
    "register.error.unavailable": "Sistema no disponible",
    "register.error.unavailableDesc": "El registro está temporalmente deshabilitado. Intenta más tarde.",

    // Dashboard
    "dashboard.welcome": "Bienvenido a Jall AI",
    "dashboard.selectTool": "Selecciona una herramienta del menú para comenzar",
    "dashboard.home": "Inicio",
    "dashboard.points": "Puntos",
    "dashboard.rechargePoints": "Recargar Puntos",
    "dashboard.suggestChanges": "Sugerir cambios",
    "dashboard.membershipActive": "☑️ Membresía Activa",
    "dashboard.timeRemaining": "Tiempo restante:",
    "dashboard.fullAccess": "Tienes acceso completo a ChatGPT Plus. Haz clic en el botón para comenzar a usar la herramienta.",
    "dashboard.openChatGPT": "Abrir ChatGPT Plus",
    "dashboard.comingSoon": "🚀 Próximamente",
    "dashboard.elevenLabsDesc": "Estamos trabajando para traerte acceso a Eleven Labs muy pronto. Podrás generar voces realistas con inteligencia artificial.",
    "dashboard.aiultraDesc": "Estamos trabajando para traerte acceso a Google AI Ultra muy pronto. Podrás generar voces realistas con inteligencia artificial.",
    "dashboard.backHome": "Volver al Inicio",
    "dashboard.noAccess": "Sin acceso a",
    "dashboard.noAccessDesc": "No tienes puntos suficientes para acceder a esta herramienta. Por favor recarga tu cuenta para continuar.",
    "dashboard.rechargeNow": "Recargar Ahora",
    "dashboard.expired": "Expirado",
    "dashboard.activateAccess": "¿Activar acceso de 24h por $0.30?",
    "dashboard.activatePlan": "Activar Plan",
    "dashboard.activating": "Activando...",
    "dashboard.rechargeToActivate": "Recarga para activar",

    // Account Menu
    "account.title": "Cuenta",
    "account.myAccount": "Mi Cuenta",
    "account.profile": "Perfil",
    "account.changePassword": "Cambiar Contraseña",
    "account.language": "Idioma",
    "account.logout": "Cerrar Sesión",
    "account.myProfile": "Mi Perfil",
    "account.accountInfo": "Información de tu cuenta",
    "account.email": "Email",
    "account.username": "Nombre de Usuario",
    "account.phone": "Número de Teléfono",
    "account.phoneBonus": "¡Verifica tu número de teléfono y recibe",
    "account.phoneBonusPoints": "$2 en puntos",
    "account.phoneBonusEnd": "adicionales!",
    "account.noPhone": "Aún no has agregado tu teléfono",
    "account.addPhone": "Añadir",
    "account.memberSince": "Miembro desde",
    "account.checking": "Verificando...",
    "account.minChars": "Mínimo 3 caracteres",
    "account.available": "✓ Disponible",
    "account.notAvailable": "✗ No disponible",
    "account.passwordTitle": "Cambiar Contraseña",
    "account.passwordSubtitle": "Ingresa tu nueva contraseña",
    "account.currentPassword": "Contraseña Actual",
    "account.newPassword": "Nueva Contraseña",
    "account.confirmPassword": "Confirmar Nueva Contraseña",
    "account.saveChanges": "Guardar Cambios",
    "account.passwordError": "Sistema no disponible temporalmente. Intente más tarde.",
    "account.phoneSaved": "Teléfono guardado",
    "account.phoneSavedDesc": "Te enviaremos un código de verificación pronto.",
    "account.usernameUpdated": "Usuario actualizado",
    "account.usernameUpdatedDesc": "Tu nuevo nombre de usuario es",

    // Recharge Dialog
    "recharge.methodTitle": "Método de Recarga",
    "recharge.methodDesc": "Selecciona cómo deseas realizar tu recarga",
    "recharge.amountTitle": "Monto a Recargar",
    "recharge.amountDesc": "Ingresa el monto que deseas recargar (mínimo $2 USD)",
    "recharge.paymentTitle": "Datos de Pago",
    "recharge.paymentDesc": "Realiza el pago y sube tu comprobante",
    "recharge.confirmTitle": "Confirmar Recarga",
    "recharge.confirmDesc": "Revisa los detalles de tu recarga",
    "recharge.pagoMovil": "Pago Móvil",
    "recharge.pagoMovilDesc": "Transferencia bancaria Venezuela",
    "recharge.binance": "Binance Pay",
    "recharge.binanceDesc": "Pago con USDT",
    "recharge.crypto": "Criptomonedas",
    "recharge.cryptoDesc": "BTC, ETH, USDT",
    "recharge.card": "Tarjeta",
    "recharge.cardDesc": "Visa, Mastercard",
    "recharge.amountUsd": "Monto en USD",
    "recharge.minAmount": "El monto mínimo es $2 USD",
    "recharge.youWillReceive": "Recibirás:",
    "recharge.pagoMovilData": "Datos de Pago Móvil",
    "recharge.bank": "Banco:",
    "recharge.phone": "Teléfono:",
    "recharge.id": "Cédula:",
    "recharge.holder": "Titular:",
    "recharge.amountToPay": "Monto a pagar:",
    "recharge.rate": "Tasa:",
    "recharge.dataViaSocial": "Los datos de pago para",
    "recharge.willBeSent": "serán enviados por WhatsApp.",
    "recharge.reference": "Número de Referencia",
    "recharge.uploadProof": "Cargar Comprobante de Pago",
    "recharge.proofUploaded": "Comprobante Cargado ✓",
    "recharge.reportWhatsApp": "Reportar pago vía WhatsApp",
    "recharge.almostDone": "¡Casi listo!",
    "recharge.reviewData": "Revisa que los datos sean correctos",
    "recharge.method": "Método:",
    "recharge.amountUsdLabel": "Monto USD:",
    "recharge.amountBsLabel": "Monto Bs:",
    "recharge.pointsReceive": "Puntos a recibir:",
    "recharge.referenceLabel": "Referencia:",
    "recharge.back": "Atrás",
    "recharge.next": "Siguiente",
    "recharge.confirmRecharge": "Confirmar Recarga",
    "recharge.proofReceived": "Comprobante cargado",
    "recharge.proofReceivedDesc": "Tu comprobante ha sido recibido. Procesaremos tu pago pronto.",
    "recharge.cardMaintenanceTitle": "Pago con Tarjeta",
    "recharge.cardMaintenanceDesc": "Información sobre pagos con tarjeta",
    "recharge.cardMaintenanceHeading": "Servicio en Mantenimiento",
    "recharge.cardMaintenanceMessage": "Estamos mejorando nuestro sistema de pagos con tarjeta para brindarte una experiencia más segura y rápida.",
    "recharge.stripeComingSoon": "Próximamente: Pago Seguro con Stripe",
    "recharge.stripeDescription": "Pronto podrás pagar de forma segura con tu tarjeta de crédito o débito a través de Stripe, el procesador de pagos más confiable del mundo.",
    "recharge.inProgress": "¡Recarga en proceso!",
    "recharge.inProgressDesc": "Recibirás tus puntos una vez verifiquemos el pago.",

    // Feedback Dialog
    "feedback.typeTitle": "Sugerir Cambios",
    "feedback.typeDesc": "Tu opinión nos ayuda a construir un mejor producto",
    "feedback.questionTitle": "Pregunta",
    "feedback.of": "de",
    "feedback.toolTitle": "Sugerir Herramienta",
    "feedback.toolDesc": "¿Qué herramienta de IA te gustaría ver en Jall AI?",
    "feedback.thanksTitle": "¡Gracias!",
    "feedback.thanksDesc": "Hemos recibido tu feedback",
    "feedback.giveFeedback": "Dar Feedback",
    "feedback.giveFeedbackDesc": "Responde unas preguntas rápidas sobre tu experiencia",
    "feedback.suggestTool": "Sugerir Herramienta",
    "feedback.suggestToolDesc": "Propón una herramienta de IA que te gustaría usar",
    "feedback.toolExamples": "Ejemplos: Midjourney, Runway, Suno AI, Claude, Perplexity, Leonardo AI...",
    "feedback.toolName": "Nombre de la herramienta",
    "feedback.toolReason": "¿Por qué te gustaría usarla? (opcional)",
    "feedback.toolReasonPlaceholder": "Cuéntanos para qué la usarías...",
    "feedback.received": "¡Feedback recibido!",
    "feedback.receivedDesc": "Tu opinión es muy valiosa para nosotros. Usaremos esta información para mejorar Jall AI.",
    "feedback.additionalComments": "¿Algún comentario adicional? (opcional)",
    "feedback.commentsPlaceholder": "Cuéntanos qué podemos mejorar...",
    "feedback.back": "Atrás",
    "feedback.next": "Siguiente",
    "feedback.send": "Enviar",
    "feedback.sendSuggestion": "Enviar Sugerencia",
    "feedback.close": "Cerrar",
    "feedback.toast": "¡Gracias por tu feedback!",
    "feedback.toastDesc": "Tu opinión nos ayuda a mejorar Jall AI.",
    "feedback.q1": "¿Con qué frecuencia usas herramientas de IA para crear contenido?",
    "feedback.q1.daily": "Todos los días",
    "feedback.q1.weekly": "Varias veces por semana",
    "feedback.q1.monthly": "Algunas veces al mes",
    "feedback.q1.rarely": "Rara vez",
    "feedback.q2": "¿Cuál es el mayor problema que enfrentas al usar IA para crear contenido?",
    "feedback.q2.cost": "El costo de las suscripciones",
    "feedback.q2.access": "Dificultad para acceder (VPN, pagos internacionales)",
    "feedback.q2.learning": "Curva de aprendizaje",
    "feedback.q2.quality": "Resultados no satisfactorios",
    "feedback.q3": "¿Qué es lo que más valoras de Jall AI?",
    "feedback.q3.price": "El precio accesible",
    "feedback.q3.payment": "Poder pagar en bolívares",
    "feedback.q3.variety": "Tener varias herramientas en un solo lugar",
    "feedback.q3.simplicity": "La facilidad de uso",
    "feedback.q4": "¿Recomendarías Jall AI a un amigo o colega?",
    "feedback.q4.definitely": "Definitivamente sí",
    "feedback.q4.probably": "Probablemente sí",
    "feedback.q4.notSure": "No estoy seguro",
    "feedback.q4.no": "Probablemente no",

    // Language
    "language.spanish": "Español",
    "language.english": "English",

    // Tool Help
    "toolHelp.chatgpt.title": "¿Qué puedes hacer con ChatGPT Plus?",
    "toolHelp.chatgpt.1": "Crear contenido para redes sociales, blogs y marketing",
    "toolHelp.chatgpt.2": "Generar imágenes con DALL-E 3 ilimitado",
    "toolHelp.chatgpt.3": "Escribir y depurar código en cualquier lenguaje",
    "toolHelp.chatgpt.4": "Analizar documentos PDF, Excel y presentaciones",
    "toolHelp.chatgpt.5": "Traducir textos y mejorar tu escritura",
    "toolHelp.chatgpt.6": "Obtener ayuda con tareas, investigaciones y estudios",
    "toolHelp.chatgpt.7": "Crear estrategias de negocio y planes de marketing",
    "toolHelp.chatgpt.8": "Usar GPTs personalizados y plugins avanzados",
    "toolHelp.elevenlabs.title": "¿Qué podrás hacer con Eleven Labs?",
    "toolHelp.elevenlabs.1": "Generar voces realistas en español e inglés",
    "toolHelp.elevenlabs.2": "Clonar tu propia voz para contenido personalizado",
    "toolHelp.elevenlabs.3": "Crear narraciones profesionales para videos",
    "toolHelp.elevenlabs.4": "Producir podcasts con voces de alta calidad",
    "toolHelp.elevenlabs.5": "Doblar videos a múltiples idiomas",
    "toolHelp.elevenlabs.6": "Generar audiolibros y contenido educativo",
    "toolHelp.aiultra.title": "¿Qué puedes hacer con AI Ultra?",
    "toolHelp.aiultra.1": "Crear videos virales con Veo 3 de Google",
    "toolHelp.aiultra.2": "Generar imágenes de alta calidad con Nano Banana Pro",
    "toolHelp.aiultra.3": "Producir contenido visual para TikTok y Reels",
    "toolHelp.aiultra.4": "Crear animaciones y efectos visuales únicos",
    "toolHelp.aiultra.5": "Diseñar thumbnails y gráficos atractivos",
    "toolHelp.aiultra.6": "Generar arte digital y composiciones creativas",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Sign In",
    "nav.register": "Sign Up",

    // Hero
    "hero.badge.noCard": "No credit card required",
    "hero.badge.noVpn": "No VPN for ChatGPT",
    "hero.title": "Complete Creative Suite from",
    "hero.pricePerDay": "$0.3/day",
    "hero.subtitle": "ChatGPT Plus + Google AI Ultra + Eleven Labs.",
    "hero.payInBs": "Pay in Bs.",
    "hero.payInUsd": "Pay for what you use.",
    "hero.createVideos": "and create viral videos today.",
    "hero.registerFree": "Sign Up Free",
    "hero.seePricing": "See Pricing",
    "hero.activeCreators": "+500 active creators",
    "hero.paymentBs": "Pay in bolivars",
    "hero.paymentFlex": "Flexible payment",
    "hero.limitedOffer": "Limited Offer",
    "hero.mockup.active": "Active",
    "hero.mockup.viralVideos": "Viral Videos",
    "hero.mockup.proVoices": "Pro Voices • Credits",
    "hero.mockup.paymentBs": "Payment in Bolivars",
    "hero.mockup.paymentFlex": "Flexible Payment",
    "hero.mockup.noIntCard": "No international card",
    "hero.mockup.payAsYouGo": "Pay as you go",

    // Problem Solution
    "problem.title": "Tired of",
    "problem.titleHighlight": "Expensive Subscriptions",
    "problem.subtitle": "Forget spending fortunes on AI tools. With Jall AI, rent by use and pay flexibly.",
    "problem.theProblem": "The Problem",
    "problem.item1": "ChatGPT Plus costs $20/full month",
    "problem.item2": "You need an international credit card",
    "problem.item3": "You pay even if you don't use the whole month",
    "problem.item4": "Each tool requires a separate subscription",
    "solution.theSolution": "The Jall AI Solution",
    "solution.item1": "From",
    "solution.item1Price": "$0.3/day",
    "solution.item1Suffix": "- pay what you use",
    "solution.item2": "Direct payment in",
    "solution.item2Highlight": "bolivars",
    "solution.item2Global": "Multiple payment methods",
    "solution.item2GlobalHighlight": "available",
    "solution.item3": "No monthly commitments",
    "solution.item4": "Complete suite: ChatGPT + Video + Audio",

    // Benefits
    "benefits.title": "Everything You Need to",
    "benefits.titleHighlight": "Create",
    "benefits.subtitle": "A complete suite of AI tools for content creators.",
    "benefits.chatgpt.title": "Unlimited ChatGPT Access",
    "benefits.chatgpt.desc": "Full GPT-4 without limits. Create content, code, marketing strategies and more.",
    "benefits.video.title": "Viral Videos with Google AI",
    "benefits.video.desc": "Generate amazing videos with Google AI Ultra. Perfect for TikTok, Reels and stories.",
    "benefits.voice.title": "Pro Voices with Eleven Labs",
    "benefits.voice.desc": "Realistic voices in Spanish for your videos. Professional narration in seconds.",
    "benefits.payment.title": "Simple Payments in Bs.",
    "benefits.payment.titleGlobal": "Simple Payments",
    "benefits.payment.desc": "No international card. Pay comfortably in bolivars by transfer or mobile payment.",
    "benefits.payment.descGlobal": "Multiple payment methods: Binance Pay, cryptocurrencies, and credit/debit cards.",

    // Pricing
    "pricing.title": "Transparent",
    "pricing.titleHighlight": "Pricing",
    "pricing.subtitle": "Choose the period you need. No fine print.",
    "pricing.day": "Day",
    "pricing.week": "Week",
    "pricing.fortnight": "Fortnight",
    "pricing.month": "Month",
    "pricing.dayDesc": "Quick test",
    "pricing.weekDesc": "Best value",
    "pricing.fortnightDesc": "Extended project",
    "pricing.monthDesc": "Serious creator",
    "pricing.mostPopular": "Most Popular",
    "pricing.instantAccess": "Instant access",
    "pricing.paymentBs": "Payment in bolivars",
    "pricing.paymentFlex": "Flexible payment",
    "pricing.whatsappSupport": "WhatsApp support",
    "pricing.buy": "Buy",
    "pricing.disclaimer": "* Prices in USD. We'll show you the equivalent in Bs. at payment time.",
    "pricing.disclaimerGlobal": "* Prices in USD. Pay only for what you use.",

    // Testimonials
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Creators Say",
    "testimonials.subtitle": "Join hundreds of creators already using Jall AI.",
    "testimonials.role.creator": "Content Creator",
    "testimonials.role.entrepreneur": "Digital Entrepreneur",
    "testimonials.role.cm": "Community Manager",
    "testimonials.role.youtuber": "YouTuber",
    "testimonials.quote1": "Viral videos without spending fortunes! With Jall AI I grew my TikTok from 500 to 50K followers in 2 months.",
    "testimonials.quote2": "Payment in bolivars convinced me. No complications with international cards. ChatGPT when I need it.",
    "testimonials.quote3": "Eleven Labs voices are incredible. My clients can't believe I don't hire professional voice actors.",
    "testimonials.quote4": "Google AI Ultra changed my game. Professional quality videos from my phone. The daily price is ridiculously low.",

    // FAQ
    "faq.title": "Frequently",
    "faq.titleHighlight": "Asked Questions",
    "faq.subtitle": "Everything you need to know before getting started.",
    "faq.q1": "How does Jall AI work?",
    "faq.a1": "It's very simple: you top up balance in your account and rent the tools you need. We use a points system where 100 points = $1 USD (for example, daily ChatGPT Plus costs 30 points). When you sign up and verify your email, you get $1.5 free to try! On the platform you'll see everything in points, but here we show prices in USD for clarity.",
    "faq.q2": "How can I pay?",
    "faq.a2": "We accept Mobile Payment, bank transfer, credit/debit card, Cryptocurrencies and Binance Pay. The minimum recharge amount is $2 (200 points). You don't need an international card, but if you have one it works too! We'll soon integrate payment methods from other countries.",
    "faq.a2.global": "We accept credit/debit cards, Cryptocurrencies and Binance Pay. The minimum recharge amount is $2 (200 points). We'll soon integrate more payment methods.",
    "faq.q3": "What's included in each plan?",
    "faq.a3": "ChatGPT Plus: Full access to GPT-4o, unlimited image generation, document analysis, advanced code and plugins. Google AI Ultra: Veo 3 for viral videos + unlimited Nano Banana Pro for high quality images. Eleven Labs: Professional voices with voice cloning, perfect for videos, podcasts and content. The time you buy is yours 24 hours.",
    "faq.q4": "What if I don't use all the time I bought?",
    "faq.a4": "The time you buy is valid for the selected period (day, week, fortnight or month). We recommend choosing the period that best fits your actual usage. You can start with one day to try.",
    "faq.q5": "How do I access the tools after paying?",
    "faq.a5": "Everything is done internally on our platform! You don't need VPN, additional emails or complex passwords. Just your Jall AI access and ideas to create. That simple.",
    "faq.q6": "Are accounts shared? What about my privacy?",
    "faq.a6": "Yes, the tools work with shared accounts, which allows us to offer you such affordable prices. However, we greatly value your privacy and constantly work to protect your creations. Your content is yours and we are committed to respecting the confidentiality of your work.",

    // Footer
    "footer.description": "Complete creative suite for creators. Access the best AI tools with flexible payments.",
    "footer.descriptionGlobal": "Complete creative suite for creators. Access the best AI tools with flexible payments.",
    "footer.legal": "Legal",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.refunds": "Refund Policy",
    "footer.contact": "Contact",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Login Dialog
    "login.title": "Sign In",
    "login.subtitle": "Access your Jall AI account",
    "login.email": "Email",
    "login.password": "Password",
    "login.submit": "Sign In",
    "login.loading": "Signing in...",
    "login.noAccount": "Don't have an account?",
    "login.registerHere": "Sign up here",
    "login.demo": "Demo:",
    "login.error.required": "Required fields",
    "login.error.requiredDesc": "Please fill in all fields.",
    "login.error.invalid": "Invalid credentials",
    "login.error.invalidDesc": "The email or password is not valid.",
    "login.success": "Welcome!",
    "login.successDesc": "You have signed in successfully.",

    // Register Dialog
    "register.title": "Create Account",
    "register.subtitle": "Join Jall AI and start creating",
    "register.username": "Username",
    "register.email": "Email",
    "register.password": "Password",
    "register.submit": "Sign Up",
    "register.loading": "Signing up...",
    "register.hasAccount": "Already have an account?",
    "register.loginHere": "Sign in",
    "register.error.required": "Required fields",
    "register.error.requiredDesc": "Please fill in all fields.",
    "register.error.unavailable": "System unavailable",
    "register.error.unavailableDesc": "Registration is temporarily disabled. Try again later.",

    // Dashboard
    "dashboard.welcome": "Welcome to Jall AI",
    "dashboard.selectTool": "Select a tool from the menu to get started",
    "dashboard.home": "Home",
    "dashboard.points": "Points",
    "dashboard.rechargePoints": "Recharge Points",
    "dashboard.suggestChanges": "Suggest changes",
    "dashboard.membershipActive": "☑️ Active Membership",
    "dashboard.timeRemaining": "Time remaining:",
    "dashboard.fullAccess": "You have full access to ChatGPT Plus. Click the button to start using the tool.",
    "dashboard.openChatGPT": "Open ChatGPT Plus",
    "dashboard.comingSoon": "🚀 Coming Soon",
    "dashboard.elevenLabsDesc": "We're working to bring you access to Eleven Labs very soon. You'll be able to generate realistic voices with artificial intelligence.",
    "dashboard.aiultraDesc": "We're working to bring you access to Google AI Ultra very soon. You'll be able to generate realistic voices with artificial intelligence.",
    "dashboard.backHome": "Back to Home",
    "dashboard.noAccess": "No access to",
    "dashboard.noAccessDesc": "You don't have enough points to access this tool. Please recharge your account to continue.",
    "dashboard.rechargeNow": "Recharge Now",
    "dashboard.expired": "Expired",
    "dashboard.activateAccess": "Activate 24h access for $0.30?",
    "dashboard.activatePlan": "Activate Plan",
    "dashboard.activating": "Activating...",
    "dashboard.rechargeToActivate": "Recharge to activate",

    // Account Menu
    "account.title": "Account",
    "account.myAccount": "My Account",
    "account.profile": "Profile",
    "account.changePassword": "Change Password",
    "account.language": "Language",
    "account.logout": "Sign Out",
    "account.myProfile": "My Profile",
    "account.accountInfo": "Your account information",
    "account.email": "Email",
    "account.username": "Username",
    "account.phone": "Phone Number",
    "account.phoneBonus": "Verify your phone number and receive",
    "account.phoneBonusPoints": "$2 in points",
    "account.phoneBonusEnd": "additional!",
    "account.noPhone": "You haven't added your phone yet",
    "account.addPhone": "Add",
    "account.memberSince": "Member since",
    "account.checking": "Checking...",
    "account.minChars": "Minimum 3 characters",
    "account.available": "✓ Available",
    "account.notAvailable": "✗ Not available",
    "account.passwordTitle": "Change Password",
    "account.passwordSubtitle": "Enter your new password",
    "account.currentPassword": "Current Password",
    "account.newPassword": "New Password",
    "account.confirmPassword": "Confirm New Password",
    "account.saveChanges": "Save Changes",
    "account.passwordError": "System temporarily unavailable. Try again later.",
    "account.phoneSaved": "Phone saved",
    "account.phoneSavedDesc": "We'll send you a verification code soon.",
    "account.usernameUpdated": "Username updated",
    "account.usernameUpdatedDesc": "Your new username is",

    // Recharge Dialog
    "recharge.methodTitle": "Recharge Method",
    "recharge.methodDesc": "Select how you want to make your recharge",
    "recharge.amountTitle": "Amount to Recharge",
    "recharge.amountDesc": "Enter the amount you want to recharge (minimum $2 USD)",
    "recharge.paymentTitle": "Payment Details",
    "recharge.paymentDesc": "Make the payment and upload your receipt",
    "recharge.confirmTitle": "Confirm Recharge",
    "recharge.confirmDesc": "Review your recharge details",
    "recharge.pagoMovil": "Mobile Payment",
    "recharge.pagoMovilDesc": "Bank transfer Venezuela",
    "recharge.binance": "Binance Pay",
    "recharge.binanceDesc": "Pay with USDT",
    "recharge.crypto": "Cryptocurrencies",
    "recharge.cryptoDesc": "BTC, ETH, USDT",
    "recharge.card": "Card",
    "recharge.cardDesc": "Visa, Mastercard",
    "recharge.amountUsd": "Amount in USD",
    "recharge.minAmount": "Minimum amount is $2 USD",
    "recharge.youWillReceive": "You'll receive:",
    "recharge.pagoMovilData": "Mobile Payment Data",
    "recharge.bank": "Bank:",
    "recharge.phone": "Phone:",
    "recharge.id": "ID:",
    "recharge.holder": "Holder:",
    "recharge.amountToPay": "Amount to pay:",
    "recharge.rate": "Rate:",
    "recharge.dataViaSocial": "Payment data for",
    "recharge.willBeSent": "will be sent via WhatsApp.",
    "recharge.reference": "Reference Number",
    "recharge.uploadProof": "Upload Payment Receipt",
    "recharge.proofUploaded": "Receipt Uploaded ✓",
    "recharge.reportWhatsApp": "Report payment via WhatsApp",
    "recharge.almostDone": "Almost done!",
    "recharge.reviewData": "Make sure the data is correct",
    "recharge.method": "Method:",
    "recharge.amountUsdLabel": "Amount USD:",
    "recharge.amountBsLabel": "Amount Bs:",
    "recharge.pointsReceive": "Points to receive:",
    "recharge.referenceLabel": "Reference:",
    "recharge.back": "Back",
    "recharge.next": "Next",
    "recharge.confirmRecharge": "Confirm Recharge",
    "recharge.proofReceived": "Receipt uploaded",
    "recharge.proofReceivedDesc": "Your receipt has been received. We'll process your payment soon.",
    "recharge.inProgress": "Recharge in progress!",
    "recharge.inProgressDesc": "You'll receive your points once we verify the payment.",
    "recharge.cardMaintenanceTitle": "Card Payment",
    "recharge.cardMaintenanceDesc": "Information about card payments",
    "recharge.cardMaintenanceHeading": "Service Under Maintenance",
    "recharge.cardMaintenanceMessage": "We're improving our card payment system to provide you with a safer and faster experience.",
    "recharge.stripeComingSoon": "Coming Soon: Secure Payment with Stripe",
    "recharge.stripeDescription": "Soon you'll be able to pay securely with your credit or debit card through Stripe, the world's most trusted payment processor.",

    // Feedback Dialog
    "feedback.typeTitle": "Suggest Changes",
    "feedback.typeDesc": "Your opinion helps us build a better product",
    "feedback.questionTitle": "Question",
    "feedback.of": "of",
    "feedback.toolTitle": "Suggest Tool",
    "feedback.toolDesc": "What AI tool would you like to see in Jall AI?",
    "feedback.thanksTitle": "Thank you!",
    "feedback.thanksDesc": "We've received your feedback",
    "feedback.giveFeedback": "Give Feedback",
    "feedback.giveFeedbackDesc": "Answer a few quick questions about your experience",
    "feedback.suggestTool": "Suggest Tool",
    "feedback.suggestToolDesc": "Propose an AI tool you'd like to use",
    "feedback.toolExamples": "Examples: Midjourney, Runway, Suno AI, Claude, Perplexity, Leonardo AI...",
    "feedback.toolName": "Tool name",
    "feedback.toolReason": "Why would you like to use it? (optional)",
    "feedback.toolReasonPlaceholder": "Tell us what you would use it for...",
    "feedback.received": "Feedback received!",
    "feedback.receivedDesc": "Your opinion is very valuable to us. We'll use this information to improve Jall AI.",
    "feedback.additionalComments": "Any additional comments? (optional)",
    "feedback.commentsPlaceholder": "Tell us what we can improve...",
    "feedback.back": "Back",
    "feedback.next": "Next",
    "feedback.send": "Send",
    "feedback.sendSuggestion": "Send Suggestion",
    "feedback.close": "Close",
    "feedback.toast": "Thank you for your feedback!",
    "feedback.toastDesc": "Your opinion helps us improve Jall AI.",
    "feedback.q1": "How often do you use AI tools to create content?",
    "feedback.q1.daily": "Every day",
    "feedback.q1.weekly": "Several times a week",
    "feedback.q1.monthly": "A few times a month",
    "feedback.q1.rarely": "Rarely",
    "feedback.q2": "What is the biggest problem you face when using AI to create content?",
    "feedback.q2.cost": "The cost of subscriptions",
    "feedback.q2.access": "Difficulty accessing (VPN, international payments)",
    "feedback.q2.learning": "Learning curve",
    "feedback.q2.quality": "Unsatisfactory results",
    "feedback.q3": "What do you value most about Jall AI?",
    "feedback.q3.price": "The affordable price",
    "feedback.q3.payment": "Being able to pay in bolivars",
    "feedback.q3.variety": "Having several tools in one place",
    "feedback.q3.simplicity": "Ease of use",
    "feedback.q4": "Would you recommend Jall AI to a friend or colleague?",
    "feedback.q4.definitely": "Definitely yes",
    "feedback.q4.probably": "Probably yes",
    "feedback.q4.notSure": "I'm not sure",
    "feedback.q4.no": "Probably not",

    // Language
    "language.spanish": "Español",
    "language.english": "English",

    // Tool Help
    "toolHelp.chatgpt.title": "What can you do with ChatGPT Plus?",
    "toolHelp.chatgpt.1": "Create content for social media, blogs and marketing",
    "toolHelp.chatgpt.2": "Generate unlimited images with DALL-E 3",
    "toolHelp.chatgpt.3": "Write and debug code in any language",
    "toolHelp.chatgpt.4": "Analyze PDF documents, Excel and presentations",
    "toolHelp.chatgpt.5": "Translate texts and improve your writing",
    "toolHelp.chatgpt.6": "Get help with tasks, research and studies",
    "toolHelp.chatgpt.7": "Create business strategies and marketing plans",
    "toolHelp.chatgpt.8": "Use custom GPTs and advanced plugins",
    "toolHelp.elevenlabs.title": "What can you do with Eleven Labs?",
    "toolHelp.elevenlabs.1": "Generate realistic voices in English and Spanish",
    "toolHelp.elevenlabs.2": "Clone your own voice for personalized content",
    "toolHelp.elevenlabs.3": "Create professional narrations for videos",
    "toolHelp.elevenlabs.4": "Produce podcasts with high-quality voices",
    "toolHelp.elevenlabs.5": "Dub videos into multiple languages",
    "toolHelp.elevenlabs.6": "Generate audiobooks and educational content",
    "toolHelp.aiultra.title": "What can you do with AI Ultra?",
    "toolHelp.aiultra.1": "Create viral videos with Google's Veo 3",
    "toolHelp.aiultra.2": "Generate high-quality images with Nano Banana Pro",
    "toolHelp.aiultra.3": "Produce visual content for TikTok and Reels",
    "toolHelp.aiultra.4": "Create unique animations and visual effects",
    "toolHelp.aiultra.5": "Design attractive thumbnails and graphics",
    "toolHelp.aiultra.6": "Generate digital art and creative compositions",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [isVenezuela, setIsVenezuela] = useState(false);

  useEffect(() => {
    // Check for saved preferences first
    const savedLang = localStorage.getItem("jallai_language") as Language;
    const savedCountry = localStorage.getItem("jallai_country");
    
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
    
    if (savedCountry) {
      setCountryCode(savedCountry);
      setIsVenezuela(savedCountry === "VE");
      return; // Don't fetch if we have saved data
    }

    // Detect country via IP
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const country = data.country_code || null;
        
        setCountryCode(country);
        setIsVenezuela(country === "VE");
        localStorage.setItem("jallai_country", country);
        
        // Auto-set language only if user hasn't set a preference
        if (!savedLang) {
          const isSpanishCountry = SPANISH_SPEAKING_COUNTRIES.includes(country);
          const autoLang = isSpanishCountry ? "es" : "en";
          setLanguageState(autoLang);
          localStorage.setItem("jallai_language", autoLang);
        }
      } catch (error) {
        console.error("Failed to detect country:", error);
        // Default to Spanish if detection fails
        if (!savedLang) {
          setLanguageState("es");
        }
      }
    };

    detectCountry();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("jallai_language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["es"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isVenezuela, countryCode }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
