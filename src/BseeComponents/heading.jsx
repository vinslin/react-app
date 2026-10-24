import { useContext } from "react";
import UserContext from "../context/UserContext";

function Heading(){
    const {nameContext,setNameContext} = useContext(UserContext)

    function settingName(value){
        setNameContext(value);
    }
    return (<>
    <h1>{nameContext}</h1>
    <input onChange={(e) =>settingName(e.target.value)}></input>
    </>)
}

export default Heading;