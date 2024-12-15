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
    "revision": "31e066b7b7fb61bec4a6e604d7bba1d4"
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
    "url": "assets/js/10.af788d6a.js",
    "revision": "c79f5795cd7b488d0b0687326f40dcf1"
  },
  {
    "url": "assets/js/11.e698d0ab.js",
    "revision": "5ef62f26ce98a4dea2ab0dcee4abe749"
  },
  {
    "url": "assets/js/12.326a7ceb.js",
    "revision": "9a5e85db11379242f81b61a5542a71d1"
  },
  {
    "url": "assets/js/13.1ff7e045.js",
    "revision": "2092114669d06b9c960d012673506b11"
  },
  {
    "url": "assets/js/14.d9be6d66.js",
    "revision": "17a20f0e2ae411f15a9ce5c1264d44a0"
  },
  {
    "url": "assets/js/15.c45cbc27.js",
    "revision": "eda68b0dc93c6c0293138ffdbcdbb4dd"
  },
  {
    "url": "assets/js/16.ca82742d.js",
    "revision": "25a9bc233b0fce7cb8397633510250ee"
  },
  {
    "url": "assets/js/17.e3e343e5.js",
    "revision": "7079cbd411094c27fda3f0643e4bd0e5"
  },
  {
    "url": "assets/js/18.835c55ee.js",
    "revision": "0678c2b8b596c0a35e02eca5184c69eb"
  },
  {
    "url": "assets/js/19.1d927df3.js",
    "revision": "dc78b5f2bb55e38c989093c5a16f304e"
  },
  {
    "url": "assets/js/20.cdbcc59d.js",
    "revision": "63157595869d2dddfe0cf822f90bef64"
  },
  {
    "url": "assets/js/21.531571c1.js",
    "revision": "e5ae23b076bc2860a0f4deed7f8c5715"
  },
  {
    "url": "assets/js/22.5afbfe3a.js",
    "revision": "d02d43ad24305f58db5fee4d82f4da4c"
  },
  {
    "url": "assets/js/23.b7f37f34.js",
    "revision": "9bf96d12ef7faf4c0d689a77ebe9af1b"
  },
  {
    "url": "assets/js/24.a691494f.js",
    "revision": "10a190f3a71277a4b1aba6ea93bf8805"
  },
  {
    "url": "assets/js/25.26537b5d.js",
    "revision": "88f94019935bd666d8593d6df9f9b739"
  },
  {
    "url": "assets/js/26.84a44588.js",
    "revision": "3c211703971fa8798f84582d9c6b44ca"
  },
  {
    "url": "assets/js/27.23665d8e.js",
    "revision": "65c63d81e25fcc46db059d03ca64da82"
  },
  {
    "url": "assets/js/28.4450be28.js",
    "revision": "061a3266c61777d86ee4f735a1796fa1"
  },
  {
    "url": "assets/js/29.37469f6f.js",
    "revision": "f67e26f06e4cb2d6f0776ad7eaed456c"
  },
  {
    "url": "assets/js/3.e116f5db.js",
    "revision": "952987ca65db77e2c03850ba7bf743d5"
  },
  {
    "url": "assets/js/30.801166f2.js",
    "revision": "dc1d8d80de4de84abac350926442a885"
  },
  {
    "url": "assets/js/31.204b7f62.js",
    "revision": "5b462592060576c8fa695d4ccbb96d9f"
  },
  {
    "url": "assets/js/32.6639c643.js",
    "revision": "e3a96f89eaeb74560ff593d09a29dfec"
  },
  {
    "url": "assets/js/33.3cbfb1b2.js",
    "revision": "7a98a7bb18187c8fe4e9d9b4c42df19f"
  },
  {
    "url": "assets/js/34.27bdb186.js",
    "revision": "7a5506e252faaa92d4e08af2f32c0d6f"
  },
  {
    "url": "assets/js/35.0d48148c.js",
    "revision": "9842e7bec1b16aa664aa5534f4a157de"
  },
  {
    "url": "assets/js/36.8708711c.js",
    "revision": "52b341cbeeba30f65b4c329064690d31"
  },
  {
    "url": "assets/js/37.0eefb74d.js",
    "revision": "d448b036d1fb9c628566e4b8954a733d"
  },
  {
    "url": "assets/js/38.9f3ef703.js",
    "revision": "98593c81379ff0e0e48bf95cf62584b1"
  },
  {
    "url": "assets/js/39.5ea5edfc.js",
    "revision": "da4042206dd6029bbe1343ff88f52685"
  },
  {
    "url": "assets/js/4.7ac02a7b.js",
    "revision": "61d4ae16a91c6eadbc1ea93378d58f0e"
  },
  {
    "url": "assets/js/40.65877d7c.js",
    "revision": "a6cdda179550be33c4efcacb867286f0"
  },
  {
    "url": "assets/js/41.84fa9d15.js",
    "revision": "d51bf81b5a43f7e67db7cb759a014d3c"
  },
  {
    "url": "assets/js/42.bed3a38a.js",
    "revision": "c1f972bd18395e6d933ab4475979320d"
  },
  {
    "url": "assets/js/43.1c48d89c.js",
    "revision": "329667df11a1b4f90aa95d110ed62774"
  },
  {
    "url": "assets/js/44.f367d667.js",
    "revision": "eb87894ed1e6a72c65a04b5d2e888dc0"
  },
  {
    "url": "assets/js/45.59e3cd23.js",
    "revision": "1981f7e04b7d9d8db5f4472929c6e48e"
  },
  {
    "url": "assets/js/46.ea082c82.js",
    "revision": "dde4960166de2524754861ae89255f04"
  },
  {
    "url": "assets/js/47.2000585e.js",
    "revision": "db41d68b7bf6cdd38286cb96d3d3f148"
  },
  {
    "url": "assets/js/48.161d7ee7.js",
    "revision": "9688bd3a20ca650ac535da05d48eb613"
  },
  {
    "url": "assets/js/49.b7ae195d.js",
    "revision": "1a584712aade2d4af4c445357db2c93f"
  },
  {
    "url": "assets/js/5.1b2e7829.js",
    "revision": "7be658a83c21c78781a81fe6ba1ada12"
  },
  {
    "url": "assets/js/50.9757be0a.js",
    "revision": "0621d07bab13cec31931cbb27556adcd"
  },
  {
    "url": "assets/js/51.33476e09.js",
    "revision": "6c047eaa30828c705960dab9a5e4f6a7"
  },
  {
    "url": "assets/js/52.081bd371.js",
    "revision": "d8eaa60bd3b68ca338922bcd7269af42"
  },
  {
    "url": "assets/js/53.86f819bc.js",
    "revision": "792130cb0f2cbc6bf83d0260ffd5f249"
  },
  {
    "url": "assets/js/54.4685fae1.js",
    "revision": "fffc88e102564e28715c35f6c36e1de5"
  },
  {
    "url": "assets/js/55.bfd9d618.js",
    "revision": "a49ed973d99ee7000bdb497178fe0194"
  },
  {
    "url": "assets/js/56.a6c89bdf.js",
    "revision": "bcfab8d5367c6c7869740ef10eac8802"
  },
  {
    "url": "assets/js/57.8a0b602a.js",
    "revision": "c796247e1f18d76030ad994f2276cd99"
  },
  {
    "url": "assets/js/58.6c658a33.js",
    "revision": "644b0e210c7ded336c6d500540f79e0a"
  },
  {
    "url": "assets/js/59.8da7b8d7.js",
    "revision": "c638148fefe4699b7463a265df604c11"
  },
  {
    "url": "assets/js/6.5902e1f5.js",
    "revision": "00ec6fc15ef18a8b08b946be8d1f639b"
  },
  {
    "url": "assets/js/60.ee720cae.js",
    "revision": "59012fa67a3423182beed7385baca324"
  },
  {
    "url": "assets/js/61.191df596.js",
    "revision": "b36084d900aafcc06ce7bc48bbcfe163"
  },
  {
    "url": "assets/js/62.dad62915.js",
    "revision": "54a0f965a4a7dc1a2da869e450604b03"
  },
  {
    "url": "assets/js/63.0782c210.js",
    "revision": "306e9f2005d7ee2d11bf25f2f73a0b0d"
  },
  {
    "url": "assets/js/64.2cb6b995.js",
    "revision": "2a5d6fe466e6f4e9a048a74d7679d843"
  },
  {
    "url": "assets/js/65.2da872f3.js",
    "revision": "5992d74835b0d3b251ea36f646582b2d"
  },
  {
    "url": "assets/js/66.1002ec92.js",
    "revision": "0d416c96fdf5a07dc9ec371f7e905367"
  },
  {
    "url": "assets/js/67.ce7e6c21.js",
    "revision": "56fd330c7cbe5bf1410e6694cea40ae7"
  },
  {
    "url": "assets/js/68.36a1d871.js",
    "revision": "07eec2d831f5e5eac3d07881a77534f6"
  },
  {
    "url": "assets/js/69.240ae53e.js",
    "revision": "5dbe071e1876630c5b81a4a28c977fe8"
  },
  {
    "url": "assets/js/7.67d90934.js",
    "revision": "b891019d8852e8019238f017750df5a8"
  },
  {
    "url": "assets/js/70.3dabfdb8.js",
    "revision": "e1af9c9bb602330f1bcbec8d8482437f"
  },
  {
    "url": "assets/js/71.9a3a2924.js",
    "revision": "cbf6098b9a83bbf6afe497b841133bb0"
  },
  {
    "url": "assets/js/72.0f4da35a.js",
    "revision": "16fdd4186e8785b620ebd0a30d9df02e"
  },
  {
    "url": "assets/js/73.56c77fa2.js",
    "revision": "63f8e15fc9266c5ae7da50be95a5ce09"
  },
  {
    "url": "assets/js/74.cac9a196.js",
    "revision": "0973561272c1bb72543bf1059164e97c"
  },
  {
    "url": "assets/js/75.6494cc8b.js",
    "revision": "01c73adaae1cb38917e3a28c1ebf33e2"
  },
  {
    "url": "assets/js/76.c966b47c.js",
    "revision": "f06f2205a25695000e3aa1171e838d8f"
  },
  {
    "url": "assets/js/77.e1442db2.js",
    "revision": "dbeab8ca37b1526472de4931ebbeb9e9"
  },
  {
    "url": "assets/js/78.5f1eb71b.js",
    "revision": "c6601d2c7267ed98cbf461d834303b3c"
  },
  {
    "url": "assets/js/79.31964502.js",
    "revision": "da9f62654650f35b23d89218de2517d8"
  },
  {
    "url": "assets/js/8.5f33a5a5.js",
    "revision": "0b942b40f66408d9b7c6911e6ca797d5"
  },
  {
    "url": "assets/js/80.75621830.js",
    "revision": "7e70ac4cc3c05a868151682262399693"
  },
  {
    "url": "assets/js/81.59e5f5fe.js",
    "revision": "6c0362ba8e920625173b520d592faa19"
  },
  {
    "url": "assets/js/9.c3138d8a.js",
    "revision": "38d644ada284194738e6bf271f33ea2b"
  },
  {
    "url": "assets/js/app.fb35d153.js",
    "revision": "ce803c6f032848679f15053bf1a72276"
  },
  {
    "url": "assets/js/vendors~flowchart.c139bbc2.js",
    "revision": "29fe69fa7d2cf18425c9617a5a1d43f9"
  },
  {
    "url": "base/1.rust/1.index.html",
    "revision": "cf78edf970ebf6e7c04f1a4bdcad619d"
  },
  {
    "url": "base/1.rust/1.syntax.html",
    "revision": "ed24c9381cb0a4937c4beae867378d3f"
  },
  {
    "url": "base/1.rust/10.let.html",
    "revision": "1ac1ab9f74680320a87176dd7ed88d6b"
  },
  {
    "url": "base/1.rust/11.fn.html",
    "revision": "88d9a1d28dd3889d2ddd90fdea24038c"
  },
  {
    "url": "base/1.rust/12.mod.html",
    "revision": "9f4f050aeb5825fa8d725a36c2b5ba14"
  },
  {
    "url": "base/1.rust/13.const.html",
    "revision": "3844e51e1cc7eb644f0b158348e641c0"
  },
  {
    "url": "base/1.rust/14.pub.html",
    "revision": "3431e177fa6f91ac6afc9738c14d186a"
  },
  {
    "url": "base/1.rust/15.trait.html",
    "revision": "d6d536402c9c51c01e6425057e4bff3a"
  },
  {
    "url": "base/1.rust/16.T.html",
    "revision": "8524c01a616ba005ddcfde997edb9083"
  },
  {
    "url": "base/1.rust/2.expression.html",
    "revision": "211645bc6f6913e9bcaa428468073454"
  },
  {
    "url": "base/1.rust/3.statement.html",
    "revision": "c9c10555b26de5c165da95fb290e4643"
  },
  {
    "url": "base/1.rust/4.type.html",
    "revision": "6a3914b265aac9b26c75fe9c96ab3353"
  },
  {
    "url": "base/1.rust/5.global.html",
    "revision": "522645d89b8e34ff1500e8b076a72094"
  },
  {
    "url": "base/1.rust/6.sync.html",
    "revision": "f2513c6484b1f5b8a84f588cf8eebaac"
  },
  {
    "url": "base/1.rust/7.async.html",
    "revision": "21e1bd767d0e105cb16992ea0154a237"
  },
  {
    "url": "base/1.rust/8.memory.html",
    "revision": "2e30e8f9d20bc27103acbe09ab9acd76"
  },
  {
    "url": "base/1.rust/9.bug.html",
    "revision": "88ca6ebf2f4eff0aae48e54bc471a063"
  },
  {
    "url": "base/2.engine/1.cargo.html",
    "revision": "e184d6232389f89d17aa200bf482727a"
  },
  {
    "url": "base/2.engine/1.index.html",
    "revision": "095c72f3205f5f26f5b3c63ec70fd90f"
  },
  {
    "url": "base/2.engine/2.neon.html",
    "revision": "f48897c73f234a18cfa016c69bbf6cb9"
  },
  {
    "url": "base/2.engine/3.wasm.html",
    "revision": "4942e02b86b7fef841155f0b17e6ce6a"
  },
  {
    "url": "base/2.engine/5.redis.html",
    "revision": "464865a2de72608828235ee092b51fa6"
  },
  {
    "url": "base/2.engine/6.mysql.html",
    "revision": "0ab12b0a05273626774a23cbac178d37"
  },
  {
    "url": "base/2.engine/7.node.html",
    "revision": "50ccf6083c743e3b7652d5021e9f64bc"
  },
  {
    "url": "base/2.engine/8.express.html",
    "revision": "448e8964ca608b44144c9476f6e37ae3"
  },
  {
    "url": "base/3.case/1.env.html",
    "revision": "9be09d6590bcc7179d4d0c81990fad8a"
  },
  {
    "url": "base/3.case/1.index.html",
    "revision": "ddc561c4e6dd9ca761dd4797bc55f6f2"
  },
  {
    "url": "base/3.case/10.desktop.html",
    "revision": "727c17de87b3b0b9613e6a6eae09bfe1"
  },
  {
    "url": "base/3.case/11.compose.html",
    "revision": "66e19ea5b71e2e1e9b4c55b7670cdb3f"
  },
  {
    "url": "base/3.case/12.service.html",
    "revision": "2cff7761699fc494c3698eae75d347f3"
  },
  {
    "url": "base/3.case/13.find.html",
    "revision": "d504af23ca0c27177f9527447556255d"
  },
  {
    "url": "base/3.case/14.java.html",
    "revision": "07dbcc53972d8de30e48e930da21714c"
  },
  {
    "url": "base/3.case/17.html",
    "revision": "8beaa1e06bc7c2bfb2f598f355a9cf6c"
  },
  {
    "url": "base/3.case/18.html",
    "revision": "df6939a177da2d9b50f519fd63a6c04a"
  },
  {
    "url": "base/3.case/19.html",
    "revision": "6d8b22fd77cbe53ab6d0b7035678e81e"
  },
  {
    "url": "base/3.case/2.docker.html",
    "revision": "fdd83f7448fd2f4d52b52a39e1bac497"
  },
  {
    "url": "base/3.case/20.html",
    "revision": "fbe0120a819b8ec675b706f5d493ca82"
  },
  {
    "url": "base/3.case/21.html",
    "revision": "a867111694785c52711bc1437b64647c"
  },
  {
    "url": "base/3.case/3.image.html",
    "revision": "d193e2cb9a7f89067c751ce3d3f11d3a"
  },
  {
    "url": "base/3.case/4.net.html",
    "revision": "126680c2ff63d21a4368b0e8d0aad624"
  },
  {
    "url": "base/3.case/5.file.html",
    "revision": "7274eb57dfe0428ac5af6c5fb48bc378"
  },
  {
    "url": "base/3.case/6.container.html",
    "revision": "2e088b61d1d9f47cb65169f57825cbea"
  },
  {
    "url": "base/3.case/7.dockerfile.html",
    "revision": "f6290052eef17f7899b4394fecb0adf0"
  },
  {
    "url": "base/3.case/8.share.html",
    "revision": "9395a3777a0ac0629ab1e1716b01e128"
  },
  {
    "url": "base/3.case/9.dockerhub.html",
    "revision": "7d8b69b15d25c7140f67aa69e9473343"
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
    "revision": "1003316cb65f2fdd00dcc4650e500544"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "34eb99dc408a0c04f3d370f74c2105e2"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "128111e31dd2ba2a9afee06329e3c94f"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a7ea42e8b71c02fda20be4e173ae8c24"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f82ff091709e65531666a7c492099f66"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "d77bea06b7dff250c3e13065ec255182"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f9d1d140bf83c0e9ad59d2005b86de8f"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "25a6b2ca6c020555a1a231d29a56531e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "e3bf68c2b0a18fdac1c4818587dd873c"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e16912f916d882a7032bf98ec95e41bb"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d11e53f56106f992beff74fc00cf17ae"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "8ca99bd2cde2b7c021e386705f0c53bd"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "6e02dcc2184f3176aa99d079ad2e2d7d"
  },
  {
    "url": "source/vue/1.preparation.html",
    "revision": "6b863636b01024319e509b75ddffbee2"
  },
  {
    "url": "source/vue/2.dataDriven.html",
    "revision": "724fed6b99c5bb74747ad44550d4663c"
  },
  {
    "url": "source/vue/3.componentization.html",
    "revision": "5ab687b4d1ced113b5a165621111b588"
  },
  {
    "url": "source/vue/4.deepResponsePrinciple.html",
    "revision": "4f487809413fca797e7320f9aa18613f"
  },
  {
    "url": "source/vue/5.compile.html",
    "revision": "d7b54e0b85115c65ec3a80f686417b00"
  },
  {
    "url": "source/vue/6.extend.html",
    "revision": "7b25def27d88a15abcb5f4be5375b35a"
  },
  {
    "url": "source/vue/7.vueRouter.html",
    "revision": "938ef9e380149e2e372e062cfbe65443"
  },
  {
    "url": "source/vue/8.vuex.html",
    "revision": "49a2a0ea96a35f83210dfafbbd8d22b3"
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
