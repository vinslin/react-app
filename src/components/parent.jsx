import { useState } from "react";
import Child1 from "./child1";
import Child2  from "./child2";


function Parent(props){
    const [parentMessage,setParentMessage] = useState("Hi initial value");
   

  
    return (<>
        <h1>{parentMessage}</h1>
        <Child1 msg={parentMessage} users={props.lists} deleteUser={props.deleteList}/>
        <h1>child 2</h1>
        <Child2 users={props.lists} deleteUser={props.deleteList}/>
    </>)
}

export default Parent;