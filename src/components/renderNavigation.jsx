import { Link, NavLink, Route, Routes } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import { nav } from "./renderRoutes";
// import Dashboard from "../pages/dashboard";
// import Landing from "../pages/landing";

export const RenderRoutes = () => {
    // const { user } = AuthData();

    return (
        <Routes>
            {nav.map((r, i) => {
                // if (r.isPrivate && user.isAuthenticated) {
                //     return <Route key={i} path={r.path} element={r.element}/>
                // } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />
                // } else return false
            })}
        </Routes>
    )
}

// const router = createBrowserRouter([
//     {
//         path:'/dashboard',
//         element:<Dashboard />
//     },
//     {
//         path:'/',
//         element:<Landing />
//     },
// ])



export const RenderMenu = () => {
    const { user, logout } = AuthData();

    const MenuItem = ({r}) => {
        return (
            <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
        )
    }
    return (
        <div className="menu">
            {nav.map((r,i) => {
                if (!r.isPrivate && r.isMenu) {
                    return(
                        <MenuItem key={i} r={r}/>
                    )
                } else if (user.isAuthenticated && r.isMenu) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else return false
            })}

            { user.isAuthenticated ?
            <div className="menuItem"><NavLink to={'#'} onClick={logout}>Logout</NavLink></div>
            :
            [<div className="menuItem"><NavLink to='/'></NavLink></div>] }
        </div>
    )
}

export default RenderRoutes;