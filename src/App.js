
import './App.css';
import Profilephoto from './Component/Profile/Profilephoto';
import Fullname from './Component/Profile/Fullname';
import Address from './Component/Profile/Address';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
function App() {
  return( 
    <div className="App">
    <Address/>
    <Fullname/>
    <Profilephoto/>

    </div>
  );
  
}

export default App;