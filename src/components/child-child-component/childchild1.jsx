
function ChildChild1(props){

    var list = props.users;
    console.log(list);
    return (<>
        <h2>{props.msg}</h2>
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
    </>
    )
}

export default ChildChild1;