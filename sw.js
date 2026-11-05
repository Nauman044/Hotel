/* Hotel POS offline helper (service worker) — Developed by DevLinks · devlinks.online
   Keeps a copy of the website files (index.html, app.js, style.css, fonts) on this device,
   so the software still opens when the internet is down. Hotel data is NOT stored here:
   it lives in the browser's local database (IndexedDB) and in the hotel's Google Sheet.
   Files are always fetched fresh when online, so uploading new files to GitHub updates every device. */
const CACHE = "hotelpos-shell-v2";
const SHELL = ["./", "./index.html", "./app.js", "./style.css", "./assets/favicon.svg", "./assets/favicon-32.png", "./assets/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("hotelpos-shell-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Website files: network first (always newest), device copy when offline or very slow.
  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await Promise.race([fetch(req, { cache: "no-cache" }), timeout(4000)]);
        if (res && res.ok) cache.put(req.mode === "navigate" ? "./index.html" : req, res.clone());
        return res;
      } catch (err) {
        const hit = await cache.match(req.mode === "navigate" ? "./index.html" : req, { ignoreSearch: true });
        if (hit) return hit;
        throw err;
      }
    })());
    return;
  }

  // Google Fonts: device copy first, refreshed in the background.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      const net = fetch(req).then((res) => {
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(() => hit);
      return hit || net;
    })());
  }
  // Everything else (Google Apps Script requests) goes straight to the network.
});
