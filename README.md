# Portfolio — publicar en GitHub Pages

## 1. Reemplazá tus datos (2 minutos)
Abrí `index.html` y editá **solo** el bloque `CONFIG` que está arriba de todo (en el `<head>`):

```js
const CONFIG = {
  nombre:    "TU NOMBRE",        // tu nombre y apellido
  whatsapp:  "5493620000000",    // 549 + característica sin 0 + número sin 15. Ej: 5493624123456
  email:     "tu@email.com",
  instagram: "",                 // opcional
  linkedin:  "",                 // opcional
  ...
};
```
Mientras haya placeholders, se ven con un **recuadro punteado amarillo** en la página para que no se te escapen.
Los trabajos se editan en el array `TRABAJOS` (más abajo, en el `<script>` final).

## 2. Subir a GitHub Pages
1. Creá una cuenta en https://github.com (si no tenés).
2. Botón **New repository** → nombre: `TUUSUARIO.github.io` (reemplazá TUUSUARIO por tu usuario exacto) → **Public** → **Create repository**.
3. En la página del repo vacío: **uploading an existing file** → arrastrá `index.html` (y este README si querés) → **Commit changes**.
4. Andá a **Settings → Pages** → en *Source* elegí **Deploy from a branch**, rama **main**, carpeta **/(root)** → **Save**.
5. Esperá 1-2 minutos y entrá a `https://TUUSUARIO.github.io`.

> Si usás otro nombre de repo (ej. `portfolio`), la URL queda `https://TUUSUARIO.github.io/portfolio/`.

## 3. Para actualizar
Entrá al repo → clic en `index.html` → ícono del lápiz → editá → **Commit changes**. Se actualiza solo en 1 minuto.

## Probar en tu compu
Doble clic en `index.html` alcanza. No necesita instalar nada.
