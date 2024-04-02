const CACHE_NAME = 'my-pwa-cache-v1';
const urlsTOCache = [
    '/',
    'pgrm4.html',
    'pgrm4.css',
    'app.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsTOCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
