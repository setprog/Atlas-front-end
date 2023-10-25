import './Apphome.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Main2 from './Main2';
import Footer from './Footer';
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

function Apphome() {
  const[results, setResults] = useState([]);
  return (
    <div>
      <Header />
      <Main />
     <Main2 />
    <Footer />
   {/* <SearchBar setResults={setResults}/>
   <SearchResultsList results={results}/> */}
    </div>
  );
}

export default Apphome;