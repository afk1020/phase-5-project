import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';
//import HomePage from '../Pages/HomePage';


function LoginForm(props){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    //const history = useHistory();

    // async function handleClickEvent(event) {
    //     event.preventDefault();
      
    //     try {
    //       await Auth.signIn(email, password);
    //       userHasAuthenticated(true);
    //       history.push("/");
    //     } catch (e) {
    //       alert(e.message);
    //     }
    //   }
    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }
    
    const handleSubmit = (evt) => {
        
        evt.preventDefault()
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/login`, {
            method: "POST",

            crossDomain: true, 
            withCredentials: true,

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)

			//props.history.push("/HomePage")

        })
        setName("")
        setPassword("")
        
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }

	// const onSubmit = () => { 
	// 	if(userFound){
	// 	return  <Redirect  to="/home/" />


	// }}

    return(
        <div>
            <div style={formDivStyle}>
            <h1>Log In</h1>
            <form className="ui form" >
                <div className="field">
                    <label>Name</label>
                    <input value={name} onChange={handleNameChange} type="text" placeholder="name"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>

                <Link to='/Products'>
                <button className="ui button" type="submit" onClick={props.handleLogin}>Login</button>
                </Link>

            </form>
        </div>
        </div>
    )
} 
// onClick={this.onSubmit}
export default LoginForm