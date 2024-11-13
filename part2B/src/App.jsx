import axios from 'axios';
import { useEffect, useState } from 'react';
import Country from './components/Country';

const App = () => {
const baeUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const [countries, setCountries] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
  axios.get(baeUrl).then((response) => {
    setCountries(response.data);
    console.log("countries", response.data);
  }).catch((error) => {
    console.log("error", error);
  });
}, []);

const handleChange = (e) => {
  console.log("search param",e.target.value);
  setSearch(e.target.value);
}

const filteredCountries = countries.filter((country) => {
  return country.name.common.toLowerCase().includes(search.toLowerCase());
})

console.log("filteredCountries", filteredCountries.length);



  return (
    <div>
      <h1>Country Tracker 🌍 </h1>
      Find Country: <input type="text" value={search} onChange={handleChange}/>
      <div>
        {
          search === '' ? null :
          filteredCountries.length > 10 ? (
            <p>Add more search parameters</p>
          ) : (
            filteredCountries.map((country) => (
              <Country 
              key={country.cca3} 
              name={country.name.common} 
              flag={country.flags.png}
              languages={country.languages}
              capital={country.capital[0]}
              area={country.area}
              />
            ))
          )
        }
      </div>
    </div>
  );
}

export default App;