import React,{useState} from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm]=useState('');
  

  


  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  };
  return (
    
      <div>
      
      <div className="search-container">
        <input type="text" placeholder="Search..." onChange={handleSearch}></input>
        
    </div>
    </div>
  )
}

export default Search
