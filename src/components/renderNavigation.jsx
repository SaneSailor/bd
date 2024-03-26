import { Link, NavLink, Route, Routes } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import { nav } from "./renderRoutes";

export const RenderRoutes = () => {
    const { user } = AuthData();
    {console.log(user.name)}

    return (
        <Routes>
            {nav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element}/>
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else return false
            })}
        </Routes>
    )
}

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