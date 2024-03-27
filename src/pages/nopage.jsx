import { NavLink } from "react-router-dom"

export const NoPage = (props) => {
    return (
        <>
        <div className='topC'>

            <h2>Sorry!</h2>
            <p>
                ...you need to be authenticated before accessing this page's contents. 
            </p>
            <button className="link-btn"><NavLink to={'/'}>
                        Sign up with any email of login to continue...
            </NavLink></button>
        </div>
        </>
    )
}