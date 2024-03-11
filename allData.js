function AllData() {
    const [loaded, setLoaded] = React.useState(false);
    const [status, setStatus] = React.useState('');

    const ctx = React.useContext(UserContext);


    function handleLoad () {

        console.log(ctx.users);
        setLoaded(true);
        if(!loaded) {
        setStatus(<span class="alert alert-danger d-flex align-items-center" > Oh my guacamole! Something's not quite right..</span>);
        setTimeout(() => setStatus (''), 3000);
        };

       setLoaded(true);

    };


    return (
        <>
        <h1> AllData {JSON.stringify(ctx)}</h1>
        <Button
        titleButton="Retrieve data"
        handleOnclick={handleLoad}/>
                {loaded && ctx.users.map((user,i) => 
                <user-row key={i}
                name={user.name} 
                lastName={user.lastName}
                email={user.email}
                password={user.password}
                balance={user.balance}
                    />
                )}    
        </>
        

    )
}