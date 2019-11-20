import Vue from 'vue' 
import Router from 'vue-router' 
 
const LandingLayout = () => import('../components/landingLayout.vue')
const DashboardLayout = () => import('../components/dashboardLayout.vue')
 
function loadLanding(view) {
    return () => import(`../components/landingContents/${view}.vue`)
}

function loadView(view) { 
    return () => import(`../components/dashboardContents/${view}.vue`) 
} 
 
const routes = [   
    {
        path: '/',
        component: LandingLayout,
        children: [
            {
                name: 'LandingPage',
                path: '',
                component: loadLanding('landingPage')
            }
        ]
    },  
    {       
        path: '/',       
        component: DashboardLayout,       
        children: [ 
            {
                name: "login",
                path: "/login",
                component: loadView("login")
            },        
            {           
                name: 'UserController',           
                path: '/user',           
                component: loadView('userController')         
            },
            {           
                name: 'VehicleController',           
                path: '/vehicle',           
                component: loadView('vehicleController')         
            },       
        ]     
    },   
]   
Vue.use(Router) 
 
const router = new Router({mode: 'history', routes: routes}) 

export default router