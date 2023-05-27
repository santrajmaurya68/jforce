import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const [phone , setPhone] = useState("")
const navigate = useNavigate() ;
  const collectdata = async () => {
    console.log(name, email, password);
    let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ name, email, password,phone }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    result = await result.json()
    console.log(result)
    if(result){
        navigate('/')
    }	
}

    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputbox' type='text' placeholder='Enter Name' 
             onChange={(e) => setName(e.target.value)} value={name} />

            <input className='inputbox' type='text' placeholder='Enter Email-id'
             onChange={(e) => setEmail(e.target.value)} value={email} />

            <input className='inputbox' type='password' placeholder='Enter your password' 
            onChange={(e) => setPassword(e.target.value)} value={password} />

<input className='inputbox' type='password' placeholder='Enter your phone' 
            onChange={(e) => setPhone(e.target.value)} value={phone} />
            <button className='signupbtn' type='button' onClick={collectdata}>Sign up</button>
        </div>
    )
}
