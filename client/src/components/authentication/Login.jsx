import React,{useState} from 'react'
import login from "../../login.webp"
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='login-container'>
      <img src={login} alt='no'/>
            <div className='login'>
            <h2>Login</h2>
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.handleLogin(email,password)
      }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p onClick={()=>props.handleView("signup")} >SignUp</p>
            </div>
        </div>
  )
}

export default Login
