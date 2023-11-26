

import { Region } from './components/region/Region';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => setIsError(true));
  }, []);

  const regions = Array.from(new Set(data.map(country => country.region)));

  const filteredData = data.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const regionList = regions.map((region, idx) => (
    <Region key={idx} title={region} countries={filteredData.filter(country => country.region === region)} />
  ));

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {regionList}
    </div>
  );
}

export default App;



/*
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(resData => {
      setData(resData);
      setIsLoading(false);
    })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
    }, []);
    
    if (isLoading) {
      return <p>Loading...</p>;
    }
    
    if (isError) {
      return <p>Error loading data</p>;
    }
    
    const regions = Array.from(new Set(data.map(country => country.region)));
    
    const filteredData = data.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      const regionList = regions.map((region, idx) => (
        <Region key={idx} title={region} countries={filteredData.filter(country => country.region === region)} />
        ));
        
        return (
          <div className="App">
          <div className="search-container">
          <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          {regionList}
          </div>
          );
        }
        
        export default App;
        */
        
        
        /*
        import {Region} from './components/region/Region';
        import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const regions = Array.from(new Set(data.map(country => country.region)));

  const regionList = regions.map((region, idx) => (
    <Region key={idx} title={region} countries={data.filter(country => country.region === region)} />
  ));

  return (
    <div className="App">
      {regionList}
    </div>
  );
}

export default App;

*/

/*
function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(resData => setData(resData))
        .catch(err => setIsError(true));
      }, []);
    console.log(data.region);
    const regions = [];


     for (const country of data) {
       if(!regions.includes(country.region)) {
         regions.push(country.region);
      }
     }
     console.log(regions);
  
     const filteredData = data.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );



     const regionList = regions.map((region, idx) => (
      <Region title = {region} countries={data.filter(country => country.region === region)}/>
  ));




  return (
    <div className="App">
    <div className="search-container">
     <input
       type="text"
        placeholder="Search by country name"
       value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>


      {regionList}
    </div>
  );
}

export default App;
*/
