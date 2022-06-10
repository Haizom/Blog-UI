import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <div className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email...' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button className="registerBtn"><Link className='link' to='/register'>Register</Link></button>
              <button className="loginBtn"><Link className='link' to='/login'>Login</Link></button>
        </div>
    </div>
  )
}
