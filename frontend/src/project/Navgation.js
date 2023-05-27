import React from 'react'
import {Link  , useNavigate} from "react-router-dom"

export default function Navgation() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear() ;
    navigate('/signup')
  }	
  return (
    <div>
      <img  alt='edgle' className='logo'
      src='https://www.picamon.com/wp-content/uploads/2020/10/Picamon-northern-lights-0-5f8b42955e1ad'
      />
      { auth ? 
        <ul className='nav-ul'>
            <li><Link to='/'>Voting Page</Link></li>
            {JSON.parse(auth).name === 'admin' && (
      <li><Link to='/Addminpage'>Admin Page</Link></li>
    )} <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link> </li> 
            </ul> :
           
           <ul className='nav-ul nav-right' ><li><Link to='/signup'>Signup </Link></li>
             <li><Link to='/login'>Login</Link></li> </ul> 
        }
    </div>
  )
}
