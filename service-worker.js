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
    "revision": "678887b5bd60247ab9afbc785a918139"
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
    "url": "assets/js/16.df4007d4.js",
    "revision": "321a19681c7bd329327f5fef69e6b27b"
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
    "url": "assets/js/20.efa69565.js",
    "revision": "a37dd16adee3784d5d04bbb7e37a34ec"
  },
  {
    "url": "assets/js/21.437658b3.js",
    "revision": "c22cd4e42729bf8bdfffc1031ed36d01"
  },
  {
    "url": "assets/js/22.9e247695.js",
    "revision": "8ee92d6fa9758d9a4ef932e6340b7371"
  },
  {
    "url": "assets/js/23.e6ca794e.js",
    "revision": "697037dff46cf6ee2221bc1542655c73"
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
    "url": "assets/js/26.2443c6fd.js",
    "revision": "d8e0f1fcbd0818174893f7e49ca9487f"
  },
  {
    "url": "assets/js/27.b56f129e.js",
    "revision": "e9fd73fe4e32a1178584b251fb24f048"
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
    "url": "assets/js/38.edbc0d6e.js",
    "revision": "395946d5ab51f340d8ac835d745e16ee"
  },
  {
    "url": "assets/js/39.11df74f9.js",
    "revision": "1dca1ee59535c1797f5e9efccbeb1612"
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
    "url": "assets/js/50.85dd3169.js",
    "revision": "3702dabb239b472c4101ec1a4211552c"
  },
  {
    "url": "assets/js/51.0bf117cf.js",
    "revision": "71d5de5236dd7e22d54e299f7737a780"
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
    "url": "assets/js/55.ce1c6752.js",
    "revision": "02baf0ad69d6fd9b00f6ffd74f3be0a9"
  },
  {
    "url": "assets/js/56.21246de4.js",
    "revision": "8d82f8ea641887e4e2b8c021437a7dd1"
  },
  {
    "url": "assets/js/57.3fbcef79.js",
    "revision": "1b40f1d770ad1df103df917eb33a66f7"
  },
  {
    "url": "assets/js/58.ad14ebf5.js",
    "revision": "009aaea5805f37fa88cefae6ac438558"
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
    "url": "assets/js/61.6919cff6.js",
    "revision": "f4ba6fe8ab8f94f00f732907c41e8ced"
  },
  {
    "url": "assets/js/62.227ef146.js",
    "revision": "34c2538d8fcf0e252abf367c6567bf6a"
  },
  {
    "url": "assets/js/63.e0d19838.js",
    "revision": "e6f8d03fdf608c92de695da9fd4130c2"
  },
  {
    "url": "assets/js/64.807fcbc6.js",
    "revision": "de56e173a778754824d34c925376bfa1"
  },
  {
    "url": "assets/js/65.5d4fe0e3.js",
    "revision": "b3370f146d2c7311c6afe1a7b9fe0848"
  },
  {
    "url": "assets/js/66.29c2c5ee.js",
    "revision": "3173d97afce54395b3775bfff5d958da"
  },
  {
    "url": "assets/js/67.e4d897ab.js",
    "revision": "aa3902d7da9a223e19f6aeb5d0cbb9b4"
  },
  {
    "url": "assets/js/68.55dfb41f.js",
    "revision": "a9e2ed2d0a7ddf093c688fc6b653e91e"
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
    "url": "assets/js/70.eea7d614.js",
    "revision": "8f5df112c423944643f434d4037fc65c"
  },
  {
    "url": "assets/js/71.7f8bfa45.js",
    "revision": "fe840c29dc645bbec1a3f4e600a423b4"
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
    "url": "assets/js/77.d15399e0.js",
    "revision": "97dba7d6a060cf584994c7d03a3489c4"
  },
  {
    "url": "assets/js/78.1970c91c.js",
    "revision": "68a6a702512e8a8a342cfcc07574a6d9"
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
    "url": "assets/js/app.50bcc351.js",
    "revision": "6cc0a5f245f5b44c0adbffa439d0b1a4"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "b40c350ee206198282e1383eaa8a60f9"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "cb74a771a5fcb8ba84ef5290f09f0622"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "f2aa3aae954576b1a7f55bd3064449a3"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "4c32fde3e2d60c2a803fd020fd8e432c"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "c193b09f42002481b4262b72af9c1150"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "08a29c2353e536d167f61bf763b242f2"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "1ae4b8ea1215530ed03aee4cf77bf998"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "bc29f5e1f15f1212dff3394fdf3615d6"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "4a9ef8778f4c21dc34a11d82e4183ba5"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "239d53e218e4ff8a8194a58349d005da"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "33c57e1910d4b4a33bd210f4a54398f6"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "3ef1a7291223f1f9f38b62126266a278"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "3ba56c51a97e9964d9a54bad7620f8e0"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "0a1975de7cd81d2c6eb58c131dc58ca6"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "b5c1b05aa5b7bdf7f83b462f18ba1050"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "22c8a75c0d399bf4feef3180057104ea"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "f12aa6b5a4f1cc914fe33fe2b4f39406"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "12c23406b70b1fcdd225e3422ae9999c"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "891c6fe78ff79355d7835e6ca593bfd1"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "a16c2c255564a65c718ebe51cfeb7c0a"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "7d444e4f629d543512ffc61ac4f07a77"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "f707dcdea24ec27fc7a741c6dc0b5583"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "709bc545c20c407a90d6f894887e6739"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "99c81bc0c408c9c447a2779b0390ced6"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "175a0f8b45ca0683e909dfc83200116b"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "bf6924f8c5a1fb59c77f70b8420bc00d"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "2bc1b25e3658910c676cc18ec4d098b5"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "8b184e0a9bf2946bb81859ee6c38b7c5"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "85492f3c26e74e710c11f72c4d402457"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "20c4ea6cf7e6bd56a3295e25408025ea"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "1f8d7830be85c1967e64d73a4c662725"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "4e928061198dda18943a4221df61fb55"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "6826a09dc7a41e3650a34ae49c4c09b7"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "cfedcd262e5dc130b97d1f87812cf0b5"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "7b6e47e9f65137f48e83158eb439a565"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "aef8941139e6cbcfc1e9517e21bab2a0"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "34c4736ebc60bd478003f3ffed6aaf97"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "21b1f767fc84f1709c0dc96b94adb3b0"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "a9b27d5d9c031722ab38e0b65a0326d9"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "deeddc2f67888ace7d2341e958fd0d3f"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "0f8665fedd4e96c61f7d35bc1c9a6639"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "4793117d5f00bad3f8dcf049f90de919"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "cc003b9df21909550f366b1705e11f34"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "dad164aefb9e17891222792f619ec6a2"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "1a6edc0c807737c5cd20d3be73c1af56"
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
    "revision": "17e88ba29184eada36cf9c6f27227039"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "d57c2f5a4d2f0f9be22ff4694ece8bff"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "5bc22916db6765282e8be2a578c654f0"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "25f2582ec67ee0baa029087c50c01fad"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "67507daf955ca995acda6c70e5fb3e59"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "9ec05bbeb938ce8ff6e00f091be0615a"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "921efd8a4c23035e91f58fc70681ec99"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3cd245ca2854211fd8b8e76c351376be"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "548bdd61f0a23ef85133415863ff0c72"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f97e7fe2e8770b2519c9467a4ca49dc2"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "c825a80f7919b849e691ebe939adcf38"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "adac91688565b26f61e2df8d030c229a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f89e57464335f8fa00347024bbe2b138"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "74d78d4afaaa5b96527f44b0c751ff89"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "03dfe1e01d81d0f63ff9c8d1f2a02a2f"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "17c737722395a8989cfbeb2a091f78d1"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "37c362868eaae1a038608a9e49a2cd1e"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "8b617da2422ecd37ce7bc4ae42eb561b"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "31344a669a184def001cfd1eff11d0a0"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "22c9fcc8d65a9ef19782a27c645257f6"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "1ddc3f46d990bea729a03ecf506294dc"
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
