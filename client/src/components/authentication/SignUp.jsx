import React,{useState} from 'react'

const SignUp = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
         <h2>Sign Up</h2>
         <form onSubmit={(e)=>{
            e.preventDefault()
            props.handleSignUp({firstName,lastName,email,password})
         }}>
         <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
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
        <button type="submit">Sign Up</button>
        <p onClick={()=>props.handleView("login")}>Login</p>
         </form>
      
    </div>
  )
}

export default SignUp
