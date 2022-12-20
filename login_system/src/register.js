import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

import './Login.css';
import laden from './laden.png'
import rc from './Rc..png'
import synkers from './SynKers.png'


function Register(){

    const [ Firstname , setFirstname ] = useState ( "" );
    const [ Lastname , setLastname ] = useState ( "" );
    const [ Gender , setGender ] = useState ( "" );
    const [ Age , setAge ] = useState ( 0 );
    const [ DOB , setDOB ] = useState ( "" );
    const [ Email , setEmail ] = useState ( "" );
    const [ Mobile , setMobile ] = useState( 0 );
    const [ Password , setPassword ] = useState( "" );

    const regi = () =>{
        Axios.post("http://localhost:3001/register" , {
            Firstname : Firstname,
            Lastname : Lastname,
            Gender : Gender,
            Age : Age,
            DOB : DOB,
            Email : Email,
            Mobile : Mobile,
            Password : Password,            
        } ).then(() => {
            Navigate("/");
            alert("You have been registered successfully :)");
              }
          );
    };

    const Navigate = useNavigate();

    return(
        <div className=" main-container w-50">
            <div className="container">
                <button className="float-start general-button active-button" 
                    onClick={()=>{Navigate("/");}}>
                    LOGIN
                    <i className="fi fi-ss-user end-icons" ></i>
                </button>
                <button className="float-end general-button disabled-button" disabled>
                    REGISTER
                    <i className="fi fi-ss-user-add end-icons"></i>
                </button>
                <div className="container sub-container-1 float-start">
                    <div className="container row p-0">
                        <div className="col-6 float-start">
                            <p className="label-attributes">
                                FIRST NAME:
                            </p>
                            <br></br>
                            <input type="text" placeholder="Eg: Walter" 
                                className="input-attributes w-100"
                                onChange={(event)=>{setFirstname(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-6 float-end">
                            <p className="label-attributes">
                                LAST NAME:
                            </p>
                            <br></br>
                            <input type="text" placeholder="Eg: White" 
                                className="input-attributes w-100"
                                onChange={(event)=>{setLastname(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-4">
                            <p className="label-attributes">
                                GENDER:
                            </p>
                            <br></br>
                            <select className="input-attributes w-100" onChange={(event)=>{setGender(event.target.value)}} required>
                                <option className="option-attributes">SELECT</option>
                                <option className="option-attributes">MALE</option>
                                <option className="option-attributes">FEMALE</option>
                                <option className="option-attributes">OTHERS</option>
                                <option className="option-attributes">NOT PREFER TO TELL</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <p className="label-attributes">
                                AGE:
                            </p>
                            <br></br>
                            <input type="number" min="3" max="100" defaultValue="3" className="input-attributes w-100" 
                                onChange={(event)=>{setAge(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-4">
                            <p className="label-attributes">
                                DOB:
                            </p>
                            <br></br>
                            <input type="date" className="input-attributes w-100" onChange={(event)=>{setDOB(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-6 float-start">
                            <p className="label-attributes">
                                E-MAIL:
                            </p>
                            <br></br>
                            <input type="email" className="input-attributes w-100" placeholder="Eg: Walterwhite1965@gmail.com" 
                                onChange={(event)=>{setEmail(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-6 float-end">
                            <p className="label-attributes">
                                MOBILE NO:
                            </p>
                            <br></br>
                            <input type="tel" pattern="[0-9]{10}" placeholder="Eg: 9582xxxxxx" 
                                className="input-attributes w-100"
                                onChange={(event)=>{setMobile(event.target.value)}} required>
                            </input>
                        </div>
                        <div className="col-12">
                            <p className="label-attributes">
                                PASSWORD:
                            </p>
                            <br></br>
                            <input type="password" placeholder="Eg: P@ssw0rd" 
                                className="input-attributes w-100"
                                onChange={(event)=>{setPassword(event.target.value)}} required>
                            </input>
                        </div>
                    </div>
                    <button className="final-button general-button" onClick={regi}>
                        <p className="final-label">
                            REGISTER
                            <i className="fi fi-br-angle-right end-icons-err"></i>
                        </p>
                    </button>
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

export default Register;