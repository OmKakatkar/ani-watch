import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function PrivateRoute() {
	const { user } = useAuth();
	const location = useLocation();

	if (!user.token) {
		return <Navigate replace to="/login" state={{ path: location.pathname }} />;
	}

	return <Outlet />;
}
export default PrivateRoute;
