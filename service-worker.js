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
    "revision": "49741a4f4f3ea36c057d5d03644a957f"
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
    "url": "assets/js/10.53215030.js",
    "revision": "9d5c1d52e63e9f2a189cf4a316e1e9b3"
  },
  {
    "url": "assets/js/11.f4f93d9f.js",
    "revision": "7a9879c98f040b42c00350b36fc86e7e"
  },
  {
    "url": "assets/js/12.4a5ff87e.js",
    "revision": "913d07877f7b0dcc828dace47ff359d3"
  },
  {
    "url": "assets/js/13.b14ca8ff.js",
    "revision": "cd7d1cdf396bffda65841f2d01a954fd"
  },
  {
    "url": "assets/js/14.f460b6c9.js",
    "revision": "b696993d0968bbab731ff67305ed2195"
  },
  {
    "url": "assets/js/15.8c8ff43a.js",
    "revision": "bfb0abf96009784165abe9cf17749e75"
  },
  {
    "url": "assets/js/16.2d4f52fc.js",
    "revision": "935286d17f96552c13d32f285104a0dd"
  },
  {
    "url": "assets/js/17.a1ffd8df.js",
    "revision": "3fb0935d5488f0f7ac86a2df41e18705"
  },
  {
    "url": "assets/js/18.3c1b7597.js",
    "revision": "2b52f9890fd991f90f8ce651c2c58a9a"
  },
  {
    "url": "assets/js/19.5d7964c1.js",
    "revision": "e6cbd58405af9ccbf928871c1547bb40"
  },
  {
    "url": "assets/js/20.82cc4a6a.js",
    "revision": "2a5c963df1c72c51aa7889cfb605d946"
  },
  {
    "url": "assets/js/21.66034d5e.js",
    "revision": "c1c2078c922a639f369807f88c8b0ec8"
  },
  {
    "url": "assets/js/22.657d9057.js",
    "revision": "71364806733b3823090630933ddfdf03"
  },
  {
    "url": "assets/js/23.e50856a3.js",
    "revision": "4dd1ce4d671fb07e55596873fc329b83"
  },
  {
    "url": "assets/js/24.e0e58162.js",
    "revision": "c918d14bb4f38f8cad0c38c8a8b9c8cf"
  },
  {
    "url": "assets/js/25.fda9fe2f.js",
    "revision": "accd0c0ab25c1980531ae0282ce08d18"
  },
  {
    "url": "assets/js/26.23b347c7.js",
    "revision": "cae4bc082d765d58574aa67b6112c129"
  },
  {
    "url": "assets/js/27.ee2d56dc.js",
    "revision": "187ad8ae6dd47c2bfee8690a50f8420a"
  },
  {
    "url": "assets/js/28.b4db1210.js",
    "revision": "95e79fb98ed09eb41214bb6ffd4723b4"
  },
  {
    "url": "assets/js/29.3719d674.js",
    "revision": "2c74e41a58f96fa21af1d69b3c5102e9"
  },
  {
    "url": "assets/js/3.c27290e1.js",
    "revision": "8d55216ffdbb48c59600953a8237738f"
  },
  {
    "url": "assets/js/30.9a05c151.js",
    "revision": "2e5b717f9222f18575c25f81bff0ca4f"
  },
  {
    "url": "assets/js/31.a6a3059f.js",
    "revision": "9e3531bbb254a5e1af22727d42caa92b"
  },
  {
    "url": "assets/js/32.1fda5573.js",
    "revision": "264410e5ebe968b5d7d461677c9609b4"
  },
  {
    "url": "assets/js/33.b2fba2e8.js",
    "revision": "95c0470ba3ff0f6414dcd00614267340"
  },
  {
    "url": "assets/js/34.1b15c11f.js",
    "revision": "ef90809916ba0373330fa8cfa27b1a0e"
  },
  {
    "url": "assets/js/35.4c8195f3.js",
    "revision": "3a0e4968f53e891e777284edc481286b"
  },
  {
    "url": "assets/js/36.fba04f18.js",
    "revision": "99ee2dcd2d1488a31b85b24eae49bfde"
  },
  {
    "url": "assets/js/37.49681451.js",
    "revision": "8c87384a3570c2e3d614993be54cc49d"
  },
  {
    "url": "assets/js/38.edbc0d6e.js",
    "revision": "395946d5ab51f340d8ac835d745e16ee"
  },
  {
    "url": "assets/js/39.250b6b49.js",
    "revision": "762f9a3762a13fab4f2ff1afd55ca52d"
  },
  {
    "url": "assets/js/4.74a1bec2.js",
    "revision": "21f218a3e1ee256a405a1ed887e32943"
  },
  {
    "url": "assets/js/40.d5fc2086.js",
    "revision": "c0729b6eba40c9d7f9050e1d1dda5c08"
  },
  {
    "url": "assets/js/41.3e60a76e.js",
    "revision": "0d64504a18459d2e4c95f44502fb9d28"
  },
  {
    "url": "assets/js/42.f9da16a9.js",
    "revision": "2977167d8ecf565541f8e1ed3ae4ce14"
  },
  {
    "url": "assets/js/43.1f7a2e43.js",
    "revision": "2840a13259a3446d67b61b510821f0c1"
  },
  {
    "url": "assets/js/44.e3f98105.js",
    "revision": "fa4bed3b42e5f0b01f1d4a7e0fee71e5"
  },
  {
    "url": "assets/js/45.dd4aba84.js",
    "revision": "6310462e50f58eb8b08ee594e673fd61"
  },
  {
    "url": "assets/js/46.cba1e56f.js",
    "revision": "c10310832a83c9b582e38cb169889255"
  },
  {
    "url": "assets/js/47.73f8d300.js",
    "revision": "17558e0720dc0933c42adf71d0014874"
  },
  {
    "url": "assets/js/48.d2b780f5.js",
    "revision": "1e3df98caa94d9b6b28123ea327c02ea"
  },
  {
    "url": "assets/js/49.26c2294d.js",
    "revision": "e5e6da02860c7ef0bb7b748f3ccb6790"
  },
  {
    "url": "assets/js/5.826c4154.js",
    "revision": "959fc55045fc883fb200c7b02f291595"
  },
  {
    "url": "assets/js/50.c70789ea.js",
    "revision": "2f5fa0c183596d0e2780ad4513af08e0"
  },
  {
    "url": "assets/js/51.b907727d.js",
    "revision": "c8b39edbcf46887cbf49760fed0fc83b"
  },
  {
    "url": "assets/js/52.9c3fb411.js",
    "revision": "c1cf03110c1ebdaf8b2dfaaeee635427"
  },
  {
    "url": "assets/js/53.4853a712.js",
    "revision": "e2ecce8b54702419006249325e4c7ae5"
  },
  {
    "url": "assets/js/54.afa8084f.js",
    "revision": "6ff7c63e964ce3bca85dc2985798ca36"
  },
  {
    "url": "assets/js/55.ce1c6752.js",
    "revision": "02baf0ad69d6fd9b00f6ffd74f3be0a9"
  },
  {
    "url": "assets/js/56.ac136aec.js",
    "revision": "03800817a7c150a5663b1ce4088206fa"
  },
  {
    "url": "assets/js/57.3fbcef79.js",
    "revision": "1b40f1d770ad1df103df917eb33a66f7"
  },
  {
    "url": "assets/js/58.151560a9.js",
    "revision": "dd894a14a1e3ca0994029efbf96b33fb"
  },
  {
    "url": "assets/js/59.40c0e74e.js",
    "revision": "13b6ed4d17b046bbf15b1ce7bfe2a9f8"
  },
  {
    "url": "assets/js/6.7e9be2be.js",
    "revision": "687716057b39921c907afeb734edafe5"
  },
  {
    "url": "assets/js/60.2bcf413d.js",
    "revision": "2f0740c2132deecc42c9e9e9672d5d61"
  },
  {
    "url": "assets/js/61.99df685c.js",
    "revision": "f1f164205c4c91a77ed17f9894fd4d64"
  },
  {
    "url": "assets/js/62.48438835.js",
    "revision": "1212345fc2370d679115a3a56d1e8a79"
  },
  {
    "url": "assets/js/63.3c94f67d.js",
    "revision": "cac4cf972b98336331cee6aec9f3d819"
  },
  {
    "url": "assets/js/64.72ce0194.js",
    "revision": "b7e40ef916710b08af31d930d68a5d15"
  },
  {
    "url": "assets/js/65.a76fd7ba.js",
    "revision": "ffb90b714ce59ea2b78ade8a021f202e"
  },
  {
    "url": "assets/js/66.54d4a572.js",
    "revision": "3a19448dd954fc1aee1fc8b7e8a647ef"
  },
  {
    "url": "assets/js/67.e4d897ab.js",
    "revision": "aa3902d7da9a223e19f6aeb5d0cbb9b4"
  },
  {
    "url": "assets/js/68.7d6d8a28.js",
    "revision": "fc4a4b3a581a150456cc596d54831ae4"
  },
  {
    "url": "assets/js/69.55b39078.js",
    "revision": "afa9f94eb1c0cddb0125a31710872203"
  },
  {
    "url": "assets/js/7.5a8f837e.js",
    "revision": "642a7a06a13009d0a61808359fe00e71"
  },
  {
    "url": "assets/js/70.27cce3e7.js",
    "revision": "b5830e689d59320feed92cd56caa0982"
  },
  {
    "url": "assets/js/71.ab0dd370.js",
    "revision": "61025ee57a4c06f4d91c88bf8d0a21d7"
  },
  {
    "url": "assets/js/72.93d4c2e7.js",
    "revision": "a58190ebefb838c30eee29a35d7792a8"
  },
  {
    "url": "assets/js/73.ed0e4209.js",
    "revision": "d361c5f0553f87e4505d1b9561e44f62"
  },
  {
    "url": "assets/js/74.4b806f8e.js",
    "revision": "49fc4a4a0625a733ca1e3c02aaec07b4"
  },
  {
    "url": "assets/js/75.7c15a582.js",
    "revision": "9428793a2ce8cebd84b451ffb0e50347"
  },
  {
    "url": "assets/js/76.3147123e.js",
    "revision": "ed082056cf10a0e328e1e1830ac8e777"
  },
  {
    "url": "assets/js/77.18e6a923.js",
    "revision": "c43564192370f2b5ce464525bce3e5bc"
  },
  {
    "url": "assets/js/78.8f1c83a7.js",
    "revision": "b8ea83d50feec300dbb7f80f854d0a93"
  },
  {
    "url": "assets/js/79.d3a80d21.js",
    "revision": "1943b9e6d1383e615521da4080c69cb4"
  },
  {
    "url": "assets/js/8.8dc207e8.js",
    "revision": "bdbf4b3407d2f67b54d977719001c4e8"
  },
  {
    "url": "assets/js/80.acdbe596.js",
    "revision": "af0e6fe39e3dde4032ab72e597fcbc10"
  },
  {
    "url": "assets/js/81.83eb583f.js",
    "revision": "6d25a94aae4c984cb0d169753117fcb4"
  },
  {
    "url": "assets/js/9.723253af.js",
    "revision": "62c8821939453233d88f12ea49b6f07f"
  },
  {
    "url": "assets/js/app.e8bb53c4.js",
    "revision": "701b7237ea9e92bd96981deac06a7875"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "3a5a0831e226506f369fddc040af8099"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "d591cb4f3d1ec79b69285588224499b2"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "a8ce4c4d5ca3cf11e01a531e8addd3b4"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "d67e06fd8de814fd1572e79119893598"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "29976ba1e1028bc6e80a0f6768096166"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "8f33a44f3f403ba2224faf72d8d48827"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "4fd196a7e4d6aa081ab90422659803bc"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "73e454c643627f1a64f040f395acb648"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "3ac8c757fad605d996f8843530f3f7ea"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "59317b8da4725d77d21650c9a813cc21"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "afb3d361b0d94b8ae8e3edf07582a2ff"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "5a8978d63ef69c98d6505d15beaf09b1"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "231860397ea10b01fabf0a0003a9c058"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "df29a6d17acfc9b779375de5c24124e4"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "9548ce1800ee22022c0e7ef78b8868b8"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "2df075a59714d6619080215a84c9b87c"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "5cb2fbc8b8400268fee4e1fca189817e"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "8cf14626db85c1648da51fee77c06c33"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "6f77f44636ea454e492efb403f0a4428"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "bfbdb8eef903afec32559fb7b015f700"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "ff22edc934077da4e03355488b5e136a"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "b30c417eef421fe36ebab4b21fa74fc3"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "124ab2d07ba34815f1d419359472a9cd"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "39de87ce1796d5e21a8b868d3cdd1df1"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "32d23255bb8d726dfddc140a61e34541"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "9ecb5270918849c917720781de01c74c"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "cf43a139e9a9d573b0c59cded4a98210"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "b70f1757662502ca522ab43f1b5172c2"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "640d57600aa2bcc3bc27fad8da972be0"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "3ab6a6829d73a520a1bdb4d9a45a5679"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "ba9d3101ac5d97a573ccfccc4316ede3"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "48ee2775811f2b4098d7c8e2100a8d82"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "686a4728c07e46df9cc653abb2e7505e"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "b932b47a061a592a516d9abce28d6f17"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "3b85a4cdf57bf95d02b3895a74ab9b60"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "c29116ac04dea0ad31046fca69d3b6c7"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "57af3b7abccbc32050e1c5ef5d3f8063"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "a93f73327e77f2e03cdd9bcdf36c8022"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "d7dc8dbe1e130e3ebb8fd43280f898f4"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "de063ed6822016d72bb80f480dc369f7"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "2c81438f4d197aa3ef550a1d1f9e9776"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "9590df3395c588ed74c06daaec64527a"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "24997068645358685e22f5befd511f5b"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "16148da06f5eaf79ff8aba072d52499d"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "d961565a88de54979cef616d84719f83"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "38cb8179276e2b223a0fa01fc2d5f58f"
  },
  {
    "url": "index.html",
    "revision": "e24ad11a3894c70f4f4b0330793bff28"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "822de7627398ba4256f4571c12086150"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "6e652a030e31ab103902a6b42a32ebe7"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "e32c7f187f42625c3619d17e062b0c5f"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e05f38703650d83e1ab85c59350a0f84"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "0a719d7d1797c68c916f05cd7e12f700"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "862d61e74ce8509dddadf86a15ba2c76"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "05ee41c28ae96e502ed5ee8354f3f55d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "5869213841653afab852dfc147936fcf"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "3f512de65e6d36181ecc0554052891b6"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "106972b69a3be400d055233a104aff9f"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "d8c76a625990afb87c8cabc50a3b3c31"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d2ec20f7271f6a5af9eb1864b47a611f"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "d7fc1aff6cc2fd67f6508391555cd244"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "e017a76acd14a155b5a283562eee163b"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "c992a03f6c466327692e8e53a59f4262"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "9ac4612db79eaccad5a3f522da08fa4f"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "1d11460e20e23184a1486dcf0a2fd555"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "e3ebd03d9ee27a81054d9f6f525f0b32"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "51f4c402c19a80acb1158c21de6e0ecb"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "203ddb21ab2b3354b3f1f415de9311cc"
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
