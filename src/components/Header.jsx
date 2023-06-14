import { Link } from "react-router-dom";

const Header = ()=>{
    return( 
        <div className="blogName">
        <h1 id="homeTag">MS Blogs</h1>
        <Link to="/" className="rightHead" id="rightHead1">Home</Link>
        <Link to="/create" className="rightHead" id="rightHead2">New Blog</Link>
        </div>
    )
   
}

export default Header;