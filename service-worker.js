/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a0ea774cee009c1d9070cb528325c13b"
  },
  {
    "url": "assets/css/0.styles.3b0a5858.css",
    "revision": "4d77ee39f4e526233b3b35da9b4a3f82"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bb8a8aea.js",
    "revision": "3652562047973f280b99aec6deacd85b"
  },
  {
    "url": "assets/js/11.3ff47837.js",
    "revision": "40af553c51dabb3ef24ed484a04230cb"
  },
  {
    "url": "assets/js/12.caa1272c.js",
    "revision": "1f969066854a7ef74604fadaf200728b"
  },
  {
    "url": "assets/js/13.ad210938.js",
    "revision": "2856e6506a50e10585dfd1a547db0582"
  },
  {
    "url": "assets/js/14.90022dc9.js",
    "revision": "51812174b26d7fcfeb8d4ecd9f77ca01"
  },
  {
    "url": "assets/js/15.b001bad4.js",
    "revision": "1de4741b18bc9a80b126848eb30d53b3"
  },
  {
    "url": "assets/js/16.a31bd563.js",
    "revision": "b91c58be97732a413f753326c88758e8"
  },
  {
    "url": "assets/js/17.47c20014.js",
    "revision": "6cdd309b1073303cb10e350d15160be7"
  },
  {
    "url": "assets/js/18.e94b3be8.js",
    "revision": "918653431ce95c362e33c22e476f7f0a"
  },
  {
    "url": "assets/js/19.d129cec2.js",
    "revision": "30742974889201c59f9489e636b8b869"
  },
  {
    "url": "assets/js/2.591690c5.js",
    "revision": "23b47cf157b5b94c31832174a1eeb7ef"
  },
  {
    "url": "assets/js/20.098f2ba7.js",
    "revision": "b7115a68bbd3094e39e7ac1b03519f50"
  },
  {
    "url": "assets/js/21.0b8aeb6b.js",
    "revision": "c311d63aee232da0e31112d4c1f74890"
  },
  {
    "url": "assets/js/22.bce98ec5.js",
    "revision": "54a4dd559d0960d953cb296a22b8b258"
  },
  {
    "url": "assets/js/23.ec755905.js",
    "revision": "ea7aad4482df395eeb6fcc3ae78d5de9"
  },
  {
    "url": "assets/js/24.effe15a3.js",
    "revision": "5db4e47d9cf3e1a2fb27c15922e36457"
  },
  {
    "url": "assets/js/25.8cc1b6cf.js",
    "revision": "55460cdd0bae71589a93c5b14787ea79"
  },
  {
    "url": "assets/js/26.098a4d96.js",
    "revision": "ecc1f8987e1e37a0122bc9f23922d0e2"
  },
  {
    "url": "assets/js/27.f350a63a.js",
    "revision": "fa16acb2d2d0a44c9fcc63ebf8247a56"
  },
  {
    "url": "assets/js/28.5e82e6d0.js",
    "revision": "11c68994b44020740a5c52f692026a1c"
  },
  {
    "url": "assets/js/29.54347887.js",
    "revision": "ebc84be603d68563d1ade4218e59d9b0"
  },
  {
    "url": "assets/js/3.9ba8a8fc.js",
    "revision": "234d809d2e4ee3752206e1d3802ecedf"
  },
  {
    "url": "assets/js/30.0d896ae5.js",
    "revision": "52a3f79a53b47fc9ccace5c06c6f1da0"
  },
  {
    "url": "assets/js/31.195bc40f.js",
    "revision": "605404f9209e605a0afe5383c555ada8"
  },
  {
    "url": "assets/js/32.298ba5b4.js",
    "revision": "843b4a1c1ceb3a8cd2d87ce6da814ae2"
  },
  {
    "url": "assets/js/33.4e85abe1.js",
    "revision": "e8a045c21203eaf9d203badf02c049f4"
  },
  {
    "url": "assets/js/34.6067c290.js",
    "revision": "7171b19564089ae223bde9f607b24cf5"
  },
  {
    "url": "assets/js/35.73b3315b.js",
    "revision": "648ad00bbcd71842f935453c25acf6cb"
  },
  {
    "url": "assets/js/36.9f565940.js",
    "revision": "a039b555bd2485b1180d8c78865e8a30"
  },
  {
    "url": "assets/js/37.420ba70c.js",
    "revision": "5d4b4e749a42902585e89a2d5d1f0c93"
  },
  {
    "url": "assets/js/38.da55fdc5.js",
    "revision": "750ed5b6c339cdad7b9748540aaa6581"
  },
  {
    "url": "assets/js/39.affdad12.js",
    "revision": "739470a52c09cc04c3deb8b9545afbd9"
  },
  {
    "url": "assets/js/4.b459db70.js",
    "revision": "d6c9184b6abba98c8b55056ee359faa1"
  },
  {
    "url": "assets/js/40.521f8742.js",
    "revision": "3845e9f7e2e3621c5e8314a233fcd77f"
  },
  {
    "url": "assets/js/41.9babdb59.js",
    "revision": "791342c370154aa812b5d21e829e9e76"
  },
  {
    "url": "assets/js/42.43139dfb.js",
    "revision": "ee515c22eb4ae0ab220c411845fc42f6"
  },
  {
    "url": "assets/js/43.094e779d.js",
    "revision": "03a71b4ca0c9972aa27577fe3add354a"
  },
  {
    "url": "assets/js/44.ffb84d2c.js",
    "revision": "b208e0fc2aa4db8e2a3d4a0320a136e8"
  },
  {
    "url": "assets/js/45.9e40c1b6.js",
    "revision": "00a6bc5292f829d4ca6b9563353c0b13"
  },
  {
    "url": "assets/js/46.cd7c4004.js",
    "revision": "29ad57398ec76efc9c2de3be27577d9b"
  },
  {
    "url": "assets/js/47.dfe31030.js",
    "revision": "e1a71ab7aa1c5f17519ecae549576695"
  },
  {
    "url": "assets/js/48.39b4e38a.js",
    "revision": "0657ea3b1f1441a579c74d6b49525d79"
  },
  {
    "url": "assets/js/49.9efa4626.js",
    "revision": "d08949c9c780c9e03d53e61fdc70fd3f"
  },
  {
    "url": "assets/js/5.03649c2e.js",
    "revision": "a30ea2194e5921aa5f45ace78e5206c6"
  },
  {
    "url": "assets/js/50.64932d8d.js",
    "revision": "deb476eb2dffbf21059239430ba97593"
  },
  {
    "url": "assets/js/51.99724b64.js",
    "revision": "3dae720b898ba3c72b8ef7716e068ab4"
  },
  {
    "url": "assets/js/52.b6f1ddd9.js",
    "revision": "4191310fd1837ee66c3d9c59723e2b3c"
  },
  {
    "url": "assets/js/53.d8d28fbc.js",
    "revision": "e3cd0bd188df8c607d6ac0b3e0316a73"
  },
  {
    "url": "assets/js/54.5ed78fa9.js",
    "revision": "e205a584ec76815e1e42ad218b61c1ee"
  },
  {
    "url": "assets/js/55.b6c32c5a.js",
    "revision": "e95b00702b19356b75dab53ce662bf9e"
  },
  {
    "url": "assets/js/56.ac20d945.js",
    "revision": "125bffa8b2154e5c9b94024bb33d89c6"
  },
  {
    "url": "assets/js/57.79a4e643.js",
    "revision": "663aa1633672fd5dcbaf3ef48d4978c4"
  },
  {
    "url": "assets/js/58.89feb935.js",
    "revision": "39c04de9690ae393da6e12b1b7bd179f"
  },
  {
    "url": "assets/js/59.4b5d3a26.js",
    "revision": "51e56e4a7aba9b1ff379a0c0d07b1a29"
  },
  {
    "url": "assets/js/6.47852912.js",
    "revision": "b5ab3d4bc862fd074d8f5c66b5d7b79a"
  },
  {
    "url": "assets/js/60.e8da834e.js",
    "revision": "ad747de0d166464e0d7794aedcd38ea6"
  },
  {
    "url": "assets/js/61.f795de50.js",
    "revision": "e34f38217c21021699d0660cb4c270f7"
  },
  {
    "url": "assets/js/62.67c17f25.js",
    "revision": "da8665ced08c82a638c01af62fc0f6e9"
  },
  {
    "url": "assets/js/63.ec9a0758.js",
    "revision": "f6ab7e91805895eaa7f34eedc3544798"
  },
  {
    "url": "assets/js/64.bb585e3e.js",
    "revision": "b1fc2983639cdf22e988e04c75603ac4"
  },
  {
    "url": "assets/js/65.4b39fa0d.js",
    "revision": "dbd4460f66d537d2e8de10535e512643"
  },
  {
    "url": "assets/js/66.450166f1.js",
    "revision": "a40a36ebfb579a2a970f0b3f93ea3e8a"
  },
  {
    "url": "assets/js/67.f968f198.js",
    "revision": "660bfe6b4788c5a9fc8ef1d71fb2dc10"
  },
  {
    "url": "assets/js/68.f9c06daf.js",
    "revision": "705e3f5b9369b4e8e9308e9c447bb5b4"
  },
  {
    "url": "assets/js/69.098534d1.js",
    "revision": "6ab0b5120b1c2a940cd40844f4118613"
  },
  {
    "url": "assets/js/7.1bb50d1a.js",
    "revision": "caf38f0192c62bd34ed15c4329db4e89"
  },
  {
    "url": "assets/js/70.69767e24.js",
    "revision": "249a37b930aae7eb354b3469b54448fb"
  },
  {
    "url": "assets/js/71.31b4914a.js",
    "revision": "7dae8e582d441f16deeecbfeab060d4c"
  },
  {
    "url": "assets/js/8.33a8fef4.js",
    "revision": "e79da2e4254717f6b52e1ea254a4779b"
  },
  {
    "url": "assets/js/9.441ad959.js",
    "revision": "aef33e2d8671dd25e5ee4e206da10f99"
  },
  {
    "url": "assets/js/app.cfd618a6.js",
    "revision": "c6eb9a9e761954fa3d306f6cf096b96a"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "9d25cc974ffaa9aca6e9e77b166630d7"
  },
  {
    "url": "base/1.rust/2.Jenkins.html",
    "revision": "8488bbb054afb3767bedf8830300ac50"
  },
  {
    "url": "base/1.rust/3.gitlab.html",
    "revision": "563f1bd162eebfde31c61a012d46a9f3"
  },
  {
    "url": "base/1.rust/4.mongodb.html",
    "revision": "891868537ceae4720da8dc73b0424704"
  },
  {
    "url": "base/1.rust/5.redis.html",
    "revision": "fd67f1594898c51c02dff2fdcc436283"
  },
  {
    "url": "base/1.rust/6.mysql.html",
    "revision": "365797aabd4e3725fc954cd1c563aad2"
  },
  {
    "url": "base/1.rust/7.node.html",
    "revision": "d06daa113a808d62b1c0fa46c562228a"
  },
  {
    "url": "base/1.rust/8.express.html",
    "revision": "e110009e5973f46008889fcd23f8889f"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "5aa07c0ae647d54026498ceea614d112"
  },
  {
    "url": "base/2.engine/2.Jenkins.html",
    "revision": "3494f35fccf184f7757820e3df8cbfe9"
  },
  {
    "url": "base/2.engine/3.gitlab.html",
    "revision": "85cd1c21ca9d94671e28c62a82ecaa16"
  },
  {
    "url": "base/2.engine/4.mongodb.html",
    "revision": "b2d06be2a4b1b8820247b590cc82d511"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "d56b8441541ddf518677c2dd5a9c98d5"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "98b4a4af1832cd20ef70d7cc849c30dc"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "18d80b2c8c2d3cf97eeede34f7123212"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "21e9a999d2c04616334c55a4a2ae3fb0"
  },
  {
    "url": "base/3.knowledge/1.env.html",
    "revision": "c89e40a34a478f3cf8ab9e25f36d695c"
  },
  {
    "url": "base/3.knowledge/1.index.html",
    "revision": "ca71e63c43f2632bb5f2a1d112871106"
  },
  {
    "url": "base/3.knowledge/10.desktop.html",
    "revision": "e3671c7b396ef44928aae398afd3d259"
  },
  {
    "url": "base/3.knowledge/11.compose.html",
    "revision": "e7ccd806790122ab909d2ae49b23151a"
  },
  {
    "url": "base/3.knowledge/12.service.html",
    "revision": "5788052521570629c25e328ddaff8f24"
  },
  {
    "url": "base/3.knowledge/13.find.html",
    "revision": "477a1a804e004df78e7b10deef092f86"
  },
  {
    "url": "base/3.knowledge/14.java.html",
    "revision": "8f5a615b4006c47378c3b5770d48c9d2"
  },
  {
    "url": "base/3.knowledge/17.html",
    "revision": "0d4eb420198176565eabde700d05d992"
  },
  {
    "url": "base/3.knowledge/18.html",
    "revision": "2154ac6acb59149c8ad16eaf6edbe397"
  },
  {
    "url": "base/3.knowledge/19.html",
    "revision": "672cacb3d9599a5e517e7d005e02996b"
  },
  {
    "url": "base/3.knowledge/2.docker.html",
    "revision": "aa73f63221c00e2ec940ae56efb1a95b"
  },
  {
    "url": "base/3.knowledge/20.html",
    "revision": "ab7270ff097feb7acc90535bdce408ee"
  },
  {
    "url": "base/3.knowledge/21.html",
    "revision": "caffc51b173bc95702eeb3310f2608ff"
  },
  {
    "url": "base/3.knowledge/3.image.html",
    "revision": "e9885dc94529cf9c84fba32ff551f666"
  },
  {
    "url": "base/3.knowledge/4.net.html",
    "revision": "849e1040a886ce06de32ac98658049da"
  },
  {
    "url": "base/3.knowledge/5.file.html",
    "revision": "6c4157cf1fce8284c5b0a84906183c9f"
  },
  {
    "url": "base/3.knowledge/6.container.html",
    "revision": "4810d5189b38f1ba9a1380c9af2a7a72"
  },
  {
    "url": "base/3.knowledge/7.dockerfile.html",
    "revision": "227016bd3cc6d472626d44e4a206dbbb"
  },
  {
    "url": "base/3.knowledge/8.share.html",
    "revision": "af8028c2890cf0cf26b16a8093eb197f"
  },
  {
    "url": "base/3.knowledge/9.dockerhub.html",
    "revision": "024a9a72ade876bb09315b5f9a284ec4"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "0db7e358f540a62ca97d7dc0c37af00f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.recursionAndDynamics.html",
    "revision": "136846052669ed67dbf8e12bd08d7c85"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0d3b5e7718b17219a4b7e79ea8f038b9"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "58a256126a6d41e808537a741a548d1b"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "b89000076369e17381bd4fe4647eaeff"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "0097b16831350548d1e0efcc62c32652"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "5fe9600b0d07eb30d898982a2cc18131"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "77b4deafafd02e493f40d6964972403a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d80801c238b2a9893b0370144def42b2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2fe78e999fb5eccddb2df7fe36825bf4"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "6e8f121ae198ddf6bd69efa368e06c46"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "c96ebcc909ec73bd33e74dcf4fab4e3d"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2fc2ed6dd57756cdc7224aac696380dd"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "f4b081f42691bc9244e17eedc116e26c"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "52eee7a1fee730cf5991c31612f941d7"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "e1df224df17eb1034c30e4137537bdfc"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "f8c6f24472a386ad9310d5111a1af751"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "a64d6f4092a745beab6d0ec745e37f8f"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "e70660cc4dc89d6fff8e1fbfaa775c14"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "27c6d03ac5d35f89d2ac28a430bf5901"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "e25db6243765ddd60f2da6214721811d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
