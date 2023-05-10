
import {useState} from 'react';
import Movies from './Movies'
import {Routes , Route} from 'react-router-dom';
import Trailer from './Trailer';

function App() {
  const [movies,setMovies]=useState([{
    id:1,
    title: 'The Shawshank Redemption',
    description:'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
    posterURL: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/shawshank_redemption_R04_NG06274_B-440492_f9abf092-fa60-4d3c-954b-a71c67d7b206-912429.jpg",
    rating: 5,
    trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
  },
  {
    id:2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 5,
    trailer:"https://www.youtube.com/watch?v=UaVTIH8mujA&ab_channel=ParamountPictures"
    },
  {
    id:3,
    title: "12 Angry Men",
    description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    posterURL: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e6520b78339627.5ca24af435882.png",
    rating: 4.9,
    trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
  },
  {
    id:4,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 4.8,
    trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
  },
  {
    id:5,
    title: "The Lord of the Rings: The Return of the King",
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterURL: "https://m.media-amazon.com/images/I/81EBp0vOZZL.jpg",
    rating: 4.9,
    trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
  },
  {
    id:6,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 4.7,
    trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
  },
  ])

  

const addMovie=(movie)=>{
  setMovies(movies.concat(movie))
}


  return (
    <div>
        <Routes>
         <Route path = '/' element={<Movies addMovie={addMovie} movies= {movies}/>} /> 
         <Route path = '/movies/:id' element = {<Trailer movies={movies}/>}/>
        </Routes>
    </div>
  );
}

export default App;
