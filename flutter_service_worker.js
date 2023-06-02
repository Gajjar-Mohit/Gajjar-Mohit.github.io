'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "71471aa22f512be4eec99f398170733e",
".git/config": "af884329720aca6673f7c5b2cd98e3d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "28a4598cd2e1846dd8f0bc44443a6ebb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f7f42ac3a867e729d7c50e9896c0824f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6290a1e89dfde58d8b28443bfb7ccae2",
".git/logs/refs/heads/main": "93450282f8a651f23ed4d98e3d11f95e",
".git/logs/refs/heads/master": "8e03868c380965d3e9a6c84a2576df06",
".git/logs/refs/remotes/origin/main": "5335a6c2dff1a995ff2c429340a8909c",
".git/logs/refs/remotes/origin/master": "eaa87abcbb75d96b612f10b039ab1d8e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1a/b6da725885461f27e965905d0178b78dcfe985": "25c6a9479e1d8d54760f171b8e415fbf",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/a9fae5f3df4742163345078bafe55a4f6d4692": "c3c6f7186fb38c0f6851793c191d2619",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2d/bb415cfcea718f89b734c2d0f3d664f8086528": "cb3af6ffdc9f5373d41d8405eb4aace5",
".git/objects/2f/4cdfd3de88893f16288c675e9cea78cc9a891c": "e03d94daddb79540840bb716ba698bca",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/ec13999f515ac422131cfa2535b81b10f42ab2": "40e08135aac0388205f7044220519da0",
".git/objects/3a/4a4d37334921eea22fabc479c447741451974f": "3a035746ac437787f1dd759b27bc08d8",
".git/objects/40/db96b644d9ebd79d25b660bace33c45d3e8016": "77778b0e2f7f74fa67988d3d41f29289",
".git/objects/41/4aab2a98067530c6b95e6fc6ebcfeb3dc4d847": "59620a599a804368d5f368451b86f283",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/3c2cda72a4c5a61d7601cf56e6a6daea7d9201": "52dddfe5fdd002a62d63ca5e2846f357",
".git/objects/4c/a87447645af8705992ae6416159addc6b32d89": "9b3d2d0eeca803694726ea306921fafa",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/9f9aa46f9fddeb643ebf58473b6b61349e66aa": "a3020c841ef8be7efe63db8068022ba4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/15a564f096b645681ba179788b8ca2ad81bab3": "7e95447705d8b9aab7ab587e1ae09ce9",
".git/objects/62/7311e3c3b690fbb8ea7285446870c7bd324246": "1fe448a7e9ef1806073259a986ea2282",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/43f549f1af0347d6cc0aa511ac45179a9cfc96": "4f1922af7a7f079dd64bac24e7c02cd4",
".git/objects/6b/d51b3d0c69fbf29da89706cb5e5130ad655ad5": "44350cfa44b1b0ade1be8325f03dbb97",
".git/objects/6b/fabb81590133edeae2a41f9981dd7c5f887203": "06188030d6219084c80348edba47a20a",
".git/objects/6e/fc1b1f927cab33c9e8c615d754a2bbbd37caf4": "6c0ecd026f1686dadc6453e09b676be4",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/c400541e353402783d27a829191a06e79c1548": "ba82059d84b395e4088030a955b14994",
".git/objects/7d/d688283f69d8aede8458565f5b81e1919ccb99": "735acc9114a8d26ba0ca512dc25142e8",
".git/objects/7e/5bc880be6ca7d60a770c83c96ef8b62fff524a": "7fd90894970892a0a206e73ab11f50ba",
".git/objects/85/6ffe415b0745ff335b1cddf399f39a1d2887bb": "49c09301a7eae5df9562d167539ba213",
".git/objects/87/83931fef0ef575e186bf43c50b5a816e35b14c": "5b7b7418519978ac8548e0b104b47d05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/88704dc75f1391118213fd919d5f1a2d256be8": "5d8a8c4b64d20b88c7f5e10c2f57d118",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/e2deb692ffa50ffa4ece3af7675d3e354aa826": "40cf503b3805db2189c1967db13d22c6",
".git/objects/97/bd7d5987d867a2f066f31e73dc55f8bc5a1e3d": "805e0511e9e90543498da6a076c59bb7",
".git/objects/98/0491415ad5f55f6ae11cbd2ae69482a98e8dd2": "1b1557cf5ba8c4e57b5f7c5412d828c7",
".git/objects/a4/240dd35715816199cfe83f6b933d05ef4ba7fe": "1a1d7ea44ded108aa441ff7a22bdd66c",
".git/objects/a6/60e10683cb6c1b7b367c07c156640314720d14": "2ce3d7f5c8374c24b49fa302256af241",
".git/objects/a7/74a817973438d65f1dc437baa248e077c93be8": "f4471d0ccb7e7669230c2e3422d9614c",
".git/objects/a8/018c917b9f7013b92787881a0944247b61c170": "739336c7f23a83cef7d69afe81c2a0c5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/c0e697120c025af0b3acbece4bd5cbf37ec673": "593985e1030297be85c4e53a3c508c81",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/3e7294a648f5b6da978de4474f081dfad77e07": "47fc8b8813f2d2bf1d88f150a3d01b6c",
".git/objects/c3/84473e5886c4d97cb34e1eb8b644dd6688fbae": "54b42149461f90bc5d14b9d72f01c273",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/ca/a1290030175b380e7cea59bb0073aeea909d67": "f8537e726ee8a07c03d039c4666781f0",
".git/objects/cb/9e4e0e43a71ab6026a17063efc4336eb9e9620": "49bdaa9c53623df214bd2a4ded185982",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ede9bafe492f48a5f031ce0d976fd08048f7bc": "d685b891a62b755b7605124d62dfbdfd",
".git/objects/dc/e56d7a884ee7d5cd771a2e7c6d963f9f8b3c58": "546fa2a06d399a4ad7071cf86a2b4afb",
".git/objects/dd/77b25a4d8b9dc2baedf9161be08852cb5546b7": "bed884e5b07511ec2588c9ced0de7d9a",
".git/objects/e1/1adc8b9a6e28da8f24442ddd413a1c93232fc3": "a835784c1ff543f9e23ef30ab90dd3d4",
".git/objects/e4/5ede7e86a4ceaa5857180c30022cc882f3560c": "e4a9c2fa1c14e0687dfccffb7128f8e5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/458189f0e00debb0bd1eb09fd37bb6c2b0ab1a": "3326e5740741eeaf7010d1fa0d49b1d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/516afa21d052d86e45160d396236367d56cc19": "68d6b2420f6b6f8cfef2e6b0e2bdcb6a",
".git/objects/f8/2b2c04f82d56efec263eb2d3c6f2931cc5bcbf": "1f21b94f11092ba3e1685d5faddbbdd1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "ca550bdcabb034eef53b8f4f43e5374f",
".git/refs/heads/main": "59a6212fd2058bc9dc46a4f1b445affe",
".git/refs/heads/master": "ca550bdcabb034eef53b8f4f43e5374f",
".git/refs/remotes/origin/main": "59a6212fd2058bc9dc46a4f1b445affe",
".git/refs/remotes/origin/master": "ca550bdcabb034eef53b8f4f43e5374f",
"assets/AssetManifest.json": "ec0998b6d6adc11f23ab37e0863f7fd0",
"assets/AssetManifest.smcbin": "9714a911fa2fef87bdb53cd808cbc6b0",
"assets/assets/1.1.png": "847a219ad109e50e7f3a7a887694fc35",
"assets/assets/1.png": "662e7b4360dcd11e509be5892a915fd2",
"assets/assets/2.1.png": "0da71e91073fe234aa41e1c30d4c4342",
"assets/assets/2.png": "3a7c22ff82a4d7cc32a8ebf8c8e945d7",
"assets/assets/3.1.png": "6540a5722b7ff2d4430887133e361e05",
"assets/assets/3.png": "c5d9944e02d984c70e5b329d1087155f",
"assets/assets/4.png": "1b7b05144ba45e6248e0a38295479ad2",
"assets/assets/arrow_down.png": "305a8287f03ba2af0e4949a21f05e11d",
"assets/assets/github.png": "34e326c562da1e37c314564a49704564",
"assets/assets/image.png": "870a98911f580c9d29453b37fb994902",
"assets/assets/image1.png": "2d31616d1ffc7846c4656a4a2b72199d",
"assets/assets/instagram.png": "4d3d46b326a4ecad769b3f0980b57ac0",
"assets/assets/linkedin.png": "dbb5ef14d9ab0d4efe6b60c83035e6ba",
"assets/assets/map.png": "9a4004108d1e3b14eecf724837226af4",
"assets/assets/TV%2520-%25203.png": "8de40826c7409ab36327193a5e30fc26",
"assets/assets/twitter.png": "bd776c4820b40147a9095bea7d590098",
"assets/assets/video.gif": "6126aa7abff45c8dddb9a77e73a4108a",
"assets/assets/video1.gif": "25d5afc5ba37b3032de5be32896e42aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "95d9a99ba04754991a650d1523cb632a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "13b9e675a0bdfba6e8a34284b097dd45",
"favicon.png": "b8b59b03739a6958597f18a7bad0b768",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c38fea21370caad15974e5b892811cf",
"/": "2c38fea21370caad15974e5b892811cf",
"main.dart.js": "c23440c421586141426c9808a6e5ee0d",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "1fa5bd541ea2aa81da62c15486469255",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
