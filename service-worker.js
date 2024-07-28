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
    "revision": "1e155432285996f26770a322ae68d0d0"
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
    "url": "assets/js/23.6ee78efb.js",
    "revision": "927776a67027a47ab209be02f6891521"
  },
  {
    "url": "assets/js/24.752746d7.js",
    "revision": "e5802136b5ddb360018db6512e54b4fd"
  },
  {
    "url": "assets/js/25.9b1e9ff5.js",
    "revision": "63a0e249669cc5a25cbb2e0c1bd16cab"
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
    "url": "assets/js/31.591cc4bb.js",
    "revision": "d696d7456c06ccbb6fa6cb9abb91d204"
  },
  {
    "url": "assets/js/32.715b0364.js",
    "revision": "3ea230aeaf9ea76dfa77c8f9a29118ed"
  },
  {
    "url": "assets/js/33.b2fba2e8.js",
    "revision": "95c0470ba3ff0f6414dcd00614267340"
  },
  {
    "url": "assets/js/34.758615fe.js",
    "revision": "fc1f2c6a7e596d437d4da4a04f3ba979"
  },
  {
    "url": "assets/js/35.9fe99219.js",
    "revision": "0bec428a6f7606ce6b4379881bfa7970"
  },
  {
    "url": "assets/js/36.c35340e1.js",
    "revision": "78a6635e496b2c1cb21b5a9fe5a7d6dc"
  },
  {
    "url": "assets/js/37.59c8b337.js",
    "revision": "fd86c5eb9492bef5b610c271beb343c3"
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
    "url": "assets/js/46.794cb6f7.js",
    "revision": "56474d097f9055fc4b6066ca5476f40b"
  },
  {
    "url": "assets/js/47.55a95548.js",
    "revision": "198816146e21ce2dfdc727c07b1884c0"
  },
  {
    "url": "assets/js/48.193bb707.js",
    "revision": "3fdeb79824b9914943ddf175401d1e91"
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
    "url": "assets/js/59.052f0735.js",
    "revision": "0cefa08183ec9570b51264c924d25f48"
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
    "url": "assets/js/63.d3a7d615.js",
    "revision": "d32608871fe918e60e2e149289363931"
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
    "url": "assets/js/67.ae1a6168.js",
    "revision": "0d0d690f5d5b27c080b592ddf5374643"
  },
  {
    "url": "assets/js/68.5074b394.js",
    "revision": "02edb29db0d1d3a60d8015ff5f3844a8"
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
    "url": "assets/js/70.62e2e754.js",
    "revision": "0425201fe71e887f72005e842e758cf4"
  },
  {
    "url": "assets/js/71.7f8bfa45.js",
    "revision": "fe840c29dc645bbec1a3f4e600a423b4"
  },
  {
    "url": "assets/js/72.191b3fe1.js",
    "revision": "ff9fc9702b1daadd9931f76d4a77d85d"
  },
  {
    "url": "assets/js/73.7eba87bd.js",
    "revision": "cdce173a8f8c1b4fae3202d64687e76d"
  },
  {
    "url": "assets/js/74.2177b4a2.js",
    "revision": "63330a7203566f269b849caba0197bb0"
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
    "url": "assets/js/app.ac3c15d5.js",
    "revision": "a86fd7ad38c5a7b314198433ecbb19c3"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "5e250fdb02ae55573392c0edbd4944b7"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "32c25b39e751c1593ca3a5d523fd872e"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "d4777e202d3269ef5c6ffb8479bd464e"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "42dfb6c6045474b5c267f66b08e0205c"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "21cc9e45e38e2c13065a628661cea3b3"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "de05540acdbc87325e9e5b9828d59f41"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "753af0341452399b5e15ad235605aa9c"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "a64a6c513e06124cbfba603289c5f729"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "02f3c7a12c5efc34fdb667850cf4a1c4"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "c7deb6ff0f6d76181cce6d47f1c63901"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "a0d838a2430db366ccb354f19a76a137"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "b919c9970313a15ebf2c065d5bdcac38"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "4435867143118736e0d2ed35bf9410dd"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "f22fcaa093f44f5d18c6905d06358a33"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "d380e54051723042689dfd46e093366c"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "53f1e2a3b561c7c985431fad865c13b4"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "862e3dbed8c445f8bb0359432e515e22"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "28641179f48df13807407c5f607fa7b6"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "e9b6f975380382f7ff636beff2645a25"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "6219ca4b8b14d57da79967dee794f6b0"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "db86f5dda5440790fd57d85bbb42503a"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "bad3312a58574e7ce21470c547a700df"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "48ce7773e8b0a071900b04ac00500eb8"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "f920d70d46df1b0a854519ede8f1905e"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "26709667283d3f39df3eabbb2822c6f4"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "9b325260534b0c6b966b30a0c92ff032"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "a489263e4c28111d8fe679a7fdfcc13f"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "01688c9cd86ffc0a8069bdca07dfe8f0"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "b075d1d1a5e984315e90349356336187"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "15d0000d1bad2bce51e9cd711de0fd00"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "dff1c9892e094a5f42ae2bb4adc88971"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "71d067096e61767569c439a7f237bb6b"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "d1612769109f990334f3c540792b372b"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "2437e7d8b4d960cd9e32aba259dddb4a"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "d21a4fe091358120c573870935d7c29b"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "063cc4b627f7a1c43e227038a299095f"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "97c1daf81500b28f081e458dff734029"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "e428b8e0300a64f30a2826995ba909b5"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "a1d1363720083a9c3e98282f5a5697d5"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "3ed1979447f2329ea878a5c47f8aaf08"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "6acbbaf312f9f4ac78d99163e4356332"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "1c017537518e753e0e11ca828858958a"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "24ab7c9102955605d837c2587b1a05be"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "17a72a43ae8ed9e2624a04922d1ac3be"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "31c264d22ee554847df1283b260532d1"
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
    "revision": "40656f6f04a387c1c1ff66012dafa81b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "eba3a0e66102d1a044df1f69dc600ba0"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "104a7f45ea0806cb510a4a81d316951e"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "42d7317021430cbebb5271df8fd9a593"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "73c977f60d708d979c88f3b9870c5a82"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "cbc81972ac7187b0bda1dd9dc23d5d84"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "db16bb69fc8442463d794c88151db6d5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "e86a540165f8d29991d0b7ef346d1afe"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b914b10276f8940eab5820cf3db8ab85"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "751965f3eb0c60a58da7503c71e1375f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "3d7c40f58e113b3387381055efa1466d"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "dee12228eb60db12d5907f1c40c5615e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "6d67b76ec4f04d79cea81c7bdabc08bb"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "2defbf2f7835a6f8493352513408fa11"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "76ad11ba6556721bd6f23a7a930b0994"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "21cd0a128aa6ce6f9d185bbc2baaa0c3"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "9341f654a22da927f830f0d19e902d28"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "c1ee224c9077d59dbea171818ee10e5f"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "b80dcfb31aefbf1f076d9cb7493709d2"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "1e52b90bacdd83f34a1e671f49784ae5"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "02f9789da6598ff341b58ec1829aa6ab"
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
