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
    "revision": "4c70c39d73a0d54350532099a95fd3e4"
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
    "url": "assets/js/15.6e03c5c2.js",
    "revision": "95ed10a7e5624d15b8d5a7b07abb13dc"
  },
  {
    "url": "assets/js/16.d10edd6c.js",
    "revision": "f9fcafa6fa40ea246de977524ff89276"
  },
  {
    "url": "assets/js/17.4e041907.js",
    "revision": "96cd120f54a01c68afbc766cdf7fd045"
  },
  {
    "url": "assets/js/18.051e2152.js",
    "revision": "3423eb7d1f416e8d96a609c0f0a82cc0"
  },
  {
    "url": "assets/js/19.0c751bf2.js",
    "revision": "79998b2e7accbbdcea456ada3c1f73fe"
  },
  {
    "url": "assets/js/2.591690c5.js",
    "revision": "23b47cf157b5b94c31832174a1eeb7ef"
  },
  {
    "url": "assets/js/20.ff093cfe.js",
    "revision": "f605568efe74dc96f1e440bcfb100d37"
  },
  {
    "url": "assets/js/21.0b8aeb6b.js",
    "revision": "c311d63aee232da0e31112d4c1f74890"
  },
  {
    "url": "assets/js/22.41f81f6e.js",
    "revision": "bdcce4b5dc304b7fdcb4674cb995775d"
  },
  {
    "url": "assets/js/23.01c880a4.js",
    "revision": "2409712bf0af146f5d4b62c2ad41bf19"
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
    "url": "assets/js/35.7b3d21b6.js",
    "revision": "7ce8908e061a8f5c0380e6f4371c2785"
  },
  {
    "url": "assets/js/36.03e7ff23.js",
    "revision": "85250a29d064bb2b19a88ae3a4717169"
  },
  {
    "url": "assets/js/37.68af92d4.js",
    "revision": "4788294f7cfe623abba8a9095ac8d694"
  },
  {
    "url": "assets/js/38.07e44ed0.js",
    "revision": "dd0290516813eca61b8be9ee709f2285"
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
    "url": "assets/js/42.390038d4.js",
    "revision": "72017d34d549045e20782c68425cda62"
  },
  {
    "url": "assets/js/43.f7f34597.js",
    "revision": "0e7a0b4dcba8fe961e58073b94902f35"
  },
  {
    "url": "assets/js/44.ffb84d2c.js",
    "revision": "b208e0fc2aa4db8e2a3d4a0320a136e8"
  },
  {
    "url": "assets/js/45.cac0ba91.js",
    "revision": "638ff2cab6b53dda375f3c1171ee0ade"
  },
  {
    "url": "assets/js/46.78f4de3e.js",
    "revision": "80ce424cfbcf57b29439ef9372a776b4"
  },
  {
    "url": "assets/js/47.b441dc82.js",
    "revision": "e6b8b5d2db031e24b0de5c2122d45e29"
  },
  {
    "url": "assets/js/48.55921ab0.js",
    "revision": "5ce46b0f1c1a3da16767986567d0b298"
  },
  {
    "url": "assets/js/49.f42872aa.js",
    "revision": "f14d422a494d7937bd45339cbe135428"
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
    "url": "assets/js/51.070873ea.js",
    "revision": "b807ebb8c1d8bc736e146b95ca931bfc"
  },
  {
    "url": "assets/js/52.77c55380.js",
    "revision": "2c5cbdad77069934efac0948aa9bfe30"
  },
  {
    "url": "assets/js/53.ae3625e6.js",
    "revision": "849f4bce06aed516cc611070463b073a"
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
    "url": "assets/js/57.387117ae.js",
    "revision": "5603f077b90419cb04c7baba7848c4ac"
  },
  {
    "url": "assets/js/58.2557697d.js",
    "revision": "a96202337291781b8381abcb77c81ded"
  },
  {
    "url": "assets/js/59.86c253bb.js",
    "revision": "e856fdd5d65934bc6583250bcefd2cc4"
  },
  {
    "url": "assets/js/6.47852912.js",
    "revision": "b5ab3d4bc862fd074d8f5c66b5d7b79a"
  },
  {
    "url": "assets/js/60.dd27101b.js",
    "revision": "be3ef57f970e5a769f5c0d9e1a569ba5"
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
    "url": "assets/js/64.5882c829.js",
    "revision": "f8b38d5e744d7b0e419cd1f50167560c"
  },
  {
    "url": "assets/js/65.de221b01.js",
    "revision": "471b1cbd3d1b93e35bd458fa5c5f262a"
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
    "url": "assets/js/app.ea666b1d.js",
    "revision": "170d8ca3fcdae723a7a32a8600ba99ed"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "1265da86f85a5ca649de23c55abe3bb7"
  },
  {
    "url": "base/1.rust/2.Jenkins.html",
    "revision": "cdb7f08b866d79ec7d2f2f17e7e79d80"
  },
  {
    "url": "base/1.rust/3.gitlab.html",
    "revision": "3297d95b543e86195c4a76fefb01e7e6"
  },
  {
    "url": "base/1.rust/4.mongodb.html",
    "revision": "aa10bad669f659a7c503916651d2c044"
  },
  {
    "url": "base/1.rust/5.redis.html",
    "revision": "01b2df69a72e95e07fbe602d77876072"
  },
  {
    "url": "base/1.rust/6.mysql.html",
    "revision": "bae806e5b510867ec54dbf8afb0f2f71"
  },
  {
    "url": "base/1.rust/7.node.html",
    "revision": "238f28c38e8d9bfe0ef4f61f27b63a5e"
  },
  {
    "url": "base/1.rust/8.express.html",
    "revision": "119be21105eb57dbe24c60b4638ba4f1"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "2877a5896646c04a0f0823e156067097"
  },
  {
    "url": "base/2.engine/2.Jenkins.html",
    "revision": "3c4875f91673232dc52f3894642f72a7"
  },
  {
    "url": "base/2.engine/3.gitlab.html",
    "revision": "a36e5deee3da131530ec9f5a933f179c"
  },
  {
    "url": "base/2.engine/4.mongodb.html",
    "revision": "10d44fb4c2d0758317360c4451c383f9"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "6c0749d4aa42ec25ac3bce4c98512d4a"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "4cb5c2558cf2b7614ad2bfd461f36e57"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "6aae3c5884b3fa8a7052e21ef29d992d"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "7a711ee84f9e3ecc7648b5e082efa9b9"
  },
  {
    "url": "base/3.knowledge/1.env.html",
    "revision": "940b124a9b3855655656007d37935161"
  },
  {
    "url": "base/3.knowledge/1.index.html",
    "revision": "5fd227fccccb65cf6cbdc67184356f19"
  },
  {
    "url": "base/3.knowledge/10.desktop.html",
    "revision": "b943e7f02f4fba6d6661d7bdaf995390"
  },
  {
    "url": "base/3.knowledge/11.compose.html",
    "revision": "b328e9f01d788f19e1b9488e1a2cb07b"
  },
  {
    "url": "base/3.knowledge/12.service.html",
    "revision": "c03d13ff02ae6e72e24f78c57b85dd73"
  },
  {
    "url": "base/3.knowledge/13.find.html",
    "revision": "637233cf37a3ea3354cee3a31e186e06"
  },
  {
    "url": "base/3.knowledge/14.java.html",
    "revision": "c421e70ed17ee31ccdb545a1b032aea3"
  },
  {
    "url": "base/3.knowledge/17.html",
    "revision": "ff16e931cd2065b63121387d953fa004"
  },
  {
    "url": "base/3.knowledge/18.html",
    "revision": "a7f8c49078cf10dac4605e8e42276eb7"
  },
  {
    "url": "base/3.knowledge/19.html",
    "revision": "14c017e948b8ef9c8abec40cdb951752"
  },
  {
    "url": "base/3.knowledge/2.docker.html",
    "revision": "5bf091b1bbfca80a1ee51115a5450463"
  },
  {
    "url": "base/3.knowledge/20.html",
    "revision": "8376fedecf36dde3248acc45578a5e91"
  },
  {
    "url": "base/3.knowledge/21.html",
    "revision": "431f819bb98e1e13a71d8fb45037b9f5"
  },
  {
    "url": "base/3.knowledge/3.image.html",
    "revision": "388bf4e9ff30e953c54decc5b53507a9"
  },
  {
    "url": "base/3.knowledge/4.net.html",
    "revision": "066b1b6104debdde2166b1fb7a019891"
  },
  {
    "url": "base/3.knowledge/5.file.html",
    "revision": "63d4077c3a9bbaeda1369eb2c5ac8829"
  },
  {
    "url": "base/3.knowledge/6.container.html",
    "revision": "c05d6ce67147d7671e98d54c596011d0"
  },
  {
    "url": "base/3.knowledge/7.dockerfile.html",
    "revision": "4191a61b348312d53ec90314150c7fe8"
  },
  {
    "url": "base/3.knowledge/8.share.html",
    "revision": "19fa280e8d147a55c4da4a22ec4c028c"
  },
  {
    "url": "base/3.knowledge/9.dockerhub.html",
    "revision": "70270aa2b2792e0136e5db47e40da69f"
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
    "revision": "1c6152d48dfe3ba16f0fc8877dcfd26a"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.recursionAndDynamics.html",
    "revision": "778d0624a1e2419b0b572b937305ceec"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0a0a5c61f6d0c966d393b7bacc429ddf"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "01b1adc65415172b573e17b40efb4a13"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e5163d013e27fa7f6a9a8238a1ddcdc2"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "34971e920670375c8d4a57fee6b14ab1"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "0be3fc13708067839070b1d6cd32e90b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "cf34498050f309aebbd3348fe05e7a7c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a92c886697730a00990a0677cb0b5dcc"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "3ec19ac18e6d580a96e47364acb67f29"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "a90d9d3040f98498ce6612f78670c4f4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "ec360feab1c30e12cdb6a6f66dfa1802"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ce88909045e07b9e343b1176a2c1f8c9"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "1c9dc7dfb457ae774d641a0d7346ac24"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "8ff16e374c5e323eb3d1db174753e166"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "a2928ce54e348c6bbefed4be69a75041"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "25ea16cfaf49c81a805de1c0167d8cd0"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "aeaf81f2a79ba185d66b70ccf76e8aae"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "af20d89fd89fd610788ebf8206a0a1eb"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "f6ca61eba9ec24d8b1a30e4f3f245d32"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "23f3ba241e1493825e6e92c22c4ab956"
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
