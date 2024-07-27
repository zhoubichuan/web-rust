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
    "revision": "6b74462c67c0ee84decc5826e4782973"
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
    "url": "assets/js/20.37ab2248.js",
    "revision": "d0e4cbe77e17065aa6d8a6c9ef53d1f2"
  },
  {
    "url": "assets/js/21.437658b3.js",
    "revision": "c22cd4e42729bf8bdfffc1031ed36d01"
  },
  {
    "url": "assets/js/22.657d9057.js",
    "revision": "71364806733b3823090630933ddfdf03"
  },
  {
    "url": "assets/js/23.e6ca794e.js",
    "revision": "697037dff46cf6ee2221bc1542655c73"
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
    "url": "assets/js/27.ee2d56dc.js",
    "revision": "187ad8ae6dd47c2bfee8690a50f8420a"
  },
  {
    "url": "assets/js/28.b4db1210.js",
    "revision": "95e79fb98ed09eb41214bb6ffd4723b4"
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
    "url": "assets/js/35.dbf02e62.js",
    "revision": "6de099ae5d485f735f5500bd302d3ac0"
  },
  {
    "url": "assets/js/36.395bb1e5.js",
    "revision": "8f4d8fa8f5444b7a7305e2e3f7dd3d1d"
  },
  {
    "url": "assets/js/37.a5a775b3.js",
    "revision": "c82d6aa074df513f4c09b6244358f55d"
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
    "url": "assets/js/43.9f897515.js",
    "revision": "2ed755e3e34ffd10068ac67a98c9715f"
  },
  {
    "url": "assets/js/44.5c2a32e6.js",
    "revision": "da48ce5ee3fe66d787cbdf0a9e3e9b4a"
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
    "url": "assets/js/47.d5c3fc8f.js",
    "revision": "d56069ff8275e8194b41d61995565543"
  },
  {
    "url": "assets/js/48.d2b780f5.js",
    "revision": "1e3df98caa94d9b6b28123ea327c02ea"
  },
  {
    "url": "assets/js/49.aef6e33a.js",
    "revision": "7c4e282cab05645fbc631706851bafbd"
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
    "url": "assets/js/57.3fbcef79.js",
    "revision": "1b40f1d770ad1df103df917eb33a66f7"
  },
  {
    "url": "assets/js/58.ad14ebf5.js",
    "revision": "009aaea5805f37fa88cefae6ac438558"
  },
  {
    "url": "assets/js/59.f96fb5a6.js",
    "revision": "717d320166749cb44c8f192f660bfcbc"
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
    "url": "assets/js/61.4d418692.js",
    "revision": "aeaa7cc9dbab0e6186ef298276fb086e"
  },
  {
    "url": "assets/js/62.227ef146.js",
    "revision": "34c2538d8fcf0e252abf367c6567bf6a"
  },
  {
    "url": "assets/js/63.d3a7d615.js",
    "revision": "d32608871fe918e60e2e149289363931"
  },
  {
    "url": "assets/js/64.c58009c4.js",
    "revision": "6845dc87c2a5071ba84c9222f858acf8"
  },
  {
    "url": "assets/js/65.006955d1.js",
    "revision": "b657170c6e0cd560854274738280fff8"
  },
  {
    "url": "assets/js/66.54d4a572.js",
    "revision": "3a19448dd954fc1aee1fc8b7e8a647ef"
  },
  {
    "url": "assets/js/67.ae1a6168.js",
    "revision": "0d0d690f5d5b27c080b592ddf5374643"
  },
  {
    "url": "assets/js/68.11bce259.js",
    "revision": "a2eb700207a5b08e08ed24cd83b87e0d"
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
    "url": "assets/js/72.93d4c2e7.js",
    "revision": "a58190ebefb838c30eee29a35d7792a8"
  },
  {
    "url": "assets/js/73.ccbff592.js",
    "revision": "549b67e1e0b3b4cbdd1df5cf13cc34ae"
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
    "url": "assets/js/app.e6858b92.js",
    "revision": "d033d1cbf98830e2b27a5985cf1c84b4"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5c2172.js",
    "revision": "abb113326be1e6b83bec6e7022d7f92e"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "6b0106e9fc90c3b0fd52c8b98d78de7a"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "340177b87a8b2d3f8f3d61ea050bb575"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "107c30d43c59b3efa57a4b015483a951"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "1a7949b22cdd247cee4bd8af60eed80d"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "5fded5efee17ed426f79f66edd92bfd8"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "46eb2e8b587ffa9128fb735c96c7ed06"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "431f15a30ea236c27c84b7b471b6176a"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "90391a3ee7f475ef96d89d4f36af1e6c"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "5d4f71acf48f9decd62c6a88d4b59480"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "5139c0911cd40e4bc2a4ad6de5357d04"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "b538e8d385a9fb5eca8c7b3704ad6d6b"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "5c81b724e0ef4e33803768342e4081c1"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "27e07d06dd5aada5ea2401a1ab664c1a"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "fbd2113aacc0e59eb6ecb53d87721ffa"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "8fc208ef9543470d30e318a6ba66b8e2"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "3a2e6fd4f332aa8dc8d43d7503dfd2c5"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "503e83514790bf04a6cf5ff52cf2ad98"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "94bbd297f052ad8758bc8c930492eb75"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "0067e2effd1b58c01f7ec01687f70ae8"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "0847d16f04750e6c31c030dc552c4a3d"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "fdf6cfb43f10ce21fc43783127ed0587"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "84803f6b66cb9ceb9642b5e786ecf713"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "9e824153e9dd632e6b07c7ca889dfdbb"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "d112f7054c9319b79f64733dc036d042"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "86ce65fa1f29ee60323b50e154eacb30"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "5d3b371bb07850fc2a00e5abb2380007"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "4be4c6ad786558fb0c6a30ed01545b53"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "cc1264f3f155b7023c4634354e87c932"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "5cec4ced6d13ae088838f217a45a8097"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "3b4416d9cb0eb5b7f1be437bb8185ded"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "2c93b6fe6a470c56dbd787b7e1aac8dc"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "b2d4923c5c8f941eebe68379def556ce"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "1d16c5a1bacdc5754f95b6a52bca408a"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "5c4ba91c8acaacbf1728675c1b0baedd"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "069ebd79e1db2243c4d469d3c91e196c"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "455098b008aac831a917c44eccee0ddb"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "fceea24194778d81a5f4c130aa596409"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "8e1eb45987038ad3ce99da787b201765"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "312351b852af4d03afd510f9741279a8"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "f500070b99631841a80264ce84bbbd69"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "16d47087164e42a5504ad9d23ad45a26"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "7005f05aab70bc436d2164303d67b086"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "f20af9e88801d79364a71ac730344815"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "f0bd327ae99851226e2545cbddc88dc7"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "50379276feabc2160a4bcccdf290f9ae"
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
    "revision": "1e3d9b42561613e7210a063019adc2b7"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "0757f7c758b369223eec16f2eb75f596"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0e08e71d08d6612a30ed9b8e807fac22"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1d7f1c6febb1c21129db2eaed5e3ea2e"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "fba5a2e0aa3ab0701b43c6da37e4143f"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "94051afba1382f6d055c5cd490399cdb"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "90b18e928138868bd94c3cb528dba79e"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "c9bc787d58f6fbd4a2153c2d89dbcb31"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "890aea87f696136194fbae71d78647d2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d350b6ecb002bde95d4b6bda511ff319"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "5631022210be37d40b36d4d5876271eb"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "05e2a9afd73fd952e8ce7eb15417ac82"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "22521a2edecb987a1fe9289d568b3b36"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "a9a47bbc38acaf6da39cf58aad6da218"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "eafa88ea16f45b3564e619cd0c2d60ea"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "523328c06334635babdf43ecf6946d9d"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "45223bc1c190a66b0df55ffc780cd7d2"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "06b72897e770360e143135135d9aa88d"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "da7c20e194d9f5b03eae0ff777a5c733"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "e9083ab361f6870c0052626a9d48acc5"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "17f0ea8cc7cbff51479b217c3ae0179e"
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
