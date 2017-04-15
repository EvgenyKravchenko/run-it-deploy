self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('runit').then(cache => cache.addAll([
      '/',
      'Anton-Korchynskyi.jpg',
      'Antonyuk.jpg',
      'bg.jpg',
      'Chesnokov.jpg',
      'coffee.jpeg',
      'coffee.png',
      'Dmitry-Voloshko.jpg',
      'logo.png',
      'logo-144x144.png',
      'Luca-Merolla.jpg',
      'lunch.png',
      'Mariia-Kot.jpg',
      'Max-Itskovich.jpg',
      'Max-Sabarnya.jpg',
      'Oleksandra-Alkhimovych.jpg',
      'Olga-Ivanova.jpg',
      'Orkhan-Gasimov.jpg',
      'Vera-Shatskaya.jpg',
      'assets/run-it.css',
      'assets/run-it.js',
      'assets/vendor.css',
      'assets/vendor.js'
    ]))
  );
});

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});