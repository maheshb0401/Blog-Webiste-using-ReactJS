import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound =()=>{
    return(
        <div className="not-found">
            <h2>Can not find page....</h2>
        <Link to='/'>
        Back to Home Page
        </Link>
        </div>
        
    )
}

export default Notfound;