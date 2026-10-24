import ChildChild1 from "./child-child-component/childchild1";


function Child2(props){

    return (<>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
             props.users.map(user => 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td><button onClick={() => props.deleteUser(user.id)}>Delete</button></td>
                </tr>
             )
            }
        </tbody>
        </table>
        <h2>childchild1</h2>
           <ChildChild1 msg={props.msg} users={props.users} deleteUser={props.deleteUser}/>
    </>
    )
}

export default Child2;