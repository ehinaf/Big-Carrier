import SideBar from "./Dashboard/SideBar";
import NavBar from "./Dashboard/NavBar";

export default function Authenticated({ auth, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100 relative">
            <SideBar />
            <NavBar auth={auth} />
            <main className="ml-72">{children}</main>
        </div>
    );
}
