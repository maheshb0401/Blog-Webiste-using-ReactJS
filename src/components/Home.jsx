import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home =()=>{
    const {data:blogs, pending, error} = useFetch(' http://localhost:3000/blogs/');

    return(
        <div className="home">
        {error && <div>{error}</div>}
        {pending && <div> Loading Data... </div>}
        {blogs && <Bloglist blog={blogs} />}
        </div>
    )
}

export default Home;