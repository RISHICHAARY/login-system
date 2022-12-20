import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

import './Login.css';
import laden from './laden.png'
import rc from './Rc..png'
import synkers from './SynKers.png'

function Login(){
    const [ Username , setUsername ] = useState ( [] );
    const [ Password , setPassword ] = useState( [] );
    const Navigate = useNavigate();


    const [ Users_list , setUsers_list ] = useState([]);

    const validate = () => {
        for( var i=0 ; i < Users_list.length ; i++ ){
            if( (Users_list[i].first_name+" "+Users_list[i].last_name) === Username || (Users_list[i].first_name+Users_list[i].last_name) === Username ){
                if( Users_list[i].password === Password ){
                    alert("Success");
                    break;
                }
                else{alert("Invalid Password")}
            }
            else if( Users_list[i].email === Username ){
                if( Users_list[i].password === Password ){
                    alert("Success");
                    break;
                }
                else{alert("Invalid Password")}
            }
            else if( Users_list[i].mobile_no === Username ){
                if( Users_list[i].password === Password ){
                    alert("Success");
                    break;
                }
                else{alert("Invalid Password")}
            }
            else if( i === Users_list.length-1 ){alert("Invalid Username!!");}
        }
    };

    const check = () => {
        Axios.get("http://localhost:3001/login").then((response) => {
            setUsers_list(response.data);
            validate();
        })
    };

    return(
        <div className="main-container w-50">
            <div className="container">
                <button className="float-start general-button disabled-button" disabled>
                    LOGIN
                    <i className="fi fi-ss-user end-icons" ></i>
                </button>
                <button className="float-end general-button active-button" 
                    onClick={()=>{Navigate("/register");}}>
                    REGISTER
                    <i className="fi fi-ss-user-add end-icons"></i>
                </button>
                <div className="container sub-container-1 float-start">
                    <form>
                        <p className="label-attributes">
                            USERNAME:
                        </p>
                        <br></br>
                        <input type="text" placeholder="Email......" 
                            className="input-attributes w-100"
                            onChange={(event)=>{setUsername(event.target.value)}}>
                        </input>
                        <br></br>
                        <p className="label-attributes">
                            PASSWORD:
                        </p>
                        <br></br>
                        <input type="password" placeholder="Password......" 
                            className="input-attributes w-100"
                            onChange={(event)=>{setPassword(event.target.value)}}>
                        </input>
                        <button className="final-button general-button"
                            onClick={check} type="button">
                            <p className="final-label">
                            GET IN
                            <i className="fi fi-br-angle-right end-icons-err"></i>
                            </p>
                        </button>
                    </form>
                </div>
            </div>
            <div className="container sub-container-2">
                <img src={synkers} alt="SynKers" className="img-attributes"></img>
                <img src={laden} alt="Laden" className="img-attributes"></img>
                <img src={rc} alt="Rc." className="img-attributes"></img>
            </div>
        </div>
    );
}

export default Login;