import { Landing } from "../pages/landing"
import { Dashboard } from "../pages/dash/dashboard"
import { Clients } from "../pages/client/client"
import { Proposals } from "../pages/proposal/proposal"
import { Invoices } from "../pages/invoice/invoice"
import { NoPage } from "../pages/nopage"

export const nav = [
    { path: "*",            name:"NoPage",      element:<NoPage />,     isMenu:false,   isPrivate:false},
    { path: "/",            name:"Landing",     element:<Landing />,    isMenu:false,   isPrivate:false},
    { path: "/",            name:"Dashboard",   element:<Dashboard />,  isMenu:false,    isPrivate:true},
    { path: "/dashboard",   name:"Dashboard",   element:<Dashboard />,  isMenu:true,    isPrivate:true},
    { path: "/clients",     name:"Clients",     element:<Clients />,    isMenu:true,    isPrivate:true},
    { path: "/proposals",   name:"Proposals",   element:<Proposals />,  isMenu:true,    isPrivate:true},
    { path: "/invoices",    name:"Invoices",    element:<Invoices />,   isMenu:true,    isPrivate:true},
]
export default nav;