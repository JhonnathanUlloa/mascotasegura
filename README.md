# Mi Mascota Segura - Plataforma Web

Una plataforma integral para el cuidado y protección de mascotas con servicios de emergencia 24/7, seguros y memorial digital.

##  Tecnologías Utilizadas

- **Next.js 15.5.4** - Framework de React con App Router
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Turbopack** - Bundler ultra-rápido para desarrollo

##  Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal (Hero + Welcome)
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Estilos globales
│   ├── planes/              
│   │   └── page.tsx         # Página de planes y precios
│   ├── como-funciona/       
│   │   └── page.tsx         # Cómo funciona nuestro servicio
│   ├── memorial/            
│   │   └── page.tsx         # Memorial digital para mascotas
│   ├── testimonios/         
│   │   └── page.tsx         # Testimonios de clientes
│   ├── preguntas-frecuentes/
│   │   └── page.tsx         # FAQ
│   ├── sobre-nosotros/      
│   │   └── page.tsx         # Información de la empresa
│   └── contacto/            
│       └── page.tsx         # Formulario de contacto
├── components/              # Componentes reutilizables
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero de inicio
│   ├── Welcome.tsx          # Sección de bienvenida
│   ├── Plans.tsx            # Planes y precios
│   ├── HowItWorks.tsx       # Proceso paso a paso
│   ├── Memorial.tsx         # Memorial digital
│   ├── Testimonials.tsx     # Testimonios
│   ├── FAQ.tsx              # Preguntas frecuentes
│   ├── AboutUs.tsx          # Sobre nosotros
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
└── public/
    └── recursos/            # Recursos multimedia
        ├── logoms.jpeg      # Logo de la empresa
        └── ftocalida.png    # Imagen cálida de mascotas

```

##  Características

###  Arquitectura Multi-Página
- **Rutas semánticas**: URLs claras como `/planes`, `/contacto`, `/memorial`
- **SEO optimizado**: Metadata específica para cada página
- **Navegación intuitiva**: Header con enlaces directos a cada sección

###  Componentes Modulares
- Cada sección es un componente independiente
- Fácil mantenimiento y escalabilidad
- Reutilización de código optimizada

###  Diseño Responsive
- Diseño mobile-first con Tailwind CSS
- Navegación adaptable en dispositivos móviles
- Imágenes optimizadas con Next.js Image

###  Recursos Integrados
- Logo corporativo (`logoms.jpeg`)
- Imagen cálida de mascotas (`ftocalida.png`)
- Iconografía consistente con emojis

##  Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
```
El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Build de Producción
```bash
npm run build
npm start
```

##  Rutas Disponibles

| Ruta | Descripción | Componente Principal |
|------|-------------|---------------------|
| `/` | Página de inicio | Hero + Welcome |
| `/planes` | Planes y cobertura | Plans |
| `/como-funciona` | Proceso del servicio | HowItWorks |
| `/memorial` | Memorial digital | Memorial |
| `/testimonios` | Experiencias de clientes | Testimonials |
| `/preguntas-frecuentes` | Preguntas frecuentes | FAQ |
| `/sobre-nosotros` | Información corporativa | AboutUs |
| `/contacto` | Formulario de contacto | Contact |

##  Funcionalidades Principales

###  Emergencias 24/7
- Botón de emergencia visible en toda la plataforma
- Llamada directa desde cualquier página

###  WhatsApp Integration
- Contacto inmediato por WhatsApp
- Disponible en header y footer

###  Memorial Digital
- Sección especial para honrar mascotas
- Servicios de despedida personalizados

###  Planes Flexibles
- Membresías adaptadas a diferentes necesidades
- Información clara de coberturas

##  Configuración

### Colores Personalizados
```css
:root {
  --cream: #fefdf9;
  --mint: #a7f3d0;
  --mint-dark: #34d399;
  --soft-gray: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
}
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción con Turbopack
- `npm run start` - Servidor de producción
- `npm run lint` - Linting con ESLint

##  Contacto

**Ubicación**: Cl. 58 #29-57-1, Barrancabermeja, Santander
**Emergencias**: 24/7 - Llamada directa desde botones
**WhatsApp**: Contacto inmediato desde la web
**Email**: contacto@mimascotasegura.com

---

##  Próximas Mejoras

- [ ] Integración con CMS para contenido dinámico
- [ ] Sistema de autenticación para clientes
- [ ] Dashboard de usuario para gestión de pólizas
- [ ] Integración con pasarelas de pago
- [ ] Chat en vivo con veterinarios
- [ ] App móvil nativa

Desarrollado con  para las mascotas y sus familias.
