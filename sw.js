const CACHE_NAME = 'treino-tracker-pro-v2';
const urlsToCache = [ './', './index.html', './manifest.json' ];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('treino-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});