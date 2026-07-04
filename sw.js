// Service Worker minimale — solo per installabilità PWA su Android
// Non fa caching aggressivo per non interferire con Firebase
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
