<div align="center">

# 🥊 VeladaLHR — La Velada del Año VI

### Candidatura interactiva de ![**Luis Hernández**](https://www.linkedin.com/in/luis-hern%C3%A1ndez-ram%C3%ADrez/) para participar en el desarrollo web de **La Velada VI**

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript_5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

</div>

---

## 🎯 ¿Qué es este proyecto?

Una **web inmersiva tipo portfolio-candidatura** construida desde cero para demostrar mis habilidades como desarrollador y mi motivación para formar parte del equipo que construirá la web de **La Velada del Año VI**. No es un simple currículum — es una experiencia visual completa con animaciones cinematográficas, parallax y transiciones fluidas.

---

## ✨ Características Principales

| Característica | Descripción |
|---|---|
| **🎬 Intro Cinematográfica** | Secuencia de bienvenida con parallax, zoom progresivo y fade entre capas usando GSAP ScrollTrigger |
| **📜 Scroll-Driven Animations** | Timeline de animaciones sincronizada con el scroll (`scrub`, `pin`) para una experiencia inmersiva |
| **🔄 Header Dinámico** | Cabecera que se transforma en sticky con animación suave al salir de la zona de intro |
| **📊 Circular Progress SVG** | Componente SVG personalizado con gradientes y transiciones animadas para mostrar habilidades |
| **🎨 Degradado Dorado Custom** | Utilidad CSS personalizada `text-gold-gradient` con gradiente metálico de 5 paradas |
| **📱 Diseño Responsive** | Mobile-first con breakpoints adaptativos para todas las resoluciones |
| **⚡ Optimización de Rendimiento** | Imágenes WebP, preload de assets críticos y lazy loading |
| **🔀 Enrutamiento SPA** | Navegación client-side con React Router y página 404 personalizada |

---

## 🛠️ Stack Tecnológico

### Core
- **React 19** — Última versión estable con el nuevo modelo de renderizado
- **TypeScript 5.9** — Tipado estático con configuración `strict` y reglas avanzadas
- **Vite 7** — Bundler ultrarrápido con HMR instantáneo vía **SWC**

### Estilos & UI
- **Tailwind CSS 4** — Integración nativa con Vite (`@tailwindcss/vite`), custom `@theme` y `@utility`
- **Google Fonts** — Tipografías *Libre Baskerville* (serif) y *Jost* (sans-serif)
- **clsx + tailwind-merge** — Composición dinámica y merge inteligente de clases CSS

### Animaciones
- **GSAP 3.14** — Motor de animación profesional
- **ScrollTrigger** — Plugin para animaciones sincronizadas con scroll (parallax, pin, scrub)
- **@gsap/react** — Hook `useGSAP` para integración nativa con el ciclo de vida de React

### Navegación
- **React Router 7** — Enrutamiento declarativo con `BrowserRouter`, `Routes` y manejo de 404

### Calidad de Código
- **ESLint 9** — Linting moderno con flat config
- **typescript-eslint** — Reglas de TypeScript
- **eslint-plugin-react-hooks** — Validación de reglas de Hooks
- **eslint-plugin-react-refresh** — Soporte para Fast Refresh en desarrollo

---

## 🏗️ Arquitectura del Proyecto

```
VeladaLHR/
├── public/
│   └── logoVeladaFondo.svg         # Favicon SVG
├── src/
│   ├── assets/                     # Imágenes optimizadas (WebP + SVG)
│   │   ├── fondoVelada.webp        # Fondo parallax principal
│   │   ├── fondoIntro.webp         # Fondo sección introductoria
│   │   ├── imgHero.webp            # Foto de perfil
│   │   ├── flechaScroll.svg        # Indicador de scroll animado
│   │   └── ...                     # Iconos sociales (GitHub, LinkedIn, InfoJobs)
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Sección hero con datos personales
│   │   │   ├── About.tsx           # Sección sobre mí
│   │   │   ├── Skills.tsx          # Selector interactivo de habilidades
│   │   │   ├── CircularPercent.tsx  # Componente SVG de progreso circular
│   │   │   ├── Projects.tsx        # Tarjeta de proyecto destacado
│   │   │   └── Contact.tsx         # Sección de contacto
│   │   └── shared/
│   │       ├── Header.tsx          # Cabecera con navegación condicional
│   │       └── Footer.tsx          # Pie de página
│   ├── lib/
│   │   └── gsap.ts                 # Configuración centralizada de GSAP + plugins
│   ├── pages/
│   │   ├── MainLayout.tsx          # Layout principal con animación de intro
│   │   └── NotFound.tsx            # Página 404
│   ├── styles/
│   │   └── index.css               # Tailwind config, @theme, @utility, @layer
│   ├── App.tsx                     # Router principal
│   └── main.tsx                    # Entry point con BrowserRouter + StrictMode
├── index.html                      # HTML con preload de assets críticos
├── vite.config.ts                  # Config de Vite + plugins (React SWC + Tailwind)
├── tsconfig.json                   # Config TypeScript base
└── eslint.config.js                # ESLint flat config
```

---

## 🎞️ Detalle Técnico: Sistema de Animación

El corazón visual del proyecto es un **timeline GSAP multi-fase** controlado por scroll:

```
┌─────────────────────────────────────────────────┐
│  FASE 1 — Parallax Hero                         │
│  → Fondo con zoom (scale 2.5x) + fade out       │
│  → Textos de bienvenida con parallax vertical    │
│  → Flecha animada con yoyo infinito              │
├─────────────────────────────────────────────────┤
│  FASE 2 — ¿Por qué quiero participar?           │
│  → Slide-up desde y:200 con ease power2.out      │
│  → Texto con degradado dorado metálico           │
├─────────────────────────────────────────────────┤
│  FASE 3 — Contenido Principal                    │
│  → Fade-in del layout completo                   │
│  → Header se transforma en sticky compacto       │
│  → ScrollTrigger.refresh() para recalcular       │
└─────────────────────────────────────────────────┘
```

> Todo con `scrub: 1` para sincronización suave con la velocidad de scroll del usuario.

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Color | Hex | Uso |
|---|---|---|
| ⬛ Negro | `#000000` | Fondo principal |
| ⬜ Blanco | `#FFFFFF` | Texto primario |
| 🩶 Gris claro | `#CCCCCC` | Texto secundario |
| 🟤 Oro oscuro | `#893802` | Gradiente inicio |
| 🟠 Oro medio | `#A96304` | Acentos / hover |
| 🟡 Oro claro | `#BA8D6B` | Gradiente fin |
| 🩷 Oro rosado | `#E7D4C9` | Gradiente centro |

### Tipografías
- **Libre Baskerville** (serif) — Títulos y textos destacados
- **Jost** (sans-serif) — Cuerpo de texto y UI

---

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/LuiherraDev/VeladaLHR.git
cd VeladaLHR

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 📋 Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript + Build de producción |
| `npm run preview` | Preview local del build |
| `npm run lint` | Análisis estático con ESLint |

---

<div align="center">

### Hecho con dedicación por ![**Luis Hernández**](https://www.linkedin.com/in/luis-hern%C3%A1ndez-ram%C3%ADrez/) para La Velada del Año VI

*"Este proyecto sería una oportunidad para aplicar mis conocimientos en un entorno real y contribuir a un evento que sigo desde sus primeras ediciones."*

</div>