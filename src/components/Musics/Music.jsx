import React,{useState,useEffect} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CategoriesMusics from "../Categories/CategoriesMusics"
import classes from '../Css/Css.module.css'

const Musics = () => {
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
        return(
          <section className={classes.Musics}>
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
        </section>
        )
      }
      else if(error!==""){
        return(
          <section className={classes.Musics}>
            <Alert variant="danger">
              <Alert.Heading>Erreur lors du chargement</Alert.Heading>
              <p>
                {error}
              </p>
            </Alert>
          </section>
        )
      }
      else{
        res=data.map(items=>
          <Card style={{ width: '18rem', margin: '5px'}} key={items.id}>
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{items.album}</Card.Subtitle>
              <Card.Text>
                Music by : {items.artist}
              </Card.Text>
              <Card.Link href="#">
                <CategoriesMusics
                categoriesId={items.categoriesId}
                />
              </Card.Link>
            </Card.Body>
          </Card>
        )
        return(
          <section className={classes.Musics}>
            {res}
          </section>
        )
      }
    }
export default Musics