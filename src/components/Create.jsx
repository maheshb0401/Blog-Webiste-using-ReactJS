import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [Author, setAuthor] = useState('');
    const history = useHistory();

    const Handelsubmit=(e)=>{
    e.preventDefault();
    const blog = {title, Author, body};
    console.log(blog);
    fetch('http://localhost:3000/blogs/',
    {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log("New blog added");
        history.push('/');
    })
    }

    return(
       <div className="create-blog">
        <h2>Add a New Blog</h2>
        <form className="form-content" onSubmit={Handelsubmit}>
            <label>Blog Name:</label>
            <input 
            type="text" 
            required
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
            />
            <label>Blog Content:</label>
            <textarea
            required
            value={body}
            onChange={(e)=>{
                setBody(e.target.value);
            }}
            >
            </textarea>
            <label>Author Name:</label>
            <input 
            type="text" 
            required
            value={Author}
            onChange={(e)=>{
                setAuthor(e.target.value);
            }}/>
            <button>Add Blog</button>
           
        </form>
       </div>
    )
}

export default Create;