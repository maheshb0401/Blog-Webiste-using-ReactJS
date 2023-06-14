import { useState, useEffect } from "react";

const useFetch =(url)=>{
   
    const[data, setData] = useState(null);
    const[pending, setPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        const AbortCont = new AbortController();

        fetch(url, {signal: AbortCont.signal})
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch data");
            }
           return res.json();
        })
        .then((data)=>{
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name==='AbortError'){
                console.log("Fetch Stopped")
            }
            else{
            setError(err.message);
            setPending(false);
            }
        })
        return ()=>{AbortCont.abort();}
    },[url])

  

    return {data, pending, error};

}

export default useFetch;