import React,{useState,useEffect} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";


const Musics = (props) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    let request=`https://lovemusic-v1.onrender.com/categories/${props.categoriesId}`
    useEffect(() => {
        axios
        .get(request)
        .then((response) => setData(response.data.name))
        .catch((error) => setError(error))
        .finally(() => setLoaded(true));
    }, []);
    
    if(!loaded){
        return(
          <>
            <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
        </>
        )
      }
      else if(error!==""){
        return(
          <>
            <Alert variant="danger">
              <Alert.Heading>Erreur lors du chargement</Alert.Heading>
              <p>
                {error}
              </p>
            </Alert>
          </>
        )
      }
      else{
        return(
          <Link to={`/${props.categoriesId}`}>
            {data}
          </Link>
        )
      }
    }
export default Musics