import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Component_01, Component_02 } from './components/VariosComponents';

const App = () => {
  return (  
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <Component_01/>
      <Component_02/>
    </div>
  );
}
 
export default App;