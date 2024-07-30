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
    "revision": "748bc26828832cc7e754916886f1b90f"
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
    "url": "assets/js/16.554cd2eb.js",
    "revision": "153b00a32243fe84079066f69905e456"
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
    "url": "assets/js/20.9e46a5fc.js",
    "revision": "759b516ffff08f1ec51236a22be65735"
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
    "url": "assets/js/23.33d062a9.js",
    "revision": "d130dbc979c10460dffc1f3bfa0e9f78"
  },
  {
    "url": "assets/js/24.b922df95.js",
    "revision": "236e8126aced7badaf7bcef2fbc195aa"
  },
  {
    "url": "assets/js/25.281be722.js",
    "revision": "a6ecca55df7c70303d28a654576c3937"
  },
  {
    "url": "assets/js/26.74649ca5.js",
    "revision": "30e8ed4cd739edf55d96b1340d4530a8"
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
    "url": "assets/js/34.a6c6ba29.js",
    "revision": "50006595b02810eccf737c0fa2f5f39f"
  },
  {
    "url": "assets/js/35.4c8195f3.js",
    "revision": "3a0e4968f53e891e777284edc481286b"
  },
  {
    "url": "assets/js/36.1a28c205.js",
    "revision": "2f32c6c5d2a679f256f394eb722c680d"
  },
  {
    "url": "assets/js/37.feb46af9.js",
    "revision": "3592e1ff00a2a38ac74863a6e20d2a3c"
  },
  {
    "url": "assets/js/38.36ff413e.js",
    "revision": "7f3dc376e34abbed021bd91bdc235df5"
  },
  {
    "url": "assets/js/39.394c6fdb.js",
    "revision": "bb60150e4a5ac1b0805e9bf2591e5b5e"
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
    "url": "assets/js/42.81e024cf.js",
    "revision": "5bb1ec31a02fba718a6cbe488ae2e5e7"
  },
  {
    "url": "assets/js/43.b4005999.js",
    "revision": "aa7c665874b0cd7b2b804881537b233c"
  },
  {
    "url": "assets/js/44.8b2e914d.js",
    "revision": "9b802cd0ba5681661030a16bb5fea6f6"
  },
  {
    "url": "assets/js/45.9b49ad34.js",
    "revision": "b77287f99a6bc56f4a0810268d76bea4"
  },
  {
    "url": "assets/js/46.cba1e56f.js",
    "revision": "c10310832a83c9b582e38cb169889255"
  },
  {
    "url": "assets/js/47.d211abb3.js",
    "revision": "c52fa06c1bf715127cd3da16dd8b96bb"
  },
  {
    "url": "assets/js/48.6e469215.js",
    "revision": "23efd47e97c0417adffc25977ed83f08"
  },
  {
    "url": "assets/js/49.e1c7d239.js",
    "revision": "d779d94e475f2184dfd07ffb041df3cb"
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
    "url": "assets/js/51.2b03a324.js",
    "revision": "5579b89cade2c8dc68424e082a596db1"
  },
  {
    "url": "assets/js/52.ba58f881.js",
    "revision": "70bd239fe85b42572eb6740101861b8f"
  },
  {
    "url": "assets/js/53.c1f8dd55.js",
    "revision": "a90a3ddab1358519596ac273cc9b0c65"
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
    "url": "assets/js/57.4594972f.js",
    "revision": "769c311621cf5447a8b9fcde5a14dd6e"
  },
  {
    "url": "assets/js/58.ad14ebf5.js",
    "revision": "009aaea5805f37fa88cefae6ac438558"
  },
  {
    "url": "assets/js/59.8c5d5648.js",
    "revision": "945f8ac182c0e3d27ab4b32080147cec"
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
    "url": "assets/js/71.f1985a9b.js",
    "revision": "25e7c0218e78bd8f236239d1e4d7f356"
  },
  {
    "url": "assets/js/72.9e8bf812.js",
    "revision": "e95b426b7f15e0d39edba03576021b1e"
  },
  {
    "url": "assets/js/73.8e19b014.js",
    "revision": "fadc0cf35066083f1a03132c9c5e551e"
  },
  {
    "url": "assets/js/74.4b8075fc.js",
    "revision": "599f5813d90214470c9e924a92cbfadc"
  },
  {
    "url": "assets/js/75.8edda6e0.js",
    "revision": "8ba24a3a732c6c13bc5b55a16f9840de"
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
    "url": "assets/js/app.4d2172d2.js",
    "revision": "488a644a66db49ea2be0ddb9c5bd4eeb"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "49142f153dabc46a9e630e4ae6d74850"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "95c0179cc09def462bf134d77026b2ad"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "baa67fc456578a9fe94a754d45c1ba81"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "6b49790467a9458b1e12452efa72e94c"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "99c2140a6bb0a79f98eefdd2c4a01fdc"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "11edf59ea9bc47ccb1e0e44c29b7d0c3"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "28e22f61d221cefc9a68e4cacdaf687e"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "4509c49667d9566acd5a1801dffecc18"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "65369493cf1a0b19b1aaffffbb4e7538"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "3cc0da4ef5b9931e6212b13829176769"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "d0a995fe0c6e75cc967139613df56d0f"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "1162ca52de4996fd44f67585915ecc79"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "a9886e3d209d093e42def78b794e7be3"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "365ea069158388443018e0f19f279df6"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "fcfb7cdd95ad10a1c5c78f278a71dfd6"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "80aee85c2fb0aaacb67acaed51e9125c"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "11023412592aed5b50446c5cd4e6fc8d"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "4473ec7b7c0e34943a7990c232acd530"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "158c358a7600a4deb614f5ab0efd63d9"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "79c2dd7fe27dcba3abd864a23da162e7"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "28180c6a233ebeedb030e0307007052b"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "8a49568053da9fb8f3d1d369f11df3e0"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "51ad6a8874f39c579f904c061607e706"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "7dd4ea1e42cac981bf23f997c3dc41f2"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "c2c31706b40a1ccbe3bcd503a6afc843"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "47b17369829d075f73d1365167affdae"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "65f9f523fde89b66c23e151058b70426"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "3800956c95013c5d7c71e4f337d931c9"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "6e5f9875e18cd89c9392c9163f20958c"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "86ecf87f845c611485d5941b12ecb843"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "430028e5f7116c58901a2fcb2f43c1bb"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "0d7abd28aea0940e54241aca66a28b5c"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "6cd27ec68067e3678a0cbfdb514419a6"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "8a10709e5d8e4b92aba0de3dc46b1cac"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "a8ca38f0254dea2497df3f0406492121"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "e3d2f8c0aa231ad25331c6ecc60a3164"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "5035d2f1c9088da68cc9036fdcc6825e"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "702ec613fb97600076df982e1a8a3a85"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "f0245c74f41a12686a532f2b3a86d21d"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "6b502266c1606f1c0e01ce3a44191f43"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "54e4374b35bada8c15b910a57334a4e0"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "9102042d4f6f537e43bd0f5153f9a4bf"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "9a6903ccace701aa31d775b6bd9b1812"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "642639c0b4dc9d9911c8efd050478e88"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "380bb1f3b4bb3ac423e0d21386e7fd38"
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
    "revision": "73e86d5518581e80e55b94a367f09ef7"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "1a2860446cc38b29afe701e9854db6fd"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0f099477dcc67f9551cb1d730cc91a0e"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0a8719d8bb0eb87a6c8c07077a48fcb1"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "3fea0f2b8348305333cbd029e172dacd"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "80a86fd24caa4c74205a41e1ef678e31"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "31528a41fcb45685163fed1c866ea7d1"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "67fcdcb365d70c0888ecba8ac815f827"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "cbf2100a7efb4ca14ca991746c0b4011"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e6bf98e469a588ca82ef4089382c3c7a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "53cc8e98bffc02534bb849969b64d6b6"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "d24d1de7e91e5f4c897013d2039f8ce5"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "048c54bc984ca7610832a413964aed7d"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "8e576f5647b0866add6979db55688ba0"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "1f01d934883af3844a892c632ef02338"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "c6dea49b39ff7a8a2fed8693e27b279e"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "39b0527e6431ca38a0d7ac75c427ed2c"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "557e3202e98ddd5b2ddbe7a20146ae2d"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "f496ba1b84e31448739bf8a5697c767e"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "a5ec5facd0a9b86937823e5b64b8aea6"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "ee523b10199aeb717be226765359d067"
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
