import { Link } from "react-router-dom";
import { TABLE_ROUTE, GENA_ROUTE, OLEG_ROUTE, VLAD_ROUTE } from "../routes/configs";


const Navbar = ({ isAuth = false }) => {

    return (
        <>
            <Link to={VLAD_ROUTE}>VLAD_ROUTE</Link>
            <br></br>
            <Link to={OLEG_ROUTE}>OLEG_ROUTE</Link>
            <br></br>
            <Link to={GENA_ROUTE}>GENA_ROUTE</Link>
            <br></br>
            <Link to={TABLE_ROUTE}>TABLE_ROUTE</Link>
            <br></br>
        </>
    )
}

export default Navbar;