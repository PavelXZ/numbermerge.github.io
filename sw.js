const CACHE_NAME = 'merge-v1.0.0.2';
const cacheList = [
    'index.html',
    'c2runtime.js',
    'data.js',
    'jquery-2.1.1.min.js',
    'images/bg1.png',
    'images/bg2.png',
    'images/bg3.png',
    'images/bg4.png',
    'images/btn_fullscreen-sheet0.png',
    'images/btn_hint-sheet0.png',
    'images/btn_home-sheet0.png',
    'images/btn_home-sheet1.png',
    'images/btn_howtoplay-sheet0.png',
    'images/btn_info-sheet0.png',
    'images/btn_moregames-sheet0.png',
    'images/btn_play-sheet0.png',
    'images/btn_reload-sheet0.png',
    'images/btn_sound-sheet0.png',
    'images/btn_theme-sheet0.png',
    'images/img_bg-sheet0.png',
    'images/img_bg-sheet1.png',
    'images/img_blockmini-sheet0.png',
    'images/img_blockmini-sheet1.png',
    'images/img_block-sheet0.png',
    'images/img_block-sheet1.png',
    'images/img_check-sheet0.png',
    'images/img_creator-sheet0.png',
    'images/img_halo-sheet0.png',
    'images/img_halo-sheet1.png',
    'images/img_linetouch-sheet0.png',
    'images/img_linetouch-sheet1.png',
    'images/img_loadingbar.png',
    'images/img_loadingmaze.png',
    'images/img_logo-sheet0.png',
    'images/img_mask-sheet0.png',
    'images/img_shadow-sheet0.png',
    'images/sf_general.png',
    'images/start-sheet0.png',
    'images/howtoplay-sheet0.png',
    'images/gameover-sheet0.png',
    'images/gamename-sheet0.png',

    'media/click2.ogg',
    'media/click.ogg',
    'media/music1.ogg',
    'media/newblock.ogg',
    'media/p0.ogg',
    'media/p1.ogg',
    'media/p2.ogg',
    'media/p3.ogg',
    'media/p4.ogg',
    'media/p5.ogg',
    'media/p6.ogg',
    'media/p7.ogg',
    'media/p8.ogg',
    'media/p9.ogg',
    'media/pageflip_more.ogg',
    'media/pageflip.ogg'


];

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(cacheList);
        })
    );
});

const CACHE_PREFIX = 'merge';

this.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

this.addEventListener('fetch', function(event) {
    if (
        event.request.method !== 'GET' ||
        event.request.url.indexOf('http://') === 0
    ) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});