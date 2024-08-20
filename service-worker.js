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
    "revision": "04344f6d19872eb8991816eea6176943"
  },
  {
    "url": "assets/css/0.styles.663915ca.css",
    "revision": "410e6e1342be989a157392311419a463"
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
    "url": "assets/js/10.01dc419e.js",
    "revision": "d7f079db5383002fe40b1113a93be6aa"
  },
  {
    "url": "assets/js/11.4e70e7fc.js",
    "revision": "b256ba3d4fc26f7105d0b375f6f97521"
  },
  {
    "url": "assets/js/12.db6fb6f0.js",
    "revision": "44c577e1911dd96aef5dba7c3fd6fa39"
  },
  {
    "url": "assets/js/13.0ba54acf.js",
    "revision": "7654eccb8176726ac99a6db907b00412"
  },
  {
    "url": "assets/js/14.6c0c55be.js",
    "revision": "c4dfe6f63996cf7a360019134e9a58bb"
  },
  {
    "url": "assets/js/15.11da56e9.js",
    "revision": "5f172f767be99416abbda71918deb8d5"
  },
  {
    "url": "assets/js/16.5572b2ae.js",
    "revision": "52aadb269223e08ef179e2e82dd282d1"
  },
  {
    "url": "assets/js/17.8a59ee9a.js",
    "revision": "32fb16ee8b87e9da40b7197d9eaa671c"
  },
  {
    "url": "assets/js/18.3b74d2cb.js",
    "revision": "e764d06a853858d0bacb2367bbf9b118"
  },
  {
    "url": "assets/js/19.c2f6d462.js",
    "revision": "ddddf770996d5788e13c9947f31f4fb2"
  },
  {
    "url": "assets/js/20.82cc4a6a.js",
    "revision": "2a5c963df1c72c51aa7889cfb605d946"
  },
  {
    "url": "assets/js/21.77b4bc57.js",
    "revision": "a409a555e650a03423a61019e3cd9480"
  },
  {
    "url": "assets/js/22.7265e120.js",
    "revision": "b0002c7dbddcddf01db96dd9797e21a9"
  },
  {
    "url": "assets/js/23.6ee78efb.js",
    "revision": "927776a67027a47ab209be02f6891521"
  },
  {
    "url": "assets/js/24.752746d7.js",
    "revision": "e5802136b5ddb360018db6512e54b4fd"
  },
  {
    "url": "assets/js/25.fda9fe2f.js",
    "revision": "accd0c0ab25c1980531ae0282ce08d18"
  },
  {
    "url": "assets/js/26.2443c6fd.js",
    "revision": "d8e0f1fcbd0818174893f7e49ca9487f"
  },
  {
    "url": "assets/js/27.ee2d56dc.js",
    "revision": "187ad8ae6dd47c2bfee8690a50f8420a"
  },
  {
    "url": "assets/js/28.30d95a20.js",
    "revision": "7be24dbfff032744c3cad5666437f392"
  },
  {
    "url": "assets/js/29.d2d9b702.js",
    "revision": "c06a9aba49a25bb6f2d6770ae9177b59"
  },
  {
    "url": "assets/js/3.11a1f95a.js",
    "revision": "1d8f2eebce2d8f42e10bab5cf14e1009"
  },
  {
    "url": "assets/js/30.18326487.js",
    "revision": "3f979567a2ba564dfc950a6a2bd0d5bb"
  },
  {
    "url": "assets/js/31.f36f6965.js",
    "revision": "c16456971e2513e6c0ae5e08f8d58e1f"
  },
  {
    "url": "assets/js/32.93dc717c.js",
    "revision": "09e1f5f8e272a6e12824885eb25ddccf"
  },
  {
    "url": "assets/js/33.c339f4f3.js",
    "revision": "3dd4ed03a96eaaa3f66857f041ae081a"
  },
  {
    "url": "assets/js/34.c0bc6920.js",
    "revision": "27a4558ec90ed5991e7ae6bcbb179a78"
  },
  {
    "url": "assets/js/35.dbf02e62.js",
    "revision": "6de099ae5d485f735f5500bd302d3ac0"
  },
  {
    "url": "assets/js/36.395bb1e5.js",
    "revision": "8f4d8fa8f5444b7a7305e2e3f7dd3d1d"
  },
  {
    "url": "assets/js/37.feb46af9.js",
    "revision": "3592e1ff00a2a38ac74863a6e20d2a3c"
  },
  {
    "url": "assets/js/38.f01f65f4.js",
    "revision": "f56cb2af391f56b10341a0f3d531cd39"
  },
  {
    "url": "assets/js/39.394c6fdb.js",
    "revision": "bb60150e4a5ac1b0805e9bf2591e5b5e"
  },
  {
    "url": "assets/js/4.f6d47f62.js",
    "revision": "4c18b5b9c14ae008e9ad698efd6992c7"
  },
  {
    "url": "assets/js/40.16c109c8.js",
    "revision": "dec054b45c89bb3ac07446073394471f"
  },
  {
    "url": "assets/js/41.676c1ef9.js",
    "revision": "271018cd10f0019e4ca7677c150dc289"
  },
  {
    "url": "assets/js/42.9a04f249.js",
    "revision": "61a42b2d6c2c15aa0e55d775fd0808ec"
  },
  {
    "url": "assets/js/43.1f7a2e43.js",
    "revision": "2840a13259a3446d67b61b510821f0c1"
  },
  {
    "url": "assets/js/44.bdcdc85e.js",
    "revision": "7be7ccfe551d5e57f0cd3f522783cdd8"
  },
  {
    "url": "assets/js/45.dd4aba84.js",
    "revision": "6310462e50f58eb8b08ee594e673fd61"
  },
  {
    "url": "assets/js/46.794cb6f7.js",
    "revision": "56474d097f9055fc4b6066ca5476f40b"
  },
  {
    "url": "assets/js/47.55a95548.js",
    "revision": "198816146e21ce2dfdc727c07b1884c0"
  },
  {
    "url": "assets/js/48.5362561f.js",
    "revision": "1c7306e98aa9132647c10d54f659bb56"
  },
  {
    "url": "assets/js/49.aef6e33a.js",
    "revision": "7c4e282cab05645fbc631706851bafbd"
  },
  {
    "url": "assets/js/5.01687d6a.js",
    "revision": "df3cae2a87f500db60a5d7272e16eb39"
  },
  {
    "url": "assets/js/50.c70789ea.js",
    "revision": "2f5fa0c183596d0e2780ad4513af08e0"
  },
  {
    "url": "assets/js/51.ade277a5.js",
    "revision": "0322534d80210a18af854f08d339e003"
  },
  {
    "url": "assets/js/52.1973a91a.js",
    "revision": "db52f1281df8d2bbfc0f58cec9e0a45d"
  },
  {
    "url": "assets/js/53.6d31fc1e.js",
    "revision": "033d4991f1e4022196f3de457a979b2e"
  },
  {
    "url": "assets/js/54.8789183f.js",
    "revision": "aa59b96fc329b328888875574f1281bb"
  },
  {
    "url": "assets/js/55.ad8a9caa.js",
    "revision": "ac4e1ff56b36c10f400aea9833699eae"
  },
  {
    "url": "assets/js/56.9e8f1a0f.js",
    "revision": "400de9736e160c359e41565274f0ac51"
  },
  {
    "url": "assets/js/57.9924e92b.js",
    "revision": "a1d86e125cdc369416e85ca09b2bd464"
  },
  {
    "url": "assets/js/58.a05da85c.js",
    "revision": "66720eb345c078b30fd2914ef1f97597"
  },
  {
    "url": "assets/js/59.4d1ab8d7.js",
    "revision": "514fbe8999d9b68f5b144374ac601175"
  },
  {
    "url": "assets/js/6.f8d3b4db.js",
    "revision": "f4252e6ca9e28ea27804063c0d14fbc9"
  },
  {
    "url": "assets/js/60.e85f156c.js",
    "revision": "8b869a598c809e3b99030e206a49ef27"
  },
  {
    "url": "assets/js/61.9af9039d.js",
    "revision": "c46db6a62852d8cd349dc28221d33282"
  },
  {
    "url": "assets/js/62.669843bf.js",
    "revision": "f0c13b9ae53e71c15ac8cfdebdefe353"
  },
  {
    "url": "assets/js/63.3c94f67d.js",
    "revision": "cac4cf972b98336331cee6aec9f3d819"
  },
  {
    "url": "assets/js/64.190bd232.js",
    "revision": "0216f3d4ce9a5693fa6affb84ecf02db"
  },
  {
    "url": "assets/js/65.a76fd7ba.js",
    "revision": "ffb90b714ce59ea2b78ade8a021f202e"
  },
  {
    "url": "assets/js/66.6cdeecfa.js",
    "revision": "c67624b45ecdbea97737c397ad0d85f5"
  },
  {
    "url": "assets/js/67.ae1a6168.js",
    "revision": "0d0d690f5d5b27c080b592ddf5374643"
  },
  {
    "url": "assets/js/68.7d6d8a28.js",
    "revision": "fc4a4b3a581a150456cc596d54831ae4"
  },
  {
    "url": "assets/js/69.d26771d7.js",
    "revision": "23e25321ac4022a00e278091146a09cc"
  },
  {
    "url": "assets/js/7.2dcd5128.js",
    "revision": "017f92fb242ca503b0ead4e3f5fc282d"
  },
  {
    "url": "assets/js/70.27cce3e7.js",
    "revision": "b5830e689d59320feed92cd56caa0982"
  },
  {
    "url": "assets/js/71.031c8074.js",
    "revision": "3fc09b65af41136f5f8a86142acf83d7"
  },
  {
    "url": "assets/js/72.5c7b3e83.js",
    "revision": "2f34ca843278907abe2ae49d8108cbd7"
  },
  {
    "url": "assets/js/73.7eba87bd.js",
    "revision": "cdce173a8f8c1b4fae3202d64687e76d"
  },
  {
    "url": "assets/js/74.621bf116.js",
    "revision": "7e06f9b7794da0ecb58ded8ca62ccb1e"
  },
  {
    "url": "assets/js/75.edc3e7bd.js",
    "revision": "e2e264c863d586690012c730d18228ad"
  },
  {
    "url": "assets/js/76.8fa958ca.js",
    "revision": "e4847103e38dd60160bd274859da9814"
  },
  {
    "url": "assets/js/77.18e6a923.js",
    "revision": "c43564192370f2b5ce464525bce3e5bc"
  },
  {
    "url": "assets/js/78.0485325b.js",
    "revision": "c96442fbe82af64d6768244ffbc21f66"
  },
  {
    "url": "assets/js/79.d3a80d21.js",
    "revision": "1943b9e6d1383e615521da4080c69cb4"
  },
  {
    "url": "assets/js/8.f6f5565f.js",
    "revision": "bfe1648fa40520ad926a556f2f7fb923"
  },
  {
    "url": "assets/js/80.c59a0ec1.js",
    "revision": "a0bf70a0c550af3bb542884d24a3970d"
  },
  {
    "url": "assets/js/81.4123eebe.js",
    "revision": "2c39924be03c3240ef01bc6045ec9c75"
  },
  {
    "url": "assets/js/9.d7a7dd21.js",
    "revision": "b7b72763e7644a5e84ffe14825a5e9ea"
  },
  {
    "url": "assets/js/app.4bf85e82.js",
    "revision": "b58eb676d13e93b32ed10ce0c3eccdec"
  },
  {
    "url": "assets/js/vendors~flowchart.941652b8.js",
    "revision": "1d8c5660d73958e5f2026f9ee5d9ca79"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "bacc8bacfbd54123c62761396cbf32ae"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "aba070d24837f471f63185e5bb5a5e1a"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "a5caef8244ae4e04fc95d73546db4fbd"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "38eb059742f96dd2a61f293795fc3651"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "486edf2e59cd26952e1bbd9600ffeefe"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "8554fd679537263f9de303626d6d3940"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "bf72ee6b9c1c942f57dc461a2dd7fc4a"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "388ce8fff625f46b24a8a15c65a3a896"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "f3cf7e2fe7c9bd1a52ffbd18869d3851"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "bc6460a3ecbd623665577b9ca579adce"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "1b49a40192e60f69bb16f8b758acc473"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "21da5c1490cfd16ad72cd5911ee2a43b"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "c4a66510104fee738e5d718ec9247256"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "671e94138ef9c4fcfe96ac42e820e0f3"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "93327046a61477e4cac723de203bb2b5"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "6c74079eaa29262bbac3ccec67b0ac9d"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "9bb868c2a7ed2ab5520d95fd2bd64c87"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "4e8238bc2e01079e2f21eb9405f02a5a"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "81a5399cd834ac689be974c6335742ab"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "1b953b384f7e85b02cbce388daac8ce9"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "525c528fcddd19090446106c425fd8a5"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "1625c8d50a957d7601427fceb7336d34"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "682f133cfc35861214d501b68a9cd507"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "f173ee0afc4c528dd76a0b4eeb1d976b"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "8ae7bc11f06ae94bbf9f5ba8fb58f6bd"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "01c5586863cb4742cadbe3ccbf2d02d3"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "defdd55dd5234b1c0104959f17d364ec"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "3ec5438699afb3b7f545bc84145ffb1e"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "c336276138cdffde148acd8a68fc4760"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "b8eb59f48aa1e1501908c6eab143a634"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "91fc640888b5ec1b277bf1e08e610d54"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "75ad192e924ce66e28eef7700a4d3ca4"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "020f31a15e518468fc945d262c73b2ad"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "5f7ced37cf2576689e63058913cc9946"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "bf95938f88d3b60790ef15b1cf98e8e1"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "f44505cc02d435232e45140bb190ca02"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "626be9582cc3b155f908fd4767361703"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "722d823ce8df98f7cd4ffa3ed91394a2"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "238e464d8b588d3d5ad26dfdd17d918e"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "47145f683832c1eca50ffcc8c06f9abc"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "8744581f5a6ae868ca2d4e08200a635f"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "2050fe2d51250d891b463770657b79f2"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "ae6d123cf15ab03ee078a70ddc108df4"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "a9f483057b3bf3d8f1f3e7535bdae2b8"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "7a3ff29406fb2182082ce799425400ed"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "hello_wasm.js",
    "revision": "2acf69e2d1cabe01750281c18386561e"
  },
  {
    "url": "home.png",
    "revision": "38cb8179276e2b223a0fa01fc2d5f58f"
  },
  {
    "url": "index.html",
    "revision": "acd464d9aaf8d51b5d2c211cc0ddb62b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "c0d0ffcf5a9f94961f5850ae21388556"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "969f8f4b7e630405fcbe0acbce17eb4a"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "95b001597c48ad7956d200cf96dd1d37"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "169a90cb50007a30fca55c67751cb4e2"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4e9e68046456da5a69854dd094fb3ca2"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "7572d2a92ef03a5a4ee0604eb6e6990a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "387754725ff295747b463e4b3ade5dad"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "34ab12c4f6640ea9dbc58729cb13f89d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "50bc902b66ce78edd7141b056fef3a12"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "30839cf5f691d869d7d6e78bf96fee16"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "155db75f858c4d781a09a9d9d401509c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "1eea1c0fecf9b349b9cf8b888e3435c8"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "a52055d9c1c0b93531d5ce54acf392f0"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "5a90a8e2219575abb46d1186470e1b68"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "a2ffb0746f1460ecc2087ed04f203dc1"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "f695d3ce016a019c7b0ffd6c767c4a7e"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "3005e91e7e1d39734fd4ff188c98f6fb"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "d28f18b8a97e1254a224c9c6f2253378"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "3f6e2374f95b42bf7f7ce87c0b7524c3"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "fde21930cdd382230a0f92b5438d17a3"
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
