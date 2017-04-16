self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('runit').then(cache => cache.addAll([
      '/run-it-deploy',
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
      'assets/vendor.js',
      'https://fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2',
      'https://fonts.gstatic.com/s/indieflower/v8/10JVD_humAd5zP2yrFqw6hampu5_7CjHW5spxoeN3Vs.woff2'
    ]))
  );
});

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});