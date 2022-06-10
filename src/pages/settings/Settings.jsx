import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="updateTitle">Update Your Account</span>
                <span className="deleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src="profile.jpg" alt="profile" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPicon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}} />
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Hazim' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='hazim@gmail.com' />
                <label htmlFor="">Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
