
import { useParams , Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './App.css'


const Trailer = ({movies}) => {
    const {id}=useParams()
    const foundMovie= movies.find((el)=> el.id === +id)
  return (
    <div className="container">
        <h2>{foundMovie.title}</h2>
        <p>{foundMovie.description}</p>

      <iframe
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <br/>
      <Link to='/'>
      <Button variant="dark">Go Back</Button>
      </Link>
      
    </div>
    
  );
};

export default Trailer;
