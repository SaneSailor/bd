import { NavLink, Route, Routes } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import { nav } from "./renderRoutes";

export const RenderRoutes = () => {
    const { user } = AuthData();
    console.log(user.name)

    return (
        <>
        <Routes>
            {nav.map((r, i) => {
                if ((user.name!==null) && r.isPrivate) {
                        return <Route key={i} path={r.path} element={r.element}/>
                } else if ((user.name===null) && !r.isPrivate) {
                        return <Route key={i} path={r.path} element={r.element} />
                }
                else return false      
                })}
        </Routes>
        </>

    )
}

export const RenderMenu = () => {
    const { user, logout } = AuthData();

    const MenuItem = ({r}) => {
        return (
            <div className="menuItem"><NavLink to={r.path}>{r.name}</NavLink></div>
        )
        
    }
    return (
        <div className="menu">
        { nav.map((r, i) =>
            {
                if (!r.isPrivate && r.isMenu) {
                    return(
                        <MenuItem key={i} r={r}/>
                    )
                } else if ((user.name!==null) && r.isMenu) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else return false
            } )}

            { (user.name!==null) ?
            <button className="logoutBtn" onClick={logout}>Logout</button>
            : [null] }
        </div>
    )
}

export default RenderRoutes;