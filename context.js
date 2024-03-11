

// import { createContext } from "react";
const Route =  ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
// const UserContext = createContext(null);

const UserContext = React.createContext(null);


const defaultColor = "success";

function Card(props) {

        function classes() {
            const hd = props.hdColor ? `${props.hdColor}` : defaultColor;
            const txt= props.txtColor ? `text-${props.txtColor} ` : `text-`;
            return `card-header ${txt}bg-${hd} mb-3 border border-${hd} border-3`;
        };

    return (
        <div className="container ">
            <div className="row">
                <div className="col text-center">
                    <div className={`card text-ligth  mb-3 border border-${props.hdColor ? props.hdColor : defaultColor} ${props.center == "true" ? "m-auto" :" " } float-none ${props.hdColor ? `w-${props.wide}` : ''} `} style={{ width: '18rem' }}>
                        <div className={classes()}><h5>{props.header}</h5></div>
                        <div className="card-body">  
                            <div className={`col text-${props.textCenter =="true" ? "center" : "start"}`}>
                                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                                {props.text && (<p className="card-text">{props.text}</p>)}
                                {props.image && (<><img src={props.image} className="card-img-top" alt="..."></img> </>)}
                                <br/>
                                {props.body}
                                <br/>
                            </div>
                            {/* <div class="container text-center ">
                                <div class="row">
                                    {props.firstButton && (
                                    <div class="col">
                                    <Button color={props.hdColor}className={`btn btn-${props.hdColor ? props.hdColor : defaultColor}`}
                                     titleButton={props.firstButton}/>
                                    </div>)}
                                    {props.secondButton && (
                                    <div class="col">
                                    <Button titleButton={props.secondButton}/>
                                    </div>)}
                                    {props.thirdButton && (
                                    <div class="col">
                                    <Button titleButton={props.thirdButton}/>
                                    </div>)}
                                    {props.fourthButton && (
                                    <div class="col">
                                    <button onClick={props.handleFourthOnclick} className={`btn btn-${props.hdColor ? props.hdColor : defaultColor}`}>{props.fourthButton}</button>
                                    </div>)}
                                    
                                </div>
                            </div> */}
                            {props.status && (<div id='createStatus'> {props.status}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        
    );
}

function Button(props) {


    return (
        <>
        <div className="container text-center">
        <div className="row">
        <div className="col">
            <button onClick={props.handleOnclick} className={`btn btn-${props.color ? props.color : defaultColor}`}>{props.titleButton}</button>
        </div>
        </div>
        </div>
        </>
    )
    }


    function LinkPersonalizado(props) {
        return (
            <>
            <div className="container text-center">
            <div className="row">
            <div className="col">
                <a href={props.handleOnclick} className={`btn btn-${props.color ? props.color : defaultColor}`}>{props.titleButton}</a>
            </div>
            </div>
            </div>
            </>
        )
        }