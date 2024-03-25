import { Landing } from "../pages/landing"
import { Dashboard } from "../pages/dashboard"
import { Clients } from "../pages/client"
import { Proposals } from "../pages/proposal"
import { Invoices } from "../pages/invoice"
import { NoPage } from "../pages/nopage"

export const nav = [
    { path: "*",            name:"NoPage",      element:<NoPage />,     isMenu:false,   isPrivate:false},
    { path: "/",            name:"Landing",     element:<Landing />,    isMenu:false,   isPrivate:false},
    { path: "/dashboard",   name:"Dashboard",   element:<Dashboard />,  isMenu:true,    isPrivate:true},
    { path: "/clients",     name:"Clients",     element:<Clients />,    isMenu:true,    isPrivate:true},
    { path: "/proposals",   name:"Proposals",   element:<Proposals />,  isMenu:true,    isPrivate:true},
    { path: "/invoices",    name:"Invoices",    element:<Invoices />,   isMenu:false,   isPrivate:true},
    // { path: "*", name:"NoPage", element:<NoPage />, isMenu:false, isPrivate:true},
]