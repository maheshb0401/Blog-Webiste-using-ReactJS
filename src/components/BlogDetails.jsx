import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails =()=>{

const {id}= useParams();

const history = useHistory();

const handelDelete =()=>{
    fetch('http://localhost:3000/blogs/'+ blog.id, {
        method: 'DELETE',
    }).then(()=>{
        history.push('/');
    })
}
const {data:blog, pending, error} = useFetch(' http://localhost:3000/blogs/'+id);
    return(
        <div className="blog-details">
            {pending && <div>Loading Data...</div>}
            {error && <div>{error}</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.Author}</p>
                <div>{blog.body}</div>
                <button onClick={()=>{handelDelete()}}>Delete Blog</button>
            </article>)}
        </div>
    )
}

export default BlogDetails;