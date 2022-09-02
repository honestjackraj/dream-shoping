import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/Login";
import Register from "../container/Register";
import Details from "../container/Details";
import Shiping from "../container/Shiping";
import About from "../component/About";
import Contact from '../component/Contact';



function Routing(){
    return(
      <>
      
       {/* <Route path="/" component={Home}/>
       <Route path="*" component={Login}/> */}
      
       <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/home" component={Home}/>
      <Route path="/details" component={Details}/>
      <Route path="/shiping" component={Shiping}/>
      <Route path="/about" component={About}/>
      <Route path="/Contact" component={Contact}/>
     

      </>
    )
}
export default Routing




