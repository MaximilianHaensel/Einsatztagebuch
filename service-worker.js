const CACHE = 'einsatztagebuch-v2';
const LOCAL = ['./','./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
const PDF_LIB = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js';
self.addEventListener('install', event => {
  event.waitUntil((async()=>{
    const cache = await caches.open(CACHE);
    await cache.addAll(LOCAL);
    try { await cache.add(PDF_LIB); } catch(e) { /* PDF library can be cached later when online */ }
    self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached) return cached;
    try {
      const response=await fetch(event.request);
      if(response && (response.ok || response.type==='opaque')) {
        const cache=await caches.open(CACHE); cache.put(event.request,response.clone());
      }
      return response;
    } catch(e) {
      if(event.request.mode==='navigate') return caches.match('./index.html');
      throw e;
    }
  })());
});
