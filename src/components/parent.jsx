import { useState } from "react";
import Child1 from "./child1";
import Child2  from "./child2";


function Parent(){
    const [parentMessage,setParentMessage] = useState("Hi initial value");
    const [list,setList] = useState([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 35 }
    ]);

    function deleteList(id){
        setList(list => list.filter(li => li.id !== id))
    }
    return (<>
        <h1>{parentMessage}</h1>
        <Child1 msg={parentMessage} users={list} deleteUser={deleteList}/>
        <Child2 users={list} deleteUser={deleteList}/>
    </>)
}

export default Parent;