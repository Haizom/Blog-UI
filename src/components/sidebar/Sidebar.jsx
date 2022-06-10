import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img src="profile.jpg" alt="sidebar" className="sidebarImg" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi,
          eligendi incidunt sapiente laudantium id voluptatum repellat maxime
          quae dignissimos! Commodi dolor veniam tenetur nulla ullam debitis
          quasi repellat mollitia!
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Food</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
            <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}
