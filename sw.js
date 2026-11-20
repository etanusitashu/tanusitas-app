// Egyszerű service worker: a felületet (nem az adatokat!) gyorsítótárazza, hálózat elsőbbséggel.
const CACHE = 'tanusitas-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;   // az API-hívásokhoz nem nyúlunk
  e.respondWith(fetch(e.request).then(r => {
    const m = r.clone(); caches.open(CACHE).then(c => c.put(e.request, m)); return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
