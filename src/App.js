import './App.css'; 
import React from 'react';
import Row from './Row';
import requests from './request';
import "./Row.css";
import Banner from './Banner';

function App() {
  return (
    <div className="app">
    {/* {Navbar} */}

    <Banner/>

    <Row  title = "Trending" 
          fetchUrl={requests.fetchTrending}
          isLargeRow

    />
    <Row title = "NETFLIX Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
    <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title = "Documentries" fetchUrl={requests.fetchDocumantaries}/>
    
    </div>
  );
}

export default App;
