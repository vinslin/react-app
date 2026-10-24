import { useContext } from "react"
import UserContext from "../context/UserContext"

function NavBar(){
    const {nameContext} = useContext(UserContext);

    return (<>
    <h2>{nameContext}</h2>
    </>)
}

export default NavBar;