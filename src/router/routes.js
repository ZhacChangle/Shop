 // 引入路由组件
 import Home from '@/pages/Home'
 import Search from '@/pages/Search'
 import Login from '@/pages/Login'
 import Register from '@/pages/Register'
 import Detail from "@/pages/Detail"
 import AddCartSuccess from "@/pages/AddCartSuccess"
 import ShopCar from "@/pages/ShopCar"
 import Trade from "@/pages/Trade"
 import Pay from "@/pages/Pay"
 import PaySuccess from "@/pages/PaySuccess"
 import Center from "@/pages/Center"
 import myOrder from "@/pages/Center/MyOrder"
 import groupOrder from "@/pages/Center/groupOrder"


 export default [{
         path: "/center",
         component: Center,
         children: [{
                 path: "myorder",
                 component: myOrder,
             },
             {
                 path: "grouporder",
                 component: groupOrder,
             },
             {
                 path: "/center",
                 redirect: "/center/myorder",
                 component: Center,
             }
         ]
     }, {
         path: "/paysuccess",
         component: PaySuccess,
         meta: { show: true }
     }, {
         path: "/pay",
         component: Pay,
         name: "pay",
         beforeEnter: (to, from, next) => {
             if (from.path == '/trade') {
                 next()
             } else {
                 next(false)
             }
         },
         meta: { show: true }
     }, {
         path: "/trade",
         component: Trade,
         name: "trade",
         beforeEnter: (to, from, next) => {
             if (from.path == '/shopcar') {
                 next();
             } else {
                 next(false)
             }
         },
         meta: { show: true }

     }, {
         path: "/shopcar",
         component: ShopCar,
         name: "shopcar",
         meta: { show: true }
     }, {
         path: "/addcartsuccess",
         component: AddCartSuccess,
         name: "addcartsuccess",
         meta: { show: true }
     }, {
         path: "/home",
         component: Home,
         meta: { show: true }
     },
     {
         // 加?表示可传可不传
         path: "/search/:keyword?",
         component: Search,
         meta: { show: true },
         name: "search"
     },
     {
         path: "/login",
         component: Login,
         meta: { show: false }
     },
     {
         path: "/register",
         component: Register,
         meta: { show: false }
     },
     {
         path: "/",
         redirect: "/home"
     },
     {
         path: "/detail/:skuId",
         component: Detail,
         name: "detail"
     }
 ]