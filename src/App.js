import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


import Dashboard from './Pages/Dashboard'; 


function App() {

  const routes = (
    <Routes>
        <Route path='/dashboard/*' element={<Dashboard/>} />
        <Route path="*" element={<Navigate to ="/dashboard/analytics/teams/efficiency" />}/>
    </Routes>
);


  return(
    <>
      <Router>
        {routes}
      </Router>
    </>
  )
}

export default App;
