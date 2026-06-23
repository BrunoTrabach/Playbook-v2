const CACHE_NAME = 'aiwa-playbook-v2-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/database.js',
  './js/comparativos.js',
  './core/loader.js',
  './core/asset-map.js',
  './core/asset-manager.js',
  './components/home.html',
  './components/historias.html',
  './components/historias/hist1.html',
  './components/historias/hist2.html',
  './components/historias/hist3.html',
  './components/historias/hist4.html',
  './components/historias/hist_expandida.html',
  './components/comparativos.html',
  './components/pilares.html',
  './components/tecnologias.html',
  './components/tecnologias/bluetooth.html',
  './components/tecnologias/tws.html',
  './components/tecnologias/ip66.html',
  './components/tecnologias/app_aiwa.html',
  './components/tecnologias/bass_boost.html',
  './components/tecnologias/bateria.html',
  './components/conclusoes.html',
  './components/conclusoes/conclusao_geral.html',
  './components/conclusoes/relacionamento.html',
  './components/conclusoes/venda_consultiva.html',
  './components/sobre.html',
  './components/assistente.html',
  './assets/avatares/bruno.jpg',
  './assets/avatares/cristiane.jpg',
  './assets/avatares/edy.jpg',
  './assets/avatares/fernanda.jpg',
  './assets/logos/aiwa-logo-header.png',
  './assets/logos/aiwa-logo-oficial.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cache aberto');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(err => console.error('[SW] Erro ao cachear:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback offline para imagens
        if (event.request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9ba2c4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      });
    })
  );
});
