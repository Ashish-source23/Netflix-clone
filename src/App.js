import './App.css'; 
import React from 'react';
import Row from './Row';
import requests from './request';
import "./Row.css";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">

    <Nav/>

    <Banner/>

    <Row  title = "NETFLIX Originals" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow

    />
    <Row title = "Trending" fetchUrl = {requests.fetchTrending}/>
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
