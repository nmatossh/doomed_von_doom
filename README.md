# Dr. Doom - El Destino Final

Una página web temática inspirada en Dr. Doom con un contador en tiempo real hacia el 28 de diciembre de 2026.

## Características

- **Contador en tiempo real** que muestra meses, días, horas, minutos, segundos y milisegundos
- **Tema visual dramático** inspirado en Dr. Doom con colores rojos y azules
- **Efectos visuales** incluyendo partículas flotantes y efectos de brillo
- **Diseño responsive** que se adapta a diferentes tamaños de pantalla
- **Modo especial** activable con la tecla 'D'

## Instalación

1. Coloca una imagen llamada `back.jpg` en la carpeta raíz del proyecto
2. Abre `index.html` en tu navegador web

## Archivos del proyecto

- `index.html` - Estructura HTML principal
- `styles.css` - Estilos CSS con tema de Dr. Doom
- `script.js` - Lógica del contador y efectos visuales
- `back.jpg` - Imagen de fondo (debes proporcionarla)

## Personalización

Para cambiar la fecha objetivo, modifica la variable `targetDate` en `script.js`:

```javascript
const targetDate = new Date('2026-12-28T00:00:00').getTime();
```

## Efectos especiales

- Presiona la tecla 'D' para activar el modo Doom especial
- Los números del contador tienen efectos de brillo al pasar el mouse
- Partículas flotantes crean un ambiente atmosférico

## Compatibilidad

- Funciona en todos los navegadores modernos
- Optimizado para dispositivos móviles y de escritorio
- No requiere dependencias externas (excepto las fuentes de Google Fonts)
