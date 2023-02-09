import { Navigate } from "react-router-dom"
import { ComponentRouteProps } from "types/GlobalInterfaces"

const PrivateRoute = ({ isAuthenticated, children }: ComponentRouteProps) => {

    if (!isAuthenticated) {
        return <Navigate to='/' />
    }

    return children
}

export default PrivateRoute;