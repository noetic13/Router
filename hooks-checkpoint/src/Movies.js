import './App.css';
import {useState} from 'react';
import Add from './Add' ;
import {Link} from 'react-router-dom';
const MovieList = ({movies,addMovie}) => {
  const [searchTerm, setSearchTerm]=useState('');
  

  


  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  };
  
  const filteredMovies = movies.filter((movies)=>movies.title.toLowerCase().includes(searchTerm));


  return (
    <div>

      
      <div className="search-container">
        <input type="text" placeholder="Search..." onChange={handleSearch}></input>
        
        <Add addMovie={addMovie}/>
        

        
    </div>
        {filteredMovies.map(movies =>
      <figure className="movie" style={{margin:"100px"}}>
        <div className="movie__hero">
          <img src={movies.posterURL} alt="Movie Poster" className="movie__img" />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary">{movies.title}<i className="fas fa-fire" /></h1>
            
          </div>
          <p className="movie__description">
            {movies.description}
          </p>
          <div className="movie__details">
            <p className="movie__detail"><span className="icons icons-red"><i className="fas fa-camera-retro" /> </span>Buzz
              Feitshans</p>
            <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock" /> </span>1h 33m</p>
            <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar" />
              </span>Rating : {movies.rating}</p>
          </div>
          <Link to= {`/movies/${movies.id}`} > Details</Link>
        </div>
        <div className="movie__price">$12.56</div>
      </figure>)}

    </div>
    
  );
};

export default MovieList;

