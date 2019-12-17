import Login from "../views/Login/Login";
import Index from "../views/Index/Index"
import Register from "../views/Register/Register";
import Detail from "../views/Detail/Detail";
import Home from "../views/Index/Home/Home";
import Dynamic from "../views/Index/Dynamic/Dynamic";
import Write from "../views/Index/Write/Write";
import My from "../views/Index/My/My";
import Vote from "../views/Vote/Vote";
import Initiate from "../views/Initiate/Initiate";
const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/vote',
        component:Vote
    },
    {
        path:'/initiate',
        component:Initiate
    },
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:"/index/home",
                component:Home
            },
            {
                path:"/index/dynamic",
                component:Dynamic
            },
            {
                path:"/index/write",
                component:Write
            },
            {
                path:"/index/my",
                component:My
            },
            {
                to:"/index/home"
            }
        ]
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:"/",
        to:"/index"
    }
]

export default routes;