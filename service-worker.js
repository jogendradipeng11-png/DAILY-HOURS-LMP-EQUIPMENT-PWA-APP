const CACHE_NAME = 'equip-hours-v1';
const REPO = '/DAILY-HOURS-LMP-EQUIPMENT-PWA-APP/';   // ← change here

const urlsToCache = [
  REPO,
  REPO + 'index.html',
  REPO + 'manifest.webmanifest',
  REPO + 'icons/icon-192.png',
  REPO + 'icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});self.addEventListener('install',e=>{e.waitUntil(caches.open('equip-hours').then(c=>c.addAll(['./','./index.html'])))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
