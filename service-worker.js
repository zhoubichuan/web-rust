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
    "revision": "0007da7fe396bb91db1d003c52862a17"
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
    "url": "assets/js/16.66bed140.js",
    "revision": "0ad0c74fce188e5013a61b759db6988c"
  },
  {
    "url": "assets/js/17.2d9be7dc.js",
    "revision": "376dab293f3d56759aeb8afd536e43a6"
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
    "url": "assets/js/20.37ab2248.js",
    "revision": "d0e4cbe77e17065aa6d8a6c9ef53d1f2"
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
    "url": "assets/js/24.b922df95.js",
    "revision": "236e8126aced7badaf7bcef2fbc195aa"
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
    "url": "assets/js/27.ee2d56dc.js",
    "revision": "187ad8ae6dd47c2bfee8690a50f8420a"
  },
  {
    "url": "assets/js/28.30d95a20.js",
    "revision": "7be24dbfff032744c3cad5666437f392"
  },
  {
    "url": "assets/js/29.3719d674.js",
    "revision": "2c74e41a58f96fa21af1d69b3c5102e9"
  },
  {
    "url": "assets/js/3.11a1f95a.js",
    "revision": "1d8f2eebce2d8f42e10bab5cf14e1009"
  },
  {
    "url": "assets/js/30.bce241ab.js",
    "revision": "0c282ff44223d601ce2423e50301600f"
  },
  {
    "url": "assets/js/31.a6a3059f.js",
    "revision": "9e3531bbb254a5e1af22727d42caa92b"
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
    "url": "assets/js/34.a6c6ba29.js",
    "revision": "50006595b02810eccf737c0fa2f5f39f"
  },
  {
    "url": "assets/js/35.4c8195f3.js",
    "revision": "3a0e4968f53e891e777284edc481286b"
  },
  {
    "url": "assets/js/36.a70c70d8.js",
    "revision": "1c05257e4d2883700ba6d2067217399f"
  },
  {
    "url": "assets/js/37.e6cefa15.js",
    "revision": "8b982cffddffe638b3e05a27ce89d815"
  },
  {
    "url": "assets/js/38.d472f474.js",
    "revision": "60c92a1d5912a34952a7aae01bf99f5e"
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
    "url": "assets/js/40.51b2d275.js",
    "revision": "dd7f39c0c41872ed14722cbe4ac44ce4"
  },
  {
    "url": "assets/js/41.676c1ef9.js",
    "revision": "271018cd10f0019e4ca7677c150dc289"
  },
  {
    "url": "assets/js/42.81e024cf.js",
    "revision": "5bb1ec31a02fba718a6cbe488ae2e5e7"
  },
  {
    "url": "assets/js/43.b8ae119b.js",
    "revision": "2b48d74fe729ba3620672fc652cc8e99"
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
    "url": "assets/js/46.cba1e56f.js",
    "revision": "c10310832a83c9b582e38cb169889255"
  },
  {
    "url": "assets/js/47.3db30dce.js",
    "revision": "a0879afb92d227665327b568ee9ea80e"
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
    "url": "assets/js/55.fe4487e8.js",
    "revision": "0cd6e2deeda85878b335b8c589668ddc"
  },
  {
    "url": "assets/js/56.21246de4.js",
    "revision": "8d82f8ea641887e4e2b8c021437a7dd1"
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
    "url": "assets/js/64.6390dc85.js",
    "revision": "5cc1fbdf55d1b0091aa16160cd4d4c92"
  },
  {
    "url": "assets/js/65.5d4fe0e3.js",
    "revision": "b3370f146d2c7311c6afe1a7b9fe0848"
  },
  {
    "url": "assets/js/66.d95fc313.js",
    "revision": "e21e3649b77c0109476b25f476b2da31"
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
    "url": "assets/js/72.1ee11877.js",
    "revision": "595c116780f89817a86b3d4b1a029e40"
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
    "url": "assets/js/75.79a14478.js",
    "revision": "e5018370768c63ae1c8f9db5fa4c10f9"
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
    "url": "assets/js/app.1b2b29bd.js",
    "revision": "d7f7bf84eecc4a86986cad10e480f46d"
  },
  {
    "url": "assets/js/vendors~flowchart.941652b8.js",
    "revision": "1d8c5660d73958e5f2026f9ee5d9ca79"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "028b73665083ebef4a5b7201b74b9edd"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "c886456ac03dcaf302a28ffa12b3c26d"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "75c14e769c7e5f929ba7606437e93340"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "622877bd07246f0ca36ca486eb4ac68b"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "fc639ea68a5bd2699b03276324f34c0f"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "232960c35c727f36d67de62af0af0faf"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "6f88e55e4e8bf2fc481eb7f5826e6dc9"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "b9fe8f642ff410289131224ed630241b"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "e4610d888e33d4d4aa3868c8834f8a84"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "6ab7268a47751edff0e3b1ed8834136e"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "aeb1e4eaee6699effb5736bd3d16ed36"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "d9882d63b119c4605279f894579856df"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "7bb444ee6081fb7aa44039afe5ca2ef4"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "490f147993f130444c4b91847db32877"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "925e8a0b2ee41c58520002edb7937a6c"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "c2d30298a2616ec27feeb43e00115cdc"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "44a098b86d0d1b0c7ba05756b0d601f6"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "d24fc85244a7c06a479e76e74813be37"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "40052b8845e0e919165a4b565d33d2ea"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "1d65a44b219ef76b297d891b907466ef"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "de0220983df54fad198874421bdb3eb1"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "629501c455fe572a0ea8f26424d17fb7"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "b8ee8e9f368fca0caf72b5f87b25a209"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "5bd01da89414d64de0cbec9027440fca"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "1c1419aa0c2a1e91044663bc8f70bd5b"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "17e179e3c2705a8b42d66ba55963dbf3"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "cbfec63a31ba52629ee114ffde5f988c"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "5383953fd80ed0eb6ffde57eeec19e21"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "b5597e0a9bb5df591fe5f96c4b91400f"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "249ca93b56338c5efa5c13662f0f077f"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "5bd83cbf000d78ab865788c1f4b80b83"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "175b4669399294e373b4dc44219bc43b"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "d1cd99d889a349a7415f056c582c9e21"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "2566320958d406773b6089fde557fdfa"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "ea7856b4b063dccc72c974620a0a5830"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "82c394870eb1e4943a464591ed7f298f"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "f78c99a81f324d4ebce7258fb4c09ec2"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "3eb23750806e555ece741274153f6162"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "69e56f1a741d8f12b829ddaaba831e95"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "aa872becdc02bae1144f1c5e6fadff1d"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "5bcaa767c60efb0e88b8887f7835b9b0"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "b81a7d2336bf9395ccfdb5487334fb52"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "d964c9f4a49828ea92ec74ffd6a8a044"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "807e1af6ddc4a01df994c42671d7d16d"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "adf0884e305cc8320520906cad4ea46d"
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
    "revision": "bcf58505a6221261d71c4ed063507d16"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "2f77fbc14145c31ec4b9b998d1e64662"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0929c0266da262116c95553bdb346142"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1676400a1d3fce1a4325a2aad3b72b81"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f5ea09c8a8c94950340ea13f1aafa441"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "f304d7343f04adf9658da8f52172b042"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "859e5219b351a15e09c509fd3666f4ac"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "a5f5d2383bb0df5ec9bf0c3cd10e1baf"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "77cb5712f0853c06b259951e738b1914"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "0aead06b46744d9ecb994337e90b6f41"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "c6511dc31de27ece6e2a2d4877dc6cf5"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "7ae809ef2f3195c69bed7453ed63894a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "14d5d267ae817e22fbc27ca716db3f00"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "2430d8cdfcbc03c44acd82a5fb4f7cc3"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "cdebac0cca464ac9b3127b3f73b5f723"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "7ba7a6802f9365593130ab92aa11f0ff"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "ed250f964dfccf0c17bfdcff88aebf9d"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "b4414c3d0e479c87ee7edb0c5d024417"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "5ae4ac3f73859347c677631a5a7bac46"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "a9f94dc51c4918a506ae880a049c6317"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "84e1f54dce10477cdd53c4ad5af0b782"
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
