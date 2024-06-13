import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";


function App() {
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

  const API_URL = "https://itunes.apple.com/search?term=";

  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
      console.log(resData);
    };
    fetchData();
  };

  return (
    <div>
      <SearchContext.Provider value={{ term: searchInput, handleSearch }}>
        <SearchBar />
      </SearchContext.Provider>
        {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
