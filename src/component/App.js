import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
import Home from './Home';
import Education from './education'; 
import Health from './health';
import Welfare from './welfare';
import Loan from './loan';
import Savings from './savings';

function App() {
  return (
    <div>
         <Router>
        <Routes >         
          <Route exact path="/education" element={<Education/>}/>
          <Route exact path="/health" element={<Health/>}/>
          <Route exact path="/welfare" element={<Welfare/>}/>
          <Route exact path="/loan" element={<Loan/>}/>
          <Route exact path="/savings" element={<Savings/>}/>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
