import React,{useState,useEffect} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GestionCategories from './GestionCategories';
import GestionMusic from "./GestionMusic";

const Gestion = () => {
    const [formDataMusic, setformDataMusic] = useState({
        title: '',
        artist: '',
        album: '',
        categoriesId: '1'
    });
    const [formDataCategories, setformDataCategories] = useState({
        name: ''
    });
    const [idMusicToDelete, setIdMusic]=useState('')
    const [idCategoryToDelete, setIdCategory]=useState('')
      const handleChangeMusic = (e) => {
        const { id, value } = e.target;
        setformDataMusic((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };
      const handleChangeCategories = (e) => {
        const { id, value } = e.target;
        setformDataCategories((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };
      const handleChangeCategoriesId = (e) => {
        const { id, value } = e.target;
        setIdCategory((value));
      };
      const handleChangeMusicsId = (e) => {
        const { id, value } = e.target;
        setIdMusic((value));
      };
    function addMusics(e){
        e.preventDefault();
        let data =JSON.stringify(formDataMusic)
        let config ={
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://lovemusic-v1.onrender.com/musics',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };
            axios
            .request(config)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log(error);
            });
    }
    function addCategory(e){
        e.preventDefault();
        let data =JSON.stringify(formDataCategories)
        let config ={
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://lovemusic-v1.onrender.com/categories',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };
            axios
            .request(config)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log(error);
            });
    
    } 
    function deleteCategory(e){
        e.preventDefault();
        let request=`https://lovemusic-v1.onrender.com/categories/${idCategoryToDelete}`
        console.log(request)
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: request,
            headers: { }
          };
                axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });
    }
    function deleteMusic(e){
        e.preventDefault();
        let request=`https://lovemusic-v1.onrender.com/musics/${idMusicToDelete}`
        console.log(request)
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: request,
            headers: { }
          };
                axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });
    }
    return(
        <>
        <h2>Add Music</h2>
        <Form key={1}>
        <fieldset>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Song Title</Form.Label>
            <Form.Control id="title" placeholder="Song Title" value={formDataMusic.title}  onChange={handleChangeMusic}/>
            <Form.Label htmlFor="disabledTextInput">Song Artist</Form.Label>
            <Form.Control id="artist" placeholder="Song Artist" value={formDataMusic.artist}  onChange={handleChangeMusic}/>
            <Form.Label htmlFor="disabledTextInput">Song Album</Form.Label>
            <Form.Control id="album" placeholder="Song Album" value={formDataMusic.album}  onChange={handleChangeMusic}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Categories</Form.Label>
            <Form.Select id="categoriesId" value={formDataMusic.categoriesId}  onChange={handleChangeMusic}>
                <option></option>
                <GestionCategories key={1}/>
            </Form.Select>
            </Form.Group>
            <Button type="submit" onClick={addMusics}>Submit</Button>
        </fieldset>
        </Form>
        <h2>Add Category</h2>
        <Form key={2}>
        <fieldset>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Category Name</Form.Label>
            <Form.Control id="name" placeholder="Category Name" value={formDataCategories.name}  onChange={handleChangeCategories}/>
            </Form.Group>
            <Button type="submit" onClick={addCategory}>Submit</Button>
        </fieldset>
        </Form>
        <h2>Delete Category</h2>
        <Form key={3}>
        <fieldset>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="yep">Categories</Form.Label>
            <Form.Select id="categoriesIdToDelete" value={idCategoryToDelete}  onChange={handleChangeCategoriesId}>
                <option></option>
                <GestionCategories key={2}/>
            </Form.Select>
            </Form.Group>
            <Button type="submit" onClick={deleteCategory}>Submit</Button>
        </fieldset>
        </Form>
        <h2>Delete Music</h2>
        <Form key={4}>
        <fieldset>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="yep">Musics</Form.Label>
            <Form.Select id="musicIdToDelete" value={idMusicToDelete}  onChange={handleChangeMusicsId}>
                <option></option>
                <GestionMusic/>
            </Form.Select>
            </Form.Group>
            <Button type="submit" onClick={deleteMusic}>Submit</Button>
        </fieldset>
        </Form>
        </>
    )
}
export default Gestion