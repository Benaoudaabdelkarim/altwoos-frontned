import { createRouter, createWebHistory } from "vue-router";
import store from "../store"

import Home from "../pages/Home.vue"
import Services from "../pages/Services.vue"
import About from "../pages/About.vue"
import Login from "../pages/Login.vue"
import Dashboard from "../pages/Dashboard.vue"
import ProductDetailsAdmin from "../pages/ProductDetailsAdmin.vue"
import ProductDetails from "../pages/ProductDetails.vue"
import ContactUs from "../pages/ContactUs.vue"
import CreateRealestate from "../pages/admin/CreateRealestate.vue"

const routes =[
    { path:"/", name:"Home", component: Home, meta:{isGuest:true}},
    { path:'/services', name:'Services', component: Services, meta:{isGuest:true}},
    { path:'/about', name:'About', component: About, meta:{isGuest:true}},
    { path:'/login', name:'Login', component: Login, meta:{isGuest:true}},
    { path:'/contactUs', name:'ContactUs', component: ContactUs, meta:{isGuest:true}},
    { path:'/productDetails/:id', name:'ProductDetails', component: ProductDetails,  meta:{isGuest:true}},
    { path:'/productDetailsAdmin/:id', name:'ProductDetailsAdmin', component: ProductDetailsAdmin,  meta:{requiresAuth:true}},
    
    //admin
    { path:'/dashboard', name:'Dashboard', component: Dashboard, meta:{requiresAuth:true}},
    { path:'/createRealestate', name:'CreateRealestate', component: CreateRealestate, meta:{requiresAuth:true}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'border-[#F7B233] w-1/2 mx-auto flex justify-center'
})
router.beforeEach((to, from, next) => {
    //console.log(store.state.user.token)
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else {
        next();
    }
});
export default router