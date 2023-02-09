import { Navigate } from "react-router-dom"
import { ComponentRouteProps } from "types/GlobalInterfaces"

const PublicRoute = ({ isAuthenticated, children }: ComponentRouteProps) => {

    if (isAuthenticated) {
        return <Navigate to='/user/home' />
    }

    return children
}

export default PublicRoute;