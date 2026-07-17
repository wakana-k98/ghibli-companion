const CACHE = 'ghibli-companion-v1';
const ASSETS = [
  './pup-todo.html',
  './totoroneutral.png','./totorohai.png','./totorostare.png',
  './totoroexcited.png','./totorojump.png',
  './duckneurtral.png','./duckhappy.png','./duckhi.png',
  './duckcry.png','./duckgoingtosleep.png','./ducksleep.png',
  './jijineutral.png','./jijihappy.png','./jijiannoyed.png',
  './jijisleepy.png','./jijiwaiting.png'
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);

self.addEventListener('activate', e =>
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ))
);

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
