import { AuthData } from "../../components/auth/authWrapper"
import Dash from "../../components/dash";
import "./dashboard.css"


export const Dashboard = () => {
    const { user } = AuthData();
    return (
        <>
        <div className='dashboard'>
            <h2>Dashboard</h2>
            {/* <p>Welcome <p className="username">{(user.name).toUpperCase()}</p>!</p> */}
            <p>Welcome {(user.name).toUpperCase()}!</p>
            <Dash />
        </div>
        </>
    )
}

export default Dashboard;

