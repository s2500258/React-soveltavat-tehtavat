import { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"; 
import CountryList from './components/CoutryList';
import ResultCountry from './components/ResultCountry';

function App() {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

 useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data)
        setCountriesToShow(response.data)
      })
  }, [])

  const handleSearchInput = (event) => {
    setCountriesToShow(countries.filter(country => 
      country.name.common?.toLowerCase().includes(event.target.value.toLowerCase())))
  }
    
  return (

    <div className="app">
       
      <div>
      <label>Find a country: </label>
      <input className="search-input"
          onChange={handleSearchInput}
        /> 
        <p> </p>
        <ResultCountry countriesToShow={countriesToShow} />

      </div>

      <CountryList countriesToShow={countriesToShow} />
    </div>
  )
   
}

export default App;
