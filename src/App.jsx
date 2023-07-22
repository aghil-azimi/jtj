import React, { useState } from "react";
import Navbar from "./components/Navbar";
import data from "./data/iData.json"

const App = () => {
 
  return (
    <>
      <Navbar links ={data.links} />
      
    </>
  );
 
};

export default App;
