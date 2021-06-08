import React from 'react';
import Nav from './Nav';
import Home from './Home';
import CovidDataContainer from './CovidDataContainer';
import CovidGraph from './CovidGraph';
import DetailsContainer from './DetailsContainer';
import Preloader from './Preloader';


function App() {
  
  window.addEventListener('scroll', ()=>{
    let scroll = document.querySelector('.scrollToTop');
    scroll.classList.toggle('active', window.scrollY >500);
  })
  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  return (<>
     <Preloader/>
     <div className="div_wrapper">
    <Nav/>
    <Home/>
    <DetailsContainer/>
    <CovidDataContainer/>
    <CovidGraph/>
    <div className="footer">©2021 CovidLive </div>
    <div className="scrollToTop" onClick={scrollToTop}><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></div>
    </div>
  </>);
}

export default App;
