import './Homescreen.css';
import Row from "../Row.js";
import requests from "../requests.js";
import Banner from "../Banner.js";
import Nav from "../Nav.js";

function Homescreen(props) {

  const getButtonStatus = (status) =>{
    if(status)
      props.getProfileButton(true);
  }
  return (
    <div className="homescreen">
      <Nav getButtonStatus = {getButtonStatus}/>
      <Banner />
      <Row title="NETFLIX ORIGINLAS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default Homescreen;
