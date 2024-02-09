import { Link, Outlet } from "@remix-run/react";

export default function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <p>Welcome to the settings page.</p>
            <Outlet />
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="app">App</Link>
            </nav>
        </div>
    )
}