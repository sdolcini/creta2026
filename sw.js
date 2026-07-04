const CACHE = 'creta2026-v1';
const ASSETS = [
  '/creta2026/',
  '/creta2026/index.html',
  '/creta2026/style.css',
  '/creta2026/src/app.js',
  '/creta2026/src/data.js',
  '/creta2026/manifest.json',
  '/creta2026/icons/icon-192.png',
  '/creta2026/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
