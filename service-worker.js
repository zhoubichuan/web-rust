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
    "revision": "f3ae58705cad57641dece67bc2ff9324"
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
    "url": "assets/js/16.d4c36629.js",
    "revision": "c6c7d70604a79bee11db8ae5d0ea5cbd"
  },
  {
    "url": "assets/js/17.57c9f3a6.js",
    "revision": "d9c4ae3cde2b17e36140f8b5100d2967"
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
    "url": "assets/js/21.2b103feb.js",
    "revision": "27fc078fc647552acd555ae10cb0b64e"
  },
  {
    "url": "assets/js/22.9e247695.js",
    "revision": "8ee92d6fa9758d9a4ef932e6340b7371"
  },
  {
    "url": "assets/js/23.33d062a9.js",
    "revision": "d130dbc979c10460dffc1f3bfa0e9f78"
  },
  {
    "url": "assets/js/24.7608251b.js",
    "revision": "81ce5bf9a0322ad7934c1205a42b8306"
  },
  {
    "url": "assets/js/25.fc88447d.js",
    "revision": "d3b5e763c5400b58c8eea47d22b6a641"
  },
  {
    "url": "assets/js/26.d7ed26fd.js",
    "revision": "85c62a7c6b52efb8b40803ef575adf29"
  },
  {
    "url": "assets/js/27.429aee7d.js",
    "revision": "f3993e4041fea3a83cea012fae73550e"
  },
  {
    "url": "assets/js/28.91206e3d.js",
    "revision": "0d80efa69fd1de69087d92a937de968d"
  },
  {
    "url": "assets/js/29.80bd18cd.js",
    "revision": "d7f432f05f0b14cf370863aa77c91652"
  },
  {
    "url": "assets/js/3.c27290e1.js",
    "revision": "8d55216ffdbb48c59600953a8237738f"
  },
  {
    "url": "assets/js/30.18326487.js",
    "revision": "3f979567a2ba564dfc950a6a2bd0d5bb"
  },
  {
    "url": "assets/js/31.a6a3059f.js",
    "revision": "9e3531bbb254a5e1af22727d42caa92b"
  },
  {
    "url": "assets/js/32.98a50752.js",
    "revision": "00cbc469caa1873d1695ea4327bf9b9e"
  },
  {
    "url": "assets/js/33.59cbc581.js",
    "revision": "dad04ddb0da78ea006c003b47fc156e4"
  },
  {
    "url": "assets/js/34.758615fe.js",
    "revision": "fc1f2c6a7e596d437d4da4a04f3ba979"
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
    "url": "assets/js/38.517e45ad.js",
    "revision": "5a4357df3211d8dae16d28ed8d937450"
  },
  {
    "url": "assets/js/39.de373037.js",
    "revision": "08112e5e03dce8a2abc81a3233bf3fb2"
  },
  {
    "url": "assets/js/4.74a1bec2.js",
    "revision": "21f218a3e1ee256a405a1ed887e32943"
  },
  {
    "url": "assets/js/40.51b2d275.js",
    "revision": "dd7f39c0c41872ed14722cbe4ac44ce4"
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
    "url": "assets/js/45.fe95eb98.js",
    "revision": "b315a2e2d4bb71db5d6a11257cee215b"
  },
  {
    "url": "assets/js/46.afc466bc.js",
    "revision": "8ecbbf431dbad0b7a24c4e7ab782345f"
  },
  {
    "url": "assets/js/47.d5c3fc8f.js",
    "revision": "d56069ff8275e8194b41d61995565543"
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
    "url": "assets/js/53.6d31fc1e.js",
    "revision": "033d4991f1e4022196f3de457a979b2e"
  },
  {
    "url": "assets/js/54.4d14ed14.js",
    "revision": "6acb5fc91c2a624516a10ed4cb3f499a"
  },
  {
    "url": "assets/js/55.39011ba5.js",
    "revision": "d84aa2096b0f31516a48beebfd394aa3"
  },
  {
    "url": "assets/js/56.50c6b56a.js",
    "revision": "3eafbc5906843819b7f441ed961183c7"
  },
  {
    "url": "assets/js/57.4c709a47.js",
    "revision": "6a079cf491b410381f13df6fe9e0d04b"
  },
  {
    "url": "assets/js/58.625c789c.js",
    "revision": "0e798b3b8ff4c97e7b21a53b5e2a6584"
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
    "url": "assets/js/60.e85f156c.js",
    "revision": "8b869a598c809e3b99030e206a49ef27"
  },
  {
    "url": "assets/js/61.4d418692.js",
    "revision": "aeaa7cc9dbab0e6186ef298276fb086e"
  },
  {
    "url": "assets/js/62.48438835.js",
    "revision": "1212345fc2370d679115a3a56d1e8a79"
  },
  {
    "url": "assets/js/63.d3a7d615.js",
    "revision": "d32608871fe918e60e2e149289363931"
  },
  {
    "url": "assets/js/64.807fcbc6.js",
    "revision": "de56e173a778754824d34c925376bfa1"
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
    "url": "assets/js/68.8505dee0.js",
    "revision": "9b41eac6d47885cb97cee0b866559abf"
  },
  {
    "url": "assets/js/69.20118fce.js",
    "revision": "1569fcb2f97255b838cd277fc38abead"
  },
  {
    "url": "assets/js/7.5a8f837e.js",
    "revision": "642a7a06a13009d0a61808359fe00e71"
  },
  {
    "url": "assets/js/70.eea7d614.js",
    "revision": "8f5df112c423944643f434d4037fc65c"
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
    "url": "assets/js/74.4b8075fc.js",
    "revision": "599f5813d90214470c9e924a92cbfadc"
  },
  {
    "url": "assets/js/75.edc3e7bd.js",
    "revision": "e2e264c863d586690012c730d18228ad"
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
    "url": "assets/js/79.5efdde06.js",
    "revision": "f6452fb6e0ef3ad2f93b9198690e8d36"
  },
  {
    "url": "assets/js/8.8dc207e8.js",
    "revision": "bdbf4b3407d2f67b54d977719001c4e8"
  },
  {
    "url": "assets/js/80.8e1bf8f7.js",
    "revision": "0ba481a3b4e137a44a36afdb75d0dbb4"
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
    "url": "assets/js/app.e2ca2bb2.js",
    "revision": "c1b2199f0250ff6dd5e601e291b6b455"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "79904e4996e0e456b93bbac01784f295"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "83310d99028ea4d56b8be9371a2d3d2f"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "ad05df4c8f4821549f8b28e1a4230b08"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "180becae9e8398d99466db4c3949a85b"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "9e651238dc10823392b18954219453fe"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "7e89223847badc0f219601027dcdbb16"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "152166d4cec8ab7163b3905f2776bec7"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "07b9eb738cc0a99bfe99c2978267981c"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "97b05ed4ad0318fc67815e8cc891074a"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "d89bec86d500beaff32e51892c92542f"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "0f6c17f6f27c2bcb198beacc06b7c607"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "b7f07b40bf53e8235d4db4802099ad77"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "00169f319c7111985e6b8c3fd9d3c82d"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "173656ec9e6900d4203283df040b25b5"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "427d6bd5b815ead65fcc4a2ca5c7608f"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "b6a6901844f10566f7e24d768f3b05a7"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "fc7017005e2c2a3e8d37ed7f3b72b136"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "b5137018e983e875ded24399876e1bcc"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "7255290a93180192a5e401dbb9d25b57"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "7696f78cda24607df38cc445cbb2fd15"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "a9169441666bb3bb80a7fc231bef4cce"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "43aa8239b2c3db6f7b7c6afb4f1d3577"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "06b4c456497cf8ef59303a06670a80a3"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "cdd52ae218086843b0b1e56773374e08"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "2066e2ec96fa1eebb9c4879f03e8924a"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "10f01288ec16a68ecd3978908c96fc34"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "52bb4c4a20920a595153719ba5c71603"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "4b29ad3c7027def08fc9ef3eff633c56"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "46c7ed844ac6c3e51fa8b659df65c051"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "be861df744d4fdb60ed8123bf3269c2a"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "3979cd875f2811a2a73d7e03e7b4bfdc"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "e35c459a6f7f709e667489e341cdc307"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "501719c4fd2f36d5441508b477375c0c"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "bdae78b6ff9dd60b8fc4d61425121e21"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "962046aed845b88f22dae5600e4966b7"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "b51ae65530066023e136eec5900fef43"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "a28f23cb8f213c47ad585fdc03bfde0b"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "df1c14fb6bff7978a22bf267f1e1dfc9"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "c0d440fb96510f25bdb11bf557150536"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "08117b2a5986fbb19d555b7a0bacafe8"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "fe3290bc008edf0a127fc33b38b7d947"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "1b54236962f1873795c870e5ccb2b428"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "d1534ca0991b31e9aaba109c048c0271"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "1ce89878a8e1829c18a700f1eb228674"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "b3299edcc0ca088a16e85b20502378df"
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
    "revision": "2c0d93d9312965df82400768b6225a61"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "bc3806c5774af0a8c432b23c5556aef1"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "fc12bcd3035daf960a5677354475387a"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ecafafcb47713bcf5f2f2a6a0675e632"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f39b3e2d252a5724a5faeb2fa42c9111"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b170c6d6faa107fc4a6acd3769020701"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "cdfdf3907a338274652d1a0b5e914fbb"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "da4e7d97b0741f913efe0f40925b6c04"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "dafd06132b6197e2a24bd51d6e2012b6"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f47f7042e68f4c404419d9e61d83ef49"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f43d5d362b49f47f4dfa574727527898"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "22520bc0f183f60fed7ca5c69f2e8eca"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "a09cbabb3cb1f7c39eaa9d1eb5e7cdac"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "a7260998b10299a5a2984f3411f89e5b"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "ae4ceb5250c7479ffceeddeca4c26d12"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "b2b1ef5efd8f16dbddc395b7889e2aff"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "1adfffe07f94b182fd715e1b60bf302a"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "9cdebb6c3535040004dd010056b31d78"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "a5fbc77ed7aead3499a75293a8a02eb5"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "76f6848b515938773e81dcafdf6191ec"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "de61aee283f65a54ba244b2197a7252f"
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
