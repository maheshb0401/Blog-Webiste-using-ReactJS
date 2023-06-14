import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist =(props)=>{
    const blogs = props.blog;
    // const handelClick = props.handelClick;
    return(
        <div className="bloglist">
            <h2>All Blogs</h2>
            {blogs.map((blog)=>(                
            <div className="blogPreview" key={blog.id}>
                <Link to={`/blog${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Author: {blog.Author}</p>
                </Link>
            </div>
            ))}
        </div>
    )
}
export default Bloglist;