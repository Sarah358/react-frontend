import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import LoginForm from './Components/Pages/Login';
import RegisterForm from './Components/Pages/Register';

function App() {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
      left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
      left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #1059FF",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 2px #1059FF"
        : "solid 0px transparent", //Animate bottom border of register button
    });
  
    function registerClicked() {
      setRegistartionFormStatus(true);
    }
    function loginClicked() {
      setRegistartionFormStatus(false);
    }
  return (
    <Router>
    <div className="login-register-wrapper">
     <div className= "nav-buttons">
       <Link to='/login'>
     <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
        Login
        </animated.button>
        </Link>
        <Link to='/register'>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >Register
        </animated.button>
        </Link>
     </div>
     <div className= "form-group">
       <Switch>
     <animated.form action="" id="loginform" style={loginProps}>
       <Route path = '/login' component = {LoginForm}/>
          
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
       <Route path = '/register' component = {RegisterForm}/>
        </animated.form>
        </Switch>
     </div>

     <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password ? </a>
      </animated.div>
    </div>
    </Router>
  );
}



export default App;
