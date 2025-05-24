const CACHE_NAME = 'parking-roster-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  // Add other assets if you have any (CSS, JS files)
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});
