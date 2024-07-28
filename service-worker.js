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
    "revision": "3838f83251f153795943921a9bd0152e"
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
    "url": "assets/js/16.2017af99.js",
    "revision": "cf7223bc785dd4166fd12384f458ef1c"
  },
  {
    "url": "assets/js/17.a1ffd8df.js",
    "revision": "3fb0935d5488f0f7ac86a2df41e18705"
  },
  {
    "url": "assets/js/18.3523477f.js",
    "revision": "8667effae02c60bfe9992fb736d32e18"
  },
  {
    "url": "assets/js/19.76a0ee67.js",
    "revision": "47d6b73eeeed5896b9f795484e17e427"
  },
  {
    "url": "assets/js/20.efa69565.js",
    "revision": "a37dd16adee3784d5d04bbb7e37a34ec"
  },
  {
    "url": "assets/js/21.3c309c74.js",
    "revision": "4f39ebff861050b8b4e7474ddeaab368"
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
    "url": "assets/js/33.17f80f66.js",
    "revision": "49dbcc7fcbcf25e0b4c4cc6f87886131"
  },
  {
    "url": "assets/js/34.1b15c11f.js",
    "revision": "ef90809916ba0373330fa8cfa27b1a0e"
  },
  {
    "url": "assets/js/35.6c53af42.js",
    "revision": "cd5ba84572bccec7f919bfd59d814cff"
  },
  {
    "url": "assets/js/36.395bb1e5.js",
    "revision": "8f4d8fa8f5444b7a7305e2e3f7dd3d1d"
  },
  {
    "url": "assets/js/37.87c94868.js",
    "revision": "c85d0d06c11ea75f7b7b13fcc66a7ecc"
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
    "url": "assets/js/41.676c1ef9.js",
    "revision": "271018cd10f0019e4ca7677c150dc289"
  },
  {
    "url": "assets/js/42.82da97b8.js",
    "revision": "6b7a1c563d1ed371c8fe00068b08cb89"
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
    "url": "assets/js/49.7a589a92.js",
    "revision": "b793ecf5d155dce8db0464adf05157fa"
  },
  {
    "url": "assets/js/5.826c4154.js",
    "revision": "959fc55045fc883fb200c7b02f291595"
  },
  {
    "url": "assets/js/50.f684fb33.js",
    "revision": "1a017d8e387cb5ba028ce8a63cd87ae0"
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
    "url": "assets/js/55.ad8a9caa.js",
    "revision": "ac4e1ff56b36c10f400aea9833699eae"
  },
  {
    "url": "assets/js/56.50c6b56a.js",
    "revision": "3eafbc5906843819b7f441ed961183c7"
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
    "url": "assets/js/59.4d1ab8d7.js",
    "revision": "514fbe8999d9b68f5b144374ac601175"
  },
  {
    "url": "assets/js/6.7e9be2be.js",
    "revision": "687716057b39921c907afeb734edafe5"
  },
  {
    "url": "assets/js/60.a302750f.js",
    "revision": "089a074d5b74ec97710e46424d5d23c4"
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
    "url": "assets/js/63.d3a7d615.js",
    "revision": "d32608871fe918e60e2e149289363931"
  },
  {
    "url": "assets/js/64.190bd232.js",
    "revision": "0216f3d4ce9a5693fa6affb84ecf02db"
  },
  {
    "url": "assets/js/65.006955d1.js",
    "revision": "b657170c6e0cd560854274738280fff8"
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
    "url": "assets/js/68.8505dee0.js",
    "revision": "9b41eac6d47885cb97cee0b866559abf"
  },
  {
    "url": "assets/js/69.25bc8d17.js",
    "revision": "e02cb842cac3be4f7c410a2b31ea2dce"
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
    "url": "assets/js/71.173e56a3.js",
    "revision": "d58c8315c2710c90a17046268a4d131f"
  },
  {
    "url": "assets/js/72.9e8bf812.js",
    "revision": "e95b426b7f15e0d39edba03576021b1e"
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
    "url": "assets/js/76.d572cd6b.js",
    "revision": "8d3ec327e26f1c899ea73d5da451bb2e"
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
    "url": "assets/js/app.ff18af84.js",
    "revision": "4865b1fe62fd60abc3908a366b680fb7"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "3d586031acda27eacc6a5447607a24a8"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "2c7cb8628ec24d3f677508ca38bf62ff"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "fd216f2b09fec0645e7b41e3fa5396c2"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "9fc751bad6182b7dd9fe17c481b6f12e"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "fd033b501b075a09bdd6593a6d403aac"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "ecab4b52e2cf076d2653fb5408b629d0"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "6302b104a146bdb245c3a9b2ecaad865"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "b3396be129d1fb8a1f0b2f63f66a1f35"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "9efc0445918f976a08fe520b7265251c"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "4f601d866223ee4440839f8404e78bc0"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "838f6a6b3a414858300005f22661b6fc"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "90196b1bf3c8280f09555dddd1f52a78"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "ce4f11b6cc1a3bbcdcb601a30fc45775"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "86c0620b8ad71ed88cdb7d2f5dfa6224"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "4cd85718055af342e7c67e367acb6259"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "8f26c39b53436539556d00914d82f9a5"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "5dc20be800801aa47357421778f1c5dc"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "6101ef87a7387858c58a7b90a9e02b22"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "066f006d4b95a5443b0c40437ffb328d"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "6a3208b914f6488b41481b8ce7c7eb3d"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "4521d9b37cf6a4216b7490f9bb1cd5b3"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "98d944d6357defca39366d61f0d2eb65"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "443837639eb771b888212c95c1f3ef71"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "b04f4ff6616c6e43123d283b3f0f03d3"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "2e7056c926605b62fc8e93d5d02b097c"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "5b0c00f5c4b7a3bca55ed1b84496712b"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "9aad2cca441d9f901e0690ac136b3c24"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "1da905cd5387a1c477916f941fe9175c"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "d6ab1c7ba678b4b9cf4536bff98192e1"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "bc05eb504b66883076764f532f19723d"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "9525e43951d81f5eeba77d28e0dc793a"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "efb6578bdc24aa6f80398a04ba22c0c0"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "0d0a606c8122b296d75c7dd6e5ad984e"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "0a0bac74bf52918d71b67a38ea24f36b"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "34fde3311b91ec6d46d510bc31f129b1"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "7b52cfa23a3790b7a44345518a223035"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "8dad2259e2d81b5976791efde1ab81b6"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "1e952d273ab9a63f12593d61866ab4ce"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "e0a5d656c661140ea7a0d68efa33941f"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "a70bf543133999672a456d43ea4bd525"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "52e0e6a13cf801514e5f8847353e4749"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "573b4ad405f2cfab511237ca06042a19"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "d363761a8a2a4ad91d84dfa10c2062ed"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "f73f3327977bc3768b8ebb7d8821ce42"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "36b017f7df46c74a2b0f6442ddad0aa0"
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
    "revision": "331ca301a99e65713c9efcb150b1caa2"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "1d6c3e86811ee412a6bdfe424bde0199"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "ce2a83f94aa394bb692f1f99be050e7b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1dad5fe48c8696e8e59badee745dfbc5"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ab7fe4811543be56c71c1068ba03b950"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "7ecb09a9c17b5903b8a40e12bb2619ca"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "e8689f1e1886cd46ef4043c0766c5012"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "0130754a078108834583f4e3238dba27"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "7560d508834b35f3bb4dfd535060bdb2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "25f7f253488295f0e46d068360233368"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "b3ffcb9eb137611d3276fe13bea88604"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "e9d16d8d12623d56c4dffefcb7368b5b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "8df46bc46c29623203e43c04622d2c7b"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "1eb0f9df51a0c163763f966e590530e8"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "5b96464ec3c7196a33124f2484bf7e81"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "1e0d6320183949f5216f365726f1545a"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "56bdbd9f292df7dfb3e4b0f89d72e096"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "5b818a47bec92da9824d267dec53fac7"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "8a4c82503125909c453f6f85d642a5d8"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "21d91bc91a4a240e66f891e74377eb2f"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "7469134811918856b74a536b575a5134"
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
