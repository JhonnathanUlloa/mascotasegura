# 🚀 Guía de Despliegue en Vercel - Mi Mascota Segura

## 📋 Pre-requisitos
- ✅ Cuenta de GitHub (ya tienes tu repo: JhonnathanUlloa/mascotasegura)
- ✅ Proyecto Next.js configurado (completo)
- ✅ Código sin errores

## 🎯 Opción 1: Despliegue Directo desde GitHub (RECOMENDADO)

### Paso 1: Subir cambios a GitHub
```powershell
cd "c:\Users\jhonn\OneDrive\Documentos\mascotasegura\mascotasegura"
git add .
git commit -m "Preparar proyecto para despliegue en Vercel"
git push origin master
```

### Paso 2: Conectar con Vercel
1. Ve a: https://vercel.com/
2. Haz clic en **"Sign Up"** o **"Log In"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

### Paso 3: Importar el Proyecto
1. Una vez dentro del dashboard, haz clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio **"mascotasegura"**
3. Haz clic en **"Import"**

### Paso 4: Configurar el Proyecto
En la página de configuración:

**Framework Preset:** Next.js (se detecta automáticamente)

**Root Directory:** `./` (raíz del proyecto)

**Build Command:** 
```bash
npm run build
```

**Output Directory:** `.next` (se detecta automáticamente)

**Install Command:**
```bash
npm install
```

### Paso 5: Variables de Entorno (Opcional)
Si necesitas variables de entorno, agrégalas aquí:
- Por ahora NO necesitas ninguna, tu proyecto usa solo localStorage

### Paso 6: Desplegar
1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel:
   - Instala dependencias
   - Construye el proyecto
   - Despliega en su red global

### Paso 7: ¡Proyecto en Vivo!
- Vercel te dará una URL tipo: `https://mascotasegura.vercel.app`
- Cada push a `master` se desplegará automáticamente

---

## 🎯 Opción 2: Despliegue con Vercel CLI

### Paso 1: Instalar Vercel CLI
```powershell
npm install -g vercel
```

### Paso 2: Login en Vercel
```powershell
vercel login
```

### Paso 3: Desplegar
```powershell
cd "c:\Users\jhonn\OneDrive\Documentos\mascotasegura\mascotasegura"
vercel
```

Responde las preguntas:
- **Set up and deploy?** → Y (Yes)
- **Which scope?** → Tu cuenta personal
- **Link to existing project?** → N (No)
- **What's your project's name?** → mascotasegura (o el que prefieras)
- **In which directory is your code located?** → ./ (presiona Enter)

### Paso 4: Despliegue a Producción
```powershell
vercel --prod
```

---

## 🔧 Configuración Avanzada (Opcional)

### Crear archivo vercel.json
Si quieres personalizar la configuración:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## ✅ Checklist Final

Antes de desplegar, verifica:

- [x] No hay errores de compilación (`npm run build` funciona)
- [x] Todas las imágenes están en `public/recursos/`
- [x] No hay claves API o secretos en el código
- [x] El código está subido a GitHub
- [x] package.json tiene todos los scripts necesarios

---

## 🌐 Dominio Personalizado (Después del Despliegue)

### Conectar tu propio dominio:
1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** → **"Domains"**
3. Agrega tu dominio (ej: mimascotasegura.com)
4. Configura los DNS según las instrucciones de Vercel

---

## 🔄 Actualizaciones Automáticas

Una vez configurado con GitHub:
- Cada `git push` a `master` → Despliegue automático
- Puedes ver el progreso en tiempo real en Vercel
- Vercel guarda historial de todos los despliegues

---

## 🐛 Solución de Problemas

### Error: "Build failed"
```powershell
# Verificar que el build funcione localmente
npm run build
```

### Error: "Module not found"
```powershell
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error con imágenes SVG
- Asegúrate que todas las imágenes estén en `public/recursos/`
- Las rutas deben ser `/recursos/imagen.svg` (sin `public/`)

---

## 📊 Comandos Útiles

```powershell
# Ver deployments
vercel ls

# Ver logs del deployment actual
vercel logs

# Eliminar un deployment
vercel remove [deployment-url]

# Ver información del proyecto
vercel inspect
```

---

## 🎉 ¡Listo!

Tu proyecto estará disponible en:
- URL de Vercel: `https://tu-proyecto.vercel.app`
- Con tu dominio (opcional): `https://mimascotasegura.com`

**Ventajas de Vercel:**
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Despliegues instantáneos
- ✅ Preview de cada branch
- ✅ Rollback en 1 click
- ✅ Analytics incluido
- ✅ 100% GRATIS para proyectos personales

---

## 📞 Soporte

Si tienes problemas:
- Docs oficiales: https://vercel.com/docs
- Comunidad: https://github.com/vercel/vercel/discussions
