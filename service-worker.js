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
    "revision": "270107b325d93966b5bee3e03758c40a"
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
    "url": "assets/js/19.76a0ee67.js",
    "revision": "47d6b73eeeed5896b9f795484e17e427"
  },
  {
    "url": "assets/js/20.37ab2248.js",
    "revision": "d0e4cbe77e17065aa6d8a6c9ef53d1f2"
  },
  {
    "url": "assets/js/21.2b103feb.js",
    "revision": "27fc078fc647552acd555ae10cb0b64e"
  },
  {
    "url": "assets/js/22.657d9057.js",
    "revision": "71364806733b3823090630933ddfdf03"
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
    "url": "assets/js/28.22f02bd9.js",
    "revision": "7fcb4f98773eabe3e7565c996926d484"
  },
  {
    "url": "assets/js/29.80bd18cd.js",
    "revision": "d7f432f05f0b14cf370863aa77c91652"
  },
  {
    "url": "assets/js/3.11a1f95a.js",
    "revision": "1d8f2eebce2d8f42e10bab5cf14e1009"
  },
  {
    "url": "assets/js/30.e5243f1c.js",
    "revision": "3c13e4fbaa03a130f801032e44b3e139"
  },
  {
    "url": "assets/js/31.c3f248da.js",
    "revision": "3175edd4033a9f9826f45a98b5122f42"
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
    "url": "assets/js/36.395bb1e5.js",
    "revision": "8f4d8fa8f5444b7a7305e2e3f7dd3d1d"
  },
  {
    "url": "assets/js/37.feb46af9.js",
    "revision": "3592e1ff00a2a38ac74863a6e20d2a3c"
  },
  {
    "url": "assets/js/38.517e45ad.js",
    "revision": "5a4357df3211d8dae16d28ed8d937450"
  },
  {
    "url": "assets/js/39.3a25077d.js",
    "revision": "3ebced625a9dbf2ca73310435d5aa92c"
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
    "url": "assets/js/41.6cac52ec.js",
    "revision": "51307a2f8328da8b4bd81a7baccc33e5"
  },
  {
    "url": "assets/js/42.f9da16a9.js",
    "revision": "2977167d8ecf565541f8e1ed3ae4ce14"
  },
  {
    "url": "assets/js/43.9f897515.js",
    "revision": "2ed755e3e34ffd10068ac67a98c9715f"
  },
  {
    "url": "assets/js/44.8b2e914d.js",
    "revision": "9b802cd0ba5681661030a16bb5fea6f6"
  },
  {
    "url": "assets/js/45.b77706cd.js",
    "revision": "c1c626a1497494762797aa8a5be8a95c"
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
    "url": "assets/js/48.6bbf970f.js",
    "revision": "619430c36994f05c1216a7d6244b9f7d"
  },
  {
    "url": "assets/js/49.26c2294d.js",
    "revision": "e5e6da02860c7ef0bb7b748f3ccb6790"
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
    "url": "assets/js/51.2b03a324.js",
    "revision": "5579b89cade2c8dc68424e082a596db1"
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
    "url": "assets/js/54.8789183f.js",
    "revision": "aa59b96fc329b328888875574f1281bb"
  },
  {
    "url": "assets/js/55.ad8a9caa.js",
    "revision": "ac4e1ff56b36c10f400aea9833699eae"
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
    "url": "assets/js/60.aa552199.js",
    "revision": "63f2a61c9f63fe05946d5d0da27994be"
  },
  {
    "url": "assets/js/61.9af9039d.js",
    "revision": "c46db6a62852d8cd349dc28221d33282"
  },
  {
    "url": "assets/js/62.227ef146.js",
    "revision": "34c2538d8fcf0e252abf367c6567bf6a"
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
    "url": "assets/js/65.032cb41a.js",
    "revision": "b35141cc282c74341d43b32f62bea312"
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
    "url": "assets/js/68.7d6d8a28.js",
    "revision": "fc4a4b3a581a150456cc596d54831ae4"
  },
  {
    "url": "assets/js/69.20118fce.js",
    "revision": "1569fcb2f97255b838cd277fc38abead"
  },
  {
    "url": "assets/js/7.2dcd5128.js",
    "revision": "017f92fb242ca503b0ead4e3f5fc282d"
  },
  {
    "url": "assets/js/70.62e2e754.js",
    "revision": "0425201fe71e887f72005e842e758cf4"
  },
  {
    "url": "assets/js/71.f1985a9b.js",
    "revision": "25e7c0218e78bd8f236239d1e4d7f356"
  },
  {
    "url": "assets/js/72.5c7b3e83.js",
    "revision": "2f34ca843278907abe2ae49d8108cbd7"
  },
  {
    "url": "assets/js/73.f00259e6.js",
    "revision": "5595218e6d73dc2468fa2a4f7a1a3320"
  },
  {
    "url": "assets/js/74.4b806f8e.js",
    "revision": "49fc4a4a0625a733ca1e3c02aaec07b4"
  },
  {
    "url": "assets/js/75.b2dd0c14.js",
    "revision": "28a0028e832c968e1f9fe098d49c79ad"
  },
  {
    "url": "assets/js/76.8fa958ca.js",
    "revision": "e4847103e38dd60160bd274859da9814"
  },
  {
    "url": "assets/js/77.ae32c3f3.js",
    "revision": "9f48984a49ac1996871bc3b240db329b"
  },
  {
    "url": "assets/js/78.f828c56a.js",
    "revision": "5f94a7ca4ee9f7fe8130471fb6dd6b0a"
  },
  {
    "url": "assets/js/79.5efdde06.js",
    "revision": "f6452fb6e0ef3ad2f93b9198690e8d36"
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
    "url": "assets/js/app.2391ab69.js",
    "revision": "2070a9d90af050281edf2d4f686b7777"
  },
  {
    "url": "assets/js/vendors~flowchart.941652b8.js",
    "revision": "1d8c5660d73958e5f2026f9ee5d9ca79"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "76f86dc1040e0ddae3d41e4404cefec8"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "c4d3eaccad74cb4732e72e37f73ea900"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "7b7772e712ef3f273b099efa99f3ce40"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "e5cc0915bc24ca5c66d7f402fe0fac43"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "f6e7937b003a787de0ed40ece5972aaa"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "98b78c75f3305aea5de06d7b86c6a565"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "8a5086de2b9353182911529f6d9912f1"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "040dccb2c27d061803114d0a39f32aae"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "33ba37524b092cf8ca28067ebf604c54"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "ea0569833c94bc4e8a68a1d75db9c62e"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "d61bac4e96fbefb869cf3eeb15cde59a"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "e076ccfb6dabb35c60f99743b027f50a"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "d53cdd638cdd470d654cf3c10956dd54"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "768d40702a64be05812523bb0e9073e5"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "c2c9e95d5cba0df348e50152ac918e99"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "70f72868f9860163a7c307a36c11d9f1"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "8019bd332d3d9071081ea5d55647cd94"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "d8984fc3a59f83bfa08e7207a243db5b"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "2b958b66f8d079bd2be362583d2bb060"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "b623d9622b01affd0fb2741793b80146"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "eafcd0222b92ba65ca45de12ee3cbdfe"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "57238a0499b58a5289414a8bfe6e2cc7"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "16cf3d98c5b684aaf6b083cb39ffb3b3"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "44435d4778f2c7b4e5524af808cfa787"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "4b714e0c747dbfd9f9a17bf0a726c58d"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "f48a383d6a668d90d7877c54f2d1fb60"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "f96f4536568b65f9e621a804ddbff4c4"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "8f1b850250ef094352be6239adbc5744"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "4adf630e9b2d83beca7aba5c677eda8a"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "f2da19b65e2d6c8db73f9a08f3f15850"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "ee540c2dd5bd4af9e7a02cfb02cd9240"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "fa4e4463868fb1603989eb7dd4296bbe"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "2613d5c220403dfaf3ab1d8535875cab"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "7e4ee5c756f13b7276a0c7ae255557a6"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "92192d4003b63a361b47e4f854419276"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "acad08a81a6bfb5e9166f3ce07a4cd22"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "91c73829fa4f88a72e8b0c70caa186b6"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "a8d2d86c984156fcba410bae6e45ea95"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "71a032924bebeb7ef3ff0c082d84258a"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "efbd676e3cb5b67619748d34605a2c44"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "57d6a433e6938d27bb20265a458bfa0b"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "03f4ffc1ef558398ccbf1507e380aeba"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "0bd1dcb54f8a877056c08a2e9e33cb14"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "39f5cc890bcc8fcdf9663374f26c4fcd"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "62a24020d00e25c97ca139e3e0300724"
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
    "revision": "8b55e8c93027345ee76ae89884e5e81b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "cd667fe78d695ecbf176e17cb19f8273"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "50f65ac3f6faddcd5608ed0e86232ed8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b60b33e143ee0216becf4e925923a46f"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "fcd6846576e8c6eda6f074097b76a453"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "d1ffebdd8e56bd01ba445dc3d1228019"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "052766258581bf4a4a92924a26ea2edd"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "46737f3ef55b15fe392c5a7b5fa15f8d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "45d6172d6dc5b46ab93164ad82be9d67"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f94760e36b8310cd1d9f6967086df694"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d6ae6493ba0025616138918edb3570eb"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "69746004d850521d6ac6630f1671902b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "8075eddbcc3a9013ad258fa7aeaea441"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "c72f1ef9ae752f05398d8defbd88c813"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "bd382817ac0563587c00d087103250af"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "7fe365717eca6bfb497c7810681eb9cc"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "81661d038759fda89d5b9f357caf21e5"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "3be4276c78e15dad054b6c18a910b95a"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "954e7e35b9afab485aee28a38a95d75f"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "6112ab5d8274fc74c77655428424c722"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "a057d90fcd9ee166cf69ddf86c45c491"
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
