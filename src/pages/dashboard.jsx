import { AuthData } from "../components/auth/authWrapper"

export const Dashboard = () => {
    const { user } = AuthData();
    return (
        <>
            <h2>Dashboard</h2>
            <p>Welcome {user.name}!</p>
        </>
    )
}

export default Dashboard;