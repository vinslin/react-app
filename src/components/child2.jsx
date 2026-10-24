
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
                </tr>
             )
            }
        </tbody>
        </table>
    </>
    )
}

export default Child2;