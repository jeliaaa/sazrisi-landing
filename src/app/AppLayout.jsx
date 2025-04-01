import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="w-full min-h-dvh items-center justify-center flex flex-col relative bg-gray-100">
            <Outlet />
        </div>
    );
}

export default AppLayout;
