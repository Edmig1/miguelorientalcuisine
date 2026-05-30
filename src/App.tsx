import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./Banner";
import MenuMobile from "./MenuMobile";
import Produtos from "./Produtos";

function App() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App overflow-x-hidden">
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Banner setIsOpen={setIsOpen} />
        <Produtos></Produtos>
    </div>
  );
}

export default App;
