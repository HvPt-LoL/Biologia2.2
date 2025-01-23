importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

// Verificar que Workbox se cargó correctamente
if (workbox) {
  console.log('Workbox se cargó correctamente.');

  // Precaching de archivos
  workbox.precaching.precacheAndRoute([
    { url: './5010270.png', revision: 'ceb13280bdfc41ea67b3c776493e1efa' },
    { url: './animal.jpeg', revision: '8fab46f023d6ce7caaaea0f5dabae143' },
    { url: './Crossing-over_dyn-removebg.png', revision: '9548ec8ef2f5992da6e05ffd57dfebc8' },
    { url: './f-d_3bc01fd385e488da8d1622d95c898fe7a32e81ef91999d943e67de8f+IMAGE_TINY+IMAGE_TINY-removebg-preview.png', revision: '082b7d2261f749357e447d8e0dc66be9' },
    { url: './index.html', revision: 'd276abe03fae2bbe3a5c58d001527c89' },
    { url: './manifest.json', revision: '8ee22c58ffbbb324e27d6e10f849ae78' },
    { url: './ovulo001-removebg-preview.png', revision: '4867aeb2235dbf353f56ac4017c5c353' },
    { url: './script.js', revision: 'ceba2c92eccf0aff593cd5d3df13cbe8' },
  ]);

  // Activar el nuevo service worker inmediatamente
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  // Manejo de recursos de red con estrategia de caché
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, // Máximo de imágenes en caché
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
        }),
      ],
    })
  );
} else {
  console.error('Workbox no se pudo cargar.');
}