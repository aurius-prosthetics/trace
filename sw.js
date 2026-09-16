// Trace Service Worker — v1
// Caches the app shell so it loads instantly and works offline.
// Data lives in localStorage (never leaves the device).

const CACHE = 'trace-v1';
const SHELL = [
  '/trace/',
  '/trace/index.html',
  '/trace/manifest.json',
];

// Install: pre-cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fall back to network, update cache
self.addEventListener('fetch', e => {
  // Only handle GET requests for same-origin resources
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Let external requests (e.g. frankfurter.app for FX rates) go straight to network
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      // Return cached version immediately, refresh in background
      return cached || networkFetch;
    })
  );
});
