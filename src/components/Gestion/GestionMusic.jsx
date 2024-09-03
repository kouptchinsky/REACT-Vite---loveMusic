import React,{useState,useEffect} from "react";
import axios from 'axios';

const GestionMusic = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    let res
    useEffect(() => {
        axios
        .get('https://lovemusic-v1.onrender.com/musics')
        .then((response) => setData(response.data))
        .catch((error) => setError(error))
        .finally(() => setLoaded(true));
    }, []);
    if(!loaded){
        return (
            <></>
          )
      }
      else if(error!==""){
        return (
            <></>
          )
      }
      else{
        res=data.map(items=>
            <option key={items.id} value={items.id}>{items.title}</option>
        )
        return (
            <>
                {res}
            </>
          )
      }
    }
  

export default GestionMusic