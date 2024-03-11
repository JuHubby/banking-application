function Login() {
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [show, setShow] = React.useState(true);
   


    function validate(field, label) {
        if(!field) {
            setStatus(<span class="alert alert-danger d-flex align-items-center" > <strong> Holy guacamole! </strong>    
            You should check in on {label} field above.</span>);
            setTimeout(() => setStatus (''), 3000);
            
            return false;
        };
        //validacion si idELement exists in te object array, however idElement is from other componet
        // if(ctx.users.includes(idElement) )return true;
        return true;
    }

    function handleLogIn() {
        
        console.log(email,password);
        if(!validate(email, 'Email')) return;
        if(!validate(password, 'Password')) return;
        
        setShow(false);  
    }

    function clearForm() {
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setShow(true);


    }
    const ctx = React.useContext(UserContext);
    return (
        <>
        <h1>login {JSON.stringify(ctx)}</h1>   
        <Card
            
            header="Log into your Account"
            nameButton="Save"
            hdColor="dark"
            textCenter="true"
            status={status}
            body={show ? (
                <>
                <strong>Email:</strong> <br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.currentTarget.value)}
                ></input> <br/>
                <strong>Password:</strong> <br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}
                ></input> <br/>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <Button 
                            titleButton="LogIn"
                            handleOnclick={handleLogIn}
                            />
                        </div>
                    </div>
                </div>
                </>
                ):(
                <>
                
                <p>Your current balance is:</p>
                <br/>
                {/* I want to link this to balance context or prop variable */}
                <h5>$2500</h5>
                <br/>
                <div class="row">
                        <div class="col">
                            <LinkPersonalizado 
                            titleButton="Sign out"
                            handleOnclick="#"
                            />
                        </div>
                    </div>
                </>
            )}
        />
    
        </>    
    )
}