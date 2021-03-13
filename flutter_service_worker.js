'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "75fd5b5d94fa5091c1cff3ae4094fccd",
"splash/style.css": "71533778dc93ea83ad31bb3835b3f48b",
"index.html": "e5ffe43afbac9a485fbfc680713f9054",
"/": "e5ffe43afbac9a485fbfc680713f9054",
"main.dart.js": "770330137598b6b35e01180e7b43a60b",
"icons/favicon-16x16.png": "1e1455ea021ad50fc747281546eea969",
"icons/favicon.ico": "62c8827f7922ae2f63e129077845d4e6",
"icons/apple-icon.png": "2a78c598afe5f475565809ea68b8da9b",
"icons/apple-icon-144x144.png": "b01dd83b9c5524a3c2703160104bd70f",
"icons/android-icon-192x192.png": "4cf9c0b933248800a3fb7ce3dd64eb24",
"icons/apple-icon-precomposed.png": "2a78c598afe5f475565809ea68b8da9b",
"icons/apple-icon-114x114.png": "0232855bf760c725c7164751f609385f",
"icons/ms-icon-310x310.png": "c0907e3fd629c6764a93ed4cbafe99f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/ms-icon-144x144.png": "b01dd83b9c5524a3c2703160104bd70f",
"icons/apple-icon-57x57.png": "254fd91f3f5b0975ff36717d2f4e8d40",
"icons/apple-icon-152x152.png": "18197b89f7efd12cfac783ca6152351f",
"icons/ms-icon-150x150.png": "f4465e2e6408e433758e91ad4fe4bab4",
"icons/android-icon-72x72.png": "c5e8c13155a90301630e3c3bd73ffe86",
"icons/android-icon-96x96.png": "c8023471b31a82c0eb2f141fb41a89a4",
"icons/android-icon-36x36.png": "37cd2d5de7926d6d050d79c0be6d4cff",
"icons/apple-icon-180x180.png": "f1770e0bffb0f1dd3da51b778de94675",
"icons/favicon-96x96.png": "c8023471b31a82c0eb2f141fb41a89a4",
"icons/manifest.json": "75e6fa173aae71e6a655fa8298f3e2da",
"icons/android-icon-48x48.png": "1690ae853eccd84a652b5db3d110fc3a",
"icons/apple-icon-76x76.png": "45e0e510fb808a8a2d0ffa5cf539cac7",
"icons/apple-icon-60x60.png": "b433de4873fae282ab649ce7c3b6df5c",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "b01dd83b9c5524a3c2703160104bd70f",
"icons/apple-icon-72x72.png": "c5e8c13155a90301630e3c3bd73ffe86",
"icons/apple-icon-120x120.png": "bf59e9df854d45196cef599a4453b3a5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "fb767e7ed8849b4d891c12d1e8d59fef",
"icons/ms-icon-70x70.png": "b1f3f25021c1b1ac72ed32868751d008",
"manifest.json": "079935e2fae24e4ea9118e81a390e275",
"assets/AssetManifest.json": "4747771541068fa4ca8c3afc5ba7e5be",
"assets/NOTICES": "e05cbb6c94307d3933bd13a061f9faa6",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/design/pattern-1.png": "24190aefc9577f9d0c1a490a578a0d43",
"assets/assets/images/avatar-1.jpg": "ba9e8edda050f5d10b290ca4c570d56d",
"assets/assets/images/music/all-1.jpg": "7ae13fe939eb87bdfb3f2e15022e4130",
"assets/assets/images/music/all-2.jpg": "f972c28d7f58cb2175a30bec42e72872",
"assets/assets/images/music/event-2.jpg": "8121547044fd9d720d47923f94261680",
"assets/assets/images/music/event-3.jpg": "3404020dd6b6a55de8c6735367651c9e",
"assets/assets/images/music/event-1.jpg": "a9adeaddd06f097053c4c58242afb0c0",
"assets/assets/images/music/all-l3.jpg": "c575626e036f4b66507f4dec8f2ca1a5",
"assets/assets/images/music/all-l2.jpg": "51150fe97abc6399b0bdb9ef57860cea",
"assets/assets/images/music/all-l1.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/music/podcast-4.jpg": "854bafbf4b97806889dd0b3b4c0c2fe1",
"assets/assets/images/music/singer-1.jpg": "fb65611c1f203b801824b87919d1e428",
"assets/assets/images/music/singer-3.jpg": "927ac4a6471d2458eeddd19800d8f960",
"assets/assets/images/music/singer-2.jpg": "b41a0690b19b9739a0a146f6d8d48785",
"assets/assets/images/music/podcast-2.jpg": "50e73195aef428672e7bf51524f5b04c",
"assets/assets/images/music/podcast-3.jpg": "5587d0d5b463da61ce8b6ec0cbf00b10",
"assets/assets/images/music/podcast-1.jpg": "f3e890dc5f6410ab123421aad7734230",
"assets/assets/images/music/singer-4.jpg": "5d0bd6f64c8456c9f7bb395e58f9c893",
"assets/assets/images/avatar-2.jpg": "f3036c635ddddafcd4888909a1c0e4a8",
"assets/assets/images/avatar-3.jpg": "00425b077f7e73461663740754ca30ca",
"assets/assets/images/course/subject-4.jpg": "ba633185edda953eb1d2719694086d07",
"assets/assets/images/course/subject-5.jpg": "6f44c2e024dffad8ef07836209bcb722",
"assets/assets/images/course/subject-6.jpg": "8e7e65bd31a5bd3d1c1575471205115e",
"assets/assets/images/course/subject-2.jpg": "7e311ab2e2f2cdbd117474cddfa230cc",
"assets/assets/images/course/subject-3.jpg": "d8f3f06266106dd617875fac6bea94a8",
"assets/assets/images/course/subject-1.jpg": "fb51576ef3978b37e84d9a8c33e35156",
"assets/assets/images/course/craft.jpg": "048678de625153112af0065e8de77c92",
"assets/assets/images/course/robot.jpg": "ed15ce25118dc2fb272ad930064c48c3",
"assets/assets/images/course/art.jpg": "cd84812d7ee991c39b628507ef8dd68c",
"assets/assets/images/course/biology.jpg": "1520cacdb622ae474cec8238551319bf",
"assets/assets/images/course/class-l1.jpg": "07e2fcabb1af5b23e157c88cfb84743c",
"assets/assets/images/shopping/offer/offer-1.png": "bdb1f55bcbd7c8efb46469fd39b9787a",
"assets/assets/images/shopping/offer/offer-2.png": "7bc83337ba493ae3655dba0a93c375a9",
"assets/assets/images/shopping/fashion.jpg": "fb6e7639ddef53a6e332801cbd7409f2",
"assets/assets/images/shopping/headphone-1.jpg": "39049d23bf12b15e26eab19792c3c521",
"assets/assets/images/shopping/camera/camera-3.jpg": "ed89a98c7851eb3b416701e3e23546cd",
"assets/assets/images/shopping/camera/camera-2.jpg": "b0cf0ed0367baaffb5cc769a2ae14cf2",
"assets/assets/images/shopping/camera/camera-1.jpg": "1d8ce56973746f7634c4ac180560a866",
"assets/assets/images/shopping/product/product-3.jpg": "96544f1f152c213cab7bd0eef006d3a8",
"assets/assets/images/shopping/product/product-2.jpg": "d683e2cdcc1ad0dfe9076ac1f00b72a8",
"assets/assets/images/shopping/product/product-1.jpg": "3c120da230718428405b014c34f958fe",
"assets/assets/images/shopping/product/product-5.jpg": "b58172c26101e35ee9db7db93feba6e2",
"assets/assets/images/shopping/product/product-4.jpg": "f457b99ecbf18449fe62dd6ee97d2dc4",
"assets/assets/images/shopping/product/product-6.jpg": "b442e0bb66b1c04522262dfc3bf4eea0",
"assets/assets/images/shopping/product/product-7.jpg": "f2b56ee00c36de861844fd5593959a15",
"assets/assets/images/shopping/product/product-10.jpg": "1d502a532092538bb739a3b62e79e25a",
"assets/assets/images/shopping/product/product-11.jpg": "d36cc361777d935802226f5e279a6dda",
"assets/assets/images/shopping/product/product-9.jpg": "bf5f7dc3ccd260f170d4846032497542",
"assets/assets/images/shopping/product/product-8.jpg": "a498e4db853747113df439f060546bbb",
"assets/assets/images/shopping/technology.jpg": "3dfa54e1417cb377e6d58b3880927cd6",
"assets/assets/images/shopping/lifestyle.jpg": "0d456d4de2fbdb31826c36806c9a3de6",
"assets/assets/images/shopping/headphone.jpg": "08632ccce892c895a9e6957e214f3ed8",
"assets/assets/images/shopping/art.jpg": "d4b2065808d4c3045fa834cd59a9cdfc",
"assets/assets/images/shopping/vector/watch.png": "07ca7fec2ea85a5a64f020a15201afb5",
"assets/assets/images/shopping/vector/shoes.png": "1f2e5e9efa8ce6e28c3e375773440c5d",
"assets/assets/images/shopping/vector/laptop.png": "bcea0d493356caf5b5aac3305bd6d2de",
"assets/assets/images/shopping/vector/headphone.png": "8cebc9186847870a123b1c958f622a92",
"assets/assets/images/shopping/vector/mobile.png": "cae6537e5e587d844e3d8b5149cc94d8",
"assets/assets/images/shopping/vector/dress.png": "c4679af9b0cd01864c700e1b386f0367",
"assets/assets/images/shopping/vector/tshirt.png": "9242b6b8fc9775e03628ab6829aa565d",
"assets/assets/images/chat/video-bg-2.jpg": "984b7e687bb641f1990ff3f06bd2e970",
"assets/assets/images/chat/video-bg-1.jpg": "0aa716c9e98476d31aef7e2bf9bb98e9",
"assets/assets/images/chat/whatsapp-bg.jpg": "162ad9a8a272af835a9ffc3677d92a29",
"assets/assets/images/avatar-4.jpg": "4601d18b82bb522bc6bf493cc06d6e15",
"assets/assets/images/hotel/hotel-2.jpg": "6d9244dde783191ed95039ed76515d21",
"assets/assets/images/hotel/hotel-1.jpg": "c2b991d28ae4781aecaade9bd0119a4e",
"assets/assets/images/hotel/room-3.jpg": "80cc5884dea467c80c8c70467fecb680",
"assets/assets/images/hotel/room-2.jpg": "6b955337059b84ef24840f34fd15cbab",
"assets/assets/images/hotel/room-1.jpg": "5c9e5378ce8b24c595ab1acf5d66b10e",
"assets/assets/images/avatar-5.jpg": "a6189792c77866fd533d2814e97650d5",
"assets/assets/images/all/all-p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/all/all-p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/all/all-p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/all/all-6.jpg": "393b0a1efe502f0d75f0cbc63f987754",
"assets/assets/images/all/all-7.jpg": "f774b24254052e87b577893240c9287f",
"assets/assets/images/all/all-5.jpg": "aef4e45f74951d3409ef40844702c342",
"assets/assets/images/all/all-4.jpg": "8278b9c949763b70ba034da3d4d01bac",
"assets/assets/images/all/all-1.jpg": "6dd9e5b779dbbd9d62d0877fc7b43748",
"assets/assets/images/all/all-3.jpg": "5e3004ff592fc13a9401900c0d952e20",
"assets/assets/images/all/all-2.jpg": "72727e2cbd4e95dad31005a6f64ad553",
"assets/assets/images/all/all-l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/all/all-9.jpg": "29cf385d776d483a34ad047822d5949c",
"assets/assets/images/all/all-8.jpg": "2bbded6cfa2f25bbaa221d9b9631c279",
"assets/assets/images/all/all-l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/all/all-l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/all/all-15.jpg": "9c13dd8c28df6d4d35ebfd8907dac1fa",
"assets/assets/images/all/all-14.jpg": "724abbe8e77e3b1947626c161ac96d75",
"assets/assets/images/all/all-10.jpg": "52ef62ecb6548394da4fcffa2bf82aed",
"assets/assets/images/all/all-11.jpg": "eff7b76a83ed3c5c97af0c853612e35a",
"assets/assets/images/all/all-13.jpg": "ddc3f676b95510dcf233f77a9d13669e",
"assets/assets/images/all/all-12.jpg": "d046575b8636a0a7e179573a3ae02a1e",
"assets/assets/images/avatar-place.png": "3f28b642568815dd3ddd79ad2238be92",
"assets/assets/images/social/post-1.jpg": "edefe2840595535066b0d32c47f6aadb",
"assets/assets/images/social/post-l1.jpg": "6f9f4a0104b0593a791ae70532309f96",
"assets/assets/images/social/profile-p1.jpg": "ca0c940e14e062ab71a4bdfc3fa5820b",
"assets/assets/images/avatar.jpg": "316746ff3cdade186aa76e5f353e220a",
"assets/assets/images/place/paris.jpg": "f7f2c37bb5b516e3559eaea33d7f1c19",
"assets/assets/images/place/cuba.jpg": "c137c5c4120479245e25b23382b42ca2",
"assets/assets/images/place/london.jpg": "bebf52764bc8e61d03059305a38692b8",
"assets/assets/images/profile-banner.jpg": "e3e1ee2e512ab57ecff7cb73f3664bbd",
"assets/assets/brand/flutkit.png": "5914e4ea2a3064759bb6f78e9b2ee24e",
"assets/assets/brand/google.png": "4b58cbd35f95d3d368b8461dc01f5955",
"assets/assets/brand/paypal.png": "da46d98851daed8e3db86780630de8bd",
"assets/assets/other/map-snap.png": "27e9c3d26039f7edf566fba130981a62",
"assets/assets/other/map-full-snap.png": "f94576d26f20108eab45056084171286",
"assets/assets/other/map-pin.png": "7913e6ef5f89c499db0d01a67130a05f",
"assets/assets/other/map-md-snap.png": "8ffec35c19c7575001d31ae6b8f616a9",
"assets/assets/other/barcode.png": "7fdd012ca7d7c8ad524b43522e7c4aa3",
"assets/assets/illustration/music/illu-1.png": "b5ad3beb92e3212219664372cffb0529",
"assets/assets/illustration/music/illu-2.png": "286b0f4d8abeb02a21aa2850eac71213",
"assets/assets/illustration/shopping/maintenance.png": "9fe44c9f594e1b27a544214e10f3dd3d",
"assets/assets/illustration/shopping/order-confirm.png": "6caba9974ec162eba25d9c8ca68fc868",
"assets/assets/illustration/shopping/page-not-found.png": "e425f5e395309ea34174e1af629dbe17",
"assets/assets/illustration/shopping/illu-1.png": "e65da5e250be5afee585087bf0e2d1aa",
"assets/assets/illustration/shopping/illu-2.png": "e500e0af4ed341da6e811bddb17269bb",
"assets/assets/illustration/shopping/empty-cart.png": "31c572916ec268d1500cf93bd706bb47",
"assets/assets/illustration/shopping/illu-3.png": "777962e8823b06cb211b3f542e19a9d8",
"assets/assets/illustration/hotel/illu-1.png": "5eb3120c096b94b9843ee0301d7162ef",
"assets/assets/illustration/hotel/illu-2.png": "2be714a0bde93efc0039a0ba39694a91",
"assets/assets/illustration/hotel/illu-3.png": "da3a8d83072192176266637b645a991a",
"assets/assets/illustration/food/illu-1.png": "41c16dd82750c9dac15c0f789569ab56",
"assets/assets/illustration/food/illu-2.png": "627fd6e4cea7ba998da75dcc2beb41ef",
"assets/assets/illustration/food/illu-3.png": "35eac6c47d68a0d33c81fe0f6936eda7",
"assets/assets/icons/reader-outline.png": "f41db2c815afde95cb8eebeee664c77e",
"assets/assets/icons/list-outline.png": "d255cd9f0c7e1e810d909d1913de3424",
"assets/assets/icons/email-outline.png": "dd06201472a16c33c810b1116e00b20c",
"assets/assets/icons/shop-outline.png": "500416857a17a6ff6d43ebb50c43a994",
"assets/assets/icons/resize-outline.png": "09a9bc4eba97e73d570dc5e0b0c37a57",
"assets/assets/icons/file-tray-full-outline.png": "af76162d9ad4d23bc622fc42d398c590",
"assets/assets/icons/food-outline.png": "71b85edae2ab5f0ffd496acbb8929abf",
"assets/assets/icons/rocket-outline.png": "7aa7b34f49e9b55cdc611a798cabdf43",
"assets/assets/icons/toggle-outline.png": "0d4683541b4269ec84d06b9f20b30eaf",
"assets/assets/icons/location-outline.png": "8e6aa1a74759fcb80402d9858e845fb8",
"assets/assets/icons/health-outline.png": "1b4cfbb5df2bd9c643892f1884c3f91c",
"assets/assets/icons/auth-outline.png": "0cae23400d7a33ea3c4872106fface51",
"assets/assets/icons/wallet-outline.png": "5ae4f705a545b6df9853a77ea4f99d10",
"assets/assets/icons/trending-up-outline.png": "e4527f21e137d4f77c25471d468ab3b6",
"assets/assets/icons/school-outline.png": "63d6d42602279f0b310fc05f75a1a5fc",
"assets/assets/icons/search-outline.png": "abc240d0f5312ef045d9c4c33db4cd88",
"assets/assets/icons/copy-outline.png": "200064d32629b63aaa766fe3f2d8e615",
"assets/assets/icons/chat-outline.png": "ef9111c11e188ca3b65c7377389c419e",
"assets/assets/icons/quiz-outline.png": "f41db2c815afde95cb8eebeee664c77e",
"assets/assets/icons/grid-outline.png": "1d035a2750803be765f10b68e602e767",
"assets/assets/icons/analytics-outline.png": "dad9ca4bfa6840473afb934f56f8f169",
"assets/assets/icons/download-outline.png": "629e5ca23fbc90b5036b06a3928dcca5",
"assets/assets/icons/stats-chart-outline.png": "7dbe3aabee1cedec5cd674c297697f13",
"assets/assets/icons/code-outline.png": "e3992a1c4891de8a0afc607a21d72891",
"assets/assets/icons/ticket-outline.png": "3c6024e58377856d13416658ef6d8717",
"assets/assets/icons/dashboard-outline.png": "df92c3f09bd5e175eeceab6f1d0018fa",
"assets/assets/icons/profile-outline.png": "cfa1462bf0b186648d624a881e1b8190",
"assets/assets/icons/browsers-outline.png": "76890e86179afbd34689d727b3bcd036",
"assets/assets/icons/ellipsis-vertical-circle-outline.png": "9dc201d0994bb0ccc2c26f0a3d303871",
"assets/assets/icons/hourglass-outline.png": "b5f85d773c29d691cc459600a97da8b5",
"assets/assets/icons/ellipsis-vertical-outline.png": "1c5b91eba8f4cfe4522af00708561812",
"assets/assets/icons/shapes-outline.png": "67912f3c24b1cb0c05a781a63498b686",
"assets/assets/icons/albums-outline.png": "10574e79648b37c59bf6506c93a87634",
"assets/assets/icons/tablet-landscape-outline.png": "795e832bc25546add8c5eac6b628cf93",
"assets/assets/icons/planet-outline.png": "86fc3699c0709fdf51f3e5e94d5519af",
"assets/assets/icons/music-outline.png": "6ecc9c0ca589fff389cb82cdc87fa862",
"assets/assets/icons/instagram-outline.png": "7e8c68ffe46baa0826e4e3f9e72f353c",
"assets/assets/icons/apps-outline.png": "1132e1f50f8c27112273fda2f1facb07",
"assets/assets/icons/hotel-outline.png": "21ee9c4f4e9db70c27e34e7a2fd81bb1",
"assets/assets/icons/setting-outline.png": "a67e5fa8b07f87076004ae93685851c5",
"assets/assets/food/food-7.jpg": "d24cb5a593efdfbc38b74bf8c70eb273",
"assets/assets/food/food-6.jpg": "54cc92361750ed7b0b209f5b48f80e9c",
"assets/assets/food/food-4.jpg": "7b79f89f08330d1f252fbff6905d5228",
"assets/assets/food/dessert-4.jpg": "c2fdd6c825fca137632bf76d055d99f6",
"assets/assets/food/food-5.jpg": "7b79f89f08330d1f252fbff6905d5228",
"assets/assets/food/restaurant.jpg": "994d3adaeea5f624d5185a4d68a5d656",
"assets/assets/food/food-1.jpg": "542a611cda38d7235cf002570e55d1a6",
"assets/assets/food/dessert-1.jpg": "67b502a1161b29388770dae73914d29c",
"assets/assets/food/food-p1.jpg": "d13837e40faa69d3cb550d783dda63fb",
"assets/assets/food/food-p3.jpg": "d2caf85aa9029449b787a1168b001ecd",
"assets/assets/food/food-2.jpg": "0779c482e657cb94574e876ca6fd27b4",
"assets/assets/food/dessert-3.jpg": "df1d7c12a641e49966c3dd26f9e74215",
"assets/assets/food/dessert-2.jpg": "d23a7c2c6aee8dc18024c15f1c25916c",
"assets/assets/food/food-3.jpg": "cad360963212dcd6edd06deb6890552d",
"assets/assets/food/food-p2.jpg": "3b64ac2910c2171ca3426d41802df96c",
"assets/assets/food/pasta-1.jpg": "64cada7410b87db61336a60819898f2d",
"assets/assets/food/beverage-3.jpg": "6bf6e6722c5db792c0984b93bbf3606b",
"assets/assets/food/food-8.jpg": "a38dfb7313f70dfd5851513733647ec5",
"assets/assets/food/food-9.jpg": "0ea815aed8aebf77d266c2d35efd8df9",
"assets/assets/food/burger-1.jpg": "eb6eb9347c28831901896390380beb40",
"assets/assets/food/beverage-2.jpg": "214ed33744a946bb04b8285067f7b8da",
"assets/assets/food/burger-3.jpg": "415c63f899d6cba5ad690b6dbaf0e73e",
"assets/assets/food/beverage-1.jpg": "91673dd07b2aee5698ad922948c52a87",
"assets/assets/food/burger-2.jpg": "72ad2c987169f8c9692e062b605d8c7f",
"assets/assets/food/food-l2.jpg": "d35bfcca6597617583693d9dba57aac0",
"assets/assets/food/food-l3.jpg": "fee49c0b74179e954fc09b4ca37e64d7",
"assets/assets/food/food-l1.jpg": "4d71ed248e92f6cddec2bba38105f429",
"assets/assets/food/food-l4.jpg": "ab58822aa6fb203f7410fcfe861ddf79"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
