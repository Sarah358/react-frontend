import React,{useState,useContext} from 'react';

function LoginForm(){
    // const {store,actions} = useContext(Context);
    const {name,setName} = useState("");
    const {password,setPassword} = useState("");

    // handleloginclick
    const handleClick = ()=> {
        const opts ={
            method:'POST',
            header:{
                "Content-type":"application/json"
            },
            body:JSON,stringify(
            {
                "name":name,
                "password":password
            })   
        };
        fetch('http://127.0.0.1:5000/token',opts)
        .then(res=>{
            if(res.status ===200)return res.json();
            else alert('There has been an error!!!')
        })
        .then()
        .catch(error=>{
            console.error('There was an error Logging in!!!',error);
        })


    }
    return(
      <React.Fragment>
        <label for="name">NAME</label>
        <input type="text" id="name" value={name} onChange = {(e)=>setName(e.target.value)}/>
        <label for="password">PASSWORD</label>
        <input type="password" id="password" value ={password} onChange = {(e)=>setPassword(e.target.value)}/>
        <input type="submit" onClick={handleClick} value="Login" className="submit" />
      </React.Fragment>
    
    );
   
  }
export default LoginForm;