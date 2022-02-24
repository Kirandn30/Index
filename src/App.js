import React from "react";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Components/banner";
import Clients from "./Components/clients";
import Features from "./Components/feature";
import About from "./Components/about";
import Process from "./Components/process";
import Team from "./Components/team";
import Search from "./Components/search";
import CTA from "./Components/cta";
import News from "./Components/news";
import Agent from "./Components/agent";
import Footer from "./Components/footer";
import Scroll from "./Components/scroll";


function App() {
  return (
    <div className="boxed_wrapper">
    <Header/>
    <Banner/>
    <Clients/>
    <Features/>
    <About/>
    <Process/>
    <Team/>
    <Search/>
    <CTA/>
    <News/>
    <Agent/>
    <Footer/>
    <Scroll/>
    </div>
  );
}

export default App;
