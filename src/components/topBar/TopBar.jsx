import './topBar.css' 
import {Link} from 'react-router-dom'

export default function TopBar() {
    const user = true
    return (
        <div className='top'>
            <div  className='topRight'>
                {/* <i class="TopSocialIcon fa-brands fa-facebook-square"></i>
                <i class="TopSocialIcon fa-brands fa-twitter-square"></i>
                <i class="TopSocialIcon fa-brands fa-instagram-square"></i>
                <i class="TopSocialIcon fa-brands fa-github-square"></i> */}
                <Link className='link' to='/'>Magical Blog</Link>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="TopListItem"><Link className='link' to='/'>HOME</Link></li>
                    <li className="TopListItem"><Link className='link' to='/'>ABOUT</Link></li>
                    <li className="TopListItem"><Link className='link' to='/'>CONTACT</Link></li>
                    <li className="TopListItem"><Link className='link' to='/write'>WRITE</Link></li>
                    {
                        user && <li className="TopListItem"><Link className='link' to='/'>LOGOUT</Link></li>
                    }
                </ul>
            </div>
            <div className='topLeft'>
                {
                    user ? (<img src="profile.jpg" alt="profile" className='topImage' />
                        ) : (
                        <ul className="topList">
                            <li className="TopListItem"><Link className='link' to='/login'>LOGIN</Link></li>
                            <li className="TopListItem"><Link className='link' to='/register'>REGISTER</Link></li>
                        </ul>
                        )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
