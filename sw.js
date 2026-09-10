// sw.js (最低限の構成)
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
  // 通信をそのまま通す（必要に応じてキャッシュのロジックを追加可能）
  event.respondWith(fetch(event.request));
});
