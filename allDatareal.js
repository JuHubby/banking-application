function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <>
        <h1> AllData {JSON.stringify(ctx)}</h1>
        <div class="container">
            <table class="table table-striped">
                <thead>
                <tr>
                <th scope="col">Id#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>        
        </>
        

    )
}