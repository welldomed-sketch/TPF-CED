// This is the background manager for your TPF App
const CACHE_NAME = 'tpf-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'መግኣዚ ንድሕርት.html',
  'መግኣዚ ንድሕሪት መእሰሪ.html',
  'መግኣዚ ንቕድሚት.html',
  'መግኣዚ ንቕድሚት መእሰሪ.html',
  'Well9.png',
  'Wellwell.png'
];

// Install the service worker and cache your files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept network requests so the app works offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
