import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import ShowAssociate from "../components/ShowAssociate.js";
import Axios from 'axios';
import Link from "next/link";
import axios from 'axios';
//
function App() {

  return (

    <div className="App">
    
    <Header />

    <ShowAssociate />

    </div>
  );
}

export default App;