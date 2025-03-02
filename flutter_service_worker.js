'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1f0ac72aa9b3345d5db9a287323d44ee",
".git/config": "403c5cfebe18077368242d9edaa2e286",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b63d8564b67748988e500884057051ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f27e8b0b89badb036f526bc6a762bb9b",
".git/logs/refs/heads/main": "00fbf7333808073b4fa75f3398fd7bd6",
".git/logs/refs/remotes/origin/main": "502be309edac56fe3e8751d78b0f1ccf",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/08/f55899ed3bf5817b06571dcd4b8508d0330cc2": "32b7771df76b8d7057f4d2dad96938d6",
".git/objects/0c/b49b114448dd6a15adedcc1c896dc38fb66c55": "0ee1cd7fd39b67ac77aa00af233291fc",
".git/objects/17/7742ccba161e2f0bdc3fc1f8f280efe1615b4e": "6d5ca0f270be3a5ceed72d634ad12991",
".git/objects/1e/893a76dec03b740530f394f6e5e27863718116": "c4e41bf0ee6cdea8d3f8f9208cb867b1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/a66602d8c84bc9c14d16fdd496c12892a6fc03": "4a54c4c56758f313ccaffdf5fc5266bd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/e3f60c2e986d7f034c04e8f02cc9dde2477b40": "d7d89a2c2105d6b24703e528fa14ee7b",
".git/objects/2f/34e8587a889d65034a2a10a9adca592d313800": "5fbe68380d7abe27db6061d70da90255",
".git/objects/30/ca5004df777c825707f90734367e10d710caae": "78554d63a7bea766979c31ec6a1a14fb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/cfed7168b028063ed3d0e17bb5a45c3c19afec": "17d123e74ef2a24b28b63f75f0a60ca3",
".git/objects/4b/60fc994f77adec6226aaf35573cdda06fcf35f": "973ddd63480a97a6b6859c0ed925b95d",
".git/objects/4d/12f58758b46ec7d981a96293546b0db46d6fb4": "65556d233a86c760450f6f89db280e07",
".git/objects/5b/4936d6daf20207be4fe98e55ff607c187ad5d5": "c87a42ad3b87011e1210ba653d4c8aad",
".git/objects/64/0ec2eb6568d55edfd5ab31fe1819e90e1fe5eb": "1e5cdc7113dd93d52369bd95a61a2bfa",
".git/objects/64/6bf2072ea717c6f1324def19edc2cc67f4fac2": "2fa1681477a31bf46802ef6e75986099",
".git/objects/64/be985d00a97f41c2470755c9483a83d9095a75": "f32dd9719c6313fd496902a0ac3e3732",
".git/objects/65/c6f608912f8dc8775f676790cbac2850a79036": "dd100dbdb9bfd3f209d286255be20997",
".git/objects/6b/042c89ea3426db47af07c14f073ca274fafce4": "bb3f337824497e8287a2d07b6a70d1a0",
".git/objects/6b/ac9d928ae1c011d41af241498d251848ed34eb": "c129eb768e7287630628dbbef0b81f38",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/08a8e7c63a2c35702054a9fb07d0f9b24a7a84": "3167fd9a1fadf4b56dae48c27e81d5ba",
".git/objects/6f/cb8cf4d186750af115a39defd3c06ccd4cd741": "d2b1af4bee80810800aa5b586ff83838",
".git/objects/76/f356a6d9d6ef4f0247ab491fd91efb533fd539": "037c284cfc379df5a4fdc275f2191db1",
".git/objects/7a/9c38e0461037ab2b10ee3e491833477b685e46": "01dc938ded7e1197adea3f93cd94fa8b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/7792879b0ede75baeda7e0e6af4b731b4fc67e": "d1f8b0cf7627c15315d916e7cdc14379",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ca87dd1ac7fccedc9601d3aaafe62de3b169ba": "9c489e500ce0c047b3a42b535817ce61",
".git/objects/8d/b945bfefdd1ab21cb94f1ac02864df80dd9730": "d5b892f65378fd29268fb9573014d5e2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/cc977df1d58597f1c4c85f3d2cc6563405fdb1": "8f919c70a2915b9f60508639e0e6fa50",
".git/objects/95/04c2042dd497c2f08de521661fba63a73de6f3": "d26da1e1481fc328da7c0c65cc3577b0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/3d65fb99236d19f712ef8969bdb19fb0eccca2": "360c4e634569c43a4cf8d133aa177e1b",
".git/objects/9c/04ea99798752486a53d1ecb1120a471de0c37a": "e15cbf285f72bd0c6e627538a76c3627",
".git/objects/a5/1af7476b9c54c55654c82bdf30afe02369c1b1": "25a4989092d47cf7bbd0a1904bce639f",
".git/objects/a6/1424244c2bb6fc80afe64e27e697e7873e0fdb": "ec5d7b5de3364f2073b73fc86f8a59e0",
".git/objects/a9/15105a61ff9d4e34b7b97a743aa2202fafcbec": "c60ccc92a13ebbf9a15ded0dc96d9fc2",
".git/objects/aa/66616f2eb4ec8578583b95a937828bb71846f7": "619c94745c0adf496b30fcabcb47dc32",
".git/objects/aa/d781359b057a05e1d64ba90e7547ba4c794f8b": "2681c2dfac3497786f2b5bfa9feadccd",
".git/objects/ac/9468fc8e9458e23389ae58ce69759ae04defa8": "03f8ffe835aaccae0c8766d99c79d6fd",
".git/objects/b0/cf98390c1cb374127a5f72457f1bb960f3f34d": "afdff6dad4a49c85b94600169ed0dde4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a44d2db0a18c12d7cf03c3763ef23991c3b5ab": "9007ecebc054d5607b15f4399b9d8979",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/27b5c84498aa6aaa534596c4569219a911851b": "57c8c291343c7c101f32663d55bd37d4",
".git/objects/c0/a26092d5e68e27c96603b37d4c7cd58ab4790b": "fd4161eb31eb6f6ced12ff26b499e7ad",
".git/objects/c0/acf732268dfae19ae801f3bfb95d0d898b5f38": "fe6c1bf90af1e28b5c4048beac61374b",
".git/objects/c0/b1588185d735ceb773fa51aa2764c6ac338416": "9119f87292734efaf151f040b23bedd1",
".git/objects/c1/4536c964b4d5699dbee207f9a566eb32e2a214": "cfb673ee4fa1f97f9d2370be1b6a3f1d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/6a219d3cc1852210c01af41eb18dfeb3d42969": "884a4c559d423eea4518a1e35b98e1b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/998870890f0dd650ac89bb70d79a1311b4af31": "72fd3a81ba4442f079d04855fbfe77f2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e9/1f29f26746142cfed3f1540333742d666d3c49": "63c1f9758312a496198da62365fe4621",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "e85d1c2ac85d8b40363a8de85481589d",
".git/refs/remotes/origin/main": "e85d1c2ac85d8b40363a8de85481589d",
"assets/AssetManifest.bin": "673fe123c0b171f2f8ad68cc1269fa5f",
"assets/AssetManifest.bin.json": "58207b2ef5c520c4dc0320c5af6417d9",
"assets/AssetManifest.json": "b0344350a18442639026bd1e206b8cad",
"assets/assets/fonts/FiraCode-Bold.ttf": "016bcf67f409675ff98373081ba753dd",
"assets/assets/fonts/FiraCode-Medium.ttf": "1663a5207e331ab6fa967200663e4e10",
"assets/assets/fonts/FiraCode-Regular.ttf": "301dd380625eb548238ae3c39ec9f12b",
"assets/assets/fonts/FiraCode-SemiBold.ttf": "851ef86c3ff275bd077193188f3a004f",
"assets/assets/icons/arrow_down.png": "4981e34901683b30f98b986b55cedc94",
"assets/assets/icons/arrow_right.png": "864fd698b7d6623c27405bc4349ad577",
"assets/assets/icons/cross_icon.png": "18e16622509523585f258d96d5206b01",
"assets/assets/icons/facebook_icon.png": "0d3f379e81ada4bc4d5852a133a6722a",
"assets/assets/icons/file_icon.png": "f22c73cfcdda93736e7db32eb50cf8bd",
"assets/assets/icons/github_icon.png": "0a295593765d9d67b2a14ae77f873ad0",
"assets/assets/icons/hamburger_icon.png": "fce0b686645e9c7fbad741513e3b18d9",
"assets/assets/icons/instagram_icon.png": "7ca2a37207dcbfdbf549a0459211171f",
"assets/assets/icons/redirect_icon.png": "9b5ee8a01814094c503c6191fa2bc8ae",
"assets/assets/projects_images/clear.png": "2c2a7db2c4fe491ae1d8b46ed5bf7fb8",
"assets/assets/projects_images/fastlearner.png": "23f3f3c8a9b36631949a835dcdcbef29",
"assets/assets/projects_images/fehm_ul_quran.png": "affa061e8d46b3f31a7fe03db63a3b15",
"assets/assets/projects_images/loade.png": "32dc89a289371bf78a347fdbe510861e",
"assets/FontManifest.json": "e38b265affba004b02247c5719e9607d",
"assets/fonts/MaterialIcons-Regular.otf": "860962a7e3a0e72b963301d237ce6f21",
"assets/NOTICES": "8afa847bfcd69394a8b2a6e8a69a4f88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a5553fe0b7fbb9e716f9195a8bb6d721",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2a52ad7210bd67156e285cfce56b323b",
"/": "2a52ad7210bd67156e285cfce56b323b",
"main.dart.js": "690e9f6d59b9654307d9bedc8391697b",
"manifest.json": "fd8dd3bc389af3b8db072b200d30a458",
"version.json": "cbfde5a171bec49e65a14a07a86ebef8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
