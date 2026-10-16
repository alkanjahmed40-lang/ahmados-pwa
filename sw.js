const CACHE_NAME = 'ahmados-pwa-v2026';
const ASSETS = ['./', './index.html', './manifest.json', './sw.js'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{}))); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))); });