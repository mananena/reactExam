import Vlad from "../../pages/Vlad";
import Oleg from "../../pages/Oleg";
import Gena from "../../pages/Gena";
import { TABLE_ROUTE, GENA_ROUTE, VLAD_ROUTE, OLEG_ROUTE } from './configs';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import TableApp from '../../pages/TableApp';

const MainRouter = ({ isAuth = false }) => {

    const basedPath: RouteObject[] = [
        { path: GENA_ROUTE, element: <Gena />, },
        { path: VLAD_ROUTE, element: <Vlad /> },
        { path: OLEG_ROUTE, element: <Oleg />, },
        { path: "*", element: <Navigate to={'/'} replace /> }
    ]

    const authPath: RouteObject[] = [
        { path: TABLE_ROUTE, element: <TableApp /> },
    ]

    const resultPaths: RouteObject[] = basedPath

    if (isAuth) {
        resultPaths.push(...authPath)
    }
    return useRoutes(resultPaths);
}

export default MainRouter;