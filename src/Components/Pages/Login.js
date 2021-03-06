import React,{useState} from 'react';

function LoginForm(){
    // const {store,actions} = useContext(Context);
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    // handleloginclick
    const handleClick = ()=> {

        const opts ={
            method:'GET',
            header:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(
            {
                "name":name,
                "password":password
            })   
        };
        fetch('http://127.0.0.1:5000/login',opts)
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
        <form onSubmit = {handleClick}>
        <label for="name">NAME</label>
        <input type="text" id="name" value={name || ''} onChange = {(e)=> setName(e.target.value)}/>
        <label for="password">PASSWORD</label>
        <input type="password" id="password" value ={password} onChange = {(e)=>setPassword(e.target.value)}/>
        <input type="submit"  value="Login" className="submit" />
        </form>
      </React.Fragment>
    
    );
   
  }
export default LoginForm;