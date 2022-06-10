import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img src="header.jpg" alt="post" className="postImg" />
      <div className="postIntro">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle"><Link className='link' to='/post'>Lorem ipsum dolor sit</Link></span>
        <span className="postTime">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        similique voluptatibus libero ad illo? Repellendus et reprehenderit
        eaque itaque, quisquam numquam! Culpa, sed autem. Saepe nulla debitis
        sit dignissimos velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        similique voluptatibus libero ad illo? Repellendus et reprehenderit
        eaque itaque, quisquam numquam! Culpa, sed autem. Saepe nulla debitis
        sit dignissimos velit
      </p>

    </div>
  );
}
