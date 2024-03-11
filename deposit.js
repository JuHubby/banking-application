function Deposit() {
    const [depositAmount, setDepositAmount] = React.useState("");
    const [status, setStatus]= React.useState("");
    const [balance, setBalance] = React.useState(0);
    const [show, setShow] = React.useState(true);
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if(!field){
            setStatus(<span class="alert alert-danger d-flex align-items-center" > Holy guacamole! You should check in on the {label} field above.</span>);
            setTimeout(() => setStatus (''), 3000);
            
            return false;
        };
        if(field <= 0 ) {
            setStatus(<span class="alert alert-danger d-flex align-items-center" > Ups! 
            You're not able to deposit a negative amount. Please choose a positive number.</span>);
            setTimeout(() => setStatus (''), 3000);
            return false;
        } 
        return true
    
    }

    function handleDeposit() {
        
        if(!validate(depositAmount, 'Deposit Amount')) return;
        // i will think that setbalance is going to be setvariable after addign setdeposit and then push to usercontext object somehow//
        // const balance = balancebefore + depositAmount;   
        const totalBalanceSofar = parseInt(depositAmount)+parseInt(balance)
        setBalance(totalBalanceSofar);
        for(let i=1; i < ctx.users.length; i++ ) {
            const keyValue = i;
            // ctx.users[i].push({...ctx.users, keyValue});
            setIdElement(keyValue);
        }
        ctx.users.push({idElement,name,email,lastName,password});
        console.log(idElement,name,email,lastName,password);
        setShow(false); 
    }

    function clearForm() {
        setDepositAmount("");
        setShow(true);

    }

    return (
        <>
            <h1>Deposit {JSON.stringify(ctx)}</h1>
            <Card
             wide="50"
             header="Deposit"
             center="true"
             status={status}
             body= {show ? (
                <>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h5>Balance</h5>
                        </div>
                        <div class="col">
                            <h5>{'$ '+ balance}</h5>
                        </div>
                    </div>
                </div>
                Deposit Amount <br/>
                <input type="number" className="form-control" 
                id="depositAmount" 
                placeholder="Enter Amount" 
                value={depositAmount} 
                onChange={e => setDepositAmount(e.currentTarget.value)}>
                </input> <br/>
                <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <Button 
                                titleButton="Deposit"
                                handleOnclick={handleDeposit}
                                />
                            </div>
                        </div>
                    </div>
             </>) :
             (
                <>
                {/* add emoji happy */}
                {/* <i class="bi bi-emoji-smile"></i> */}
                <h5  class="alert alert-success text-center" >The deposit was successful.</h5>
                <br/>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h5>Your new balance is:</h5>
                        </div>
                        <div class="col">
                            <h5>{'$ '+ balance}</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                        <div class="col">
                            <Button 
                            titleButton="Make a new deposit."
                            handleOnclick={clearForm}
                            />
                        </div>
                    </div>
                </>
            )}

            />

        </>
    );
}