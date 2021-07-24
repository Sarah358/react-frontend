import React from 'react';


function RegisterForm(){
    return(
      <React.Fragment>
        <label for="fullname">full name</label>
        <input type="text" id="fullname" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="password">password</label>
        <input type="password" id="password" />
        <label for="confirmpassword">confirm password</label>
        <input type="password" id="confirmpassword" />
        <input type="submit" value="Register" className="submit" />
      </React.Fragment>
  
    );
  
  }


export default RegisterForm;