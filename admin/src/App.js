import './App.css';
import Dashboard from './components/Dashboard'; 
import {useState} from 'react';
import Sidebar from './components/Sidebar';

function App() {
  let data={
    earningsMonthly:"400,000",
    earningsAnnual:"480,000",
    task:60,
    pendingRequest:18
  }
  const [value,setValue]=useState("hai")
  return <>
  <div id='wrapper'>
    <Sidebar/>
    <h1>{value}</h1>
    <Dashboard data={{data,setValue}}/>

  </div>
  
  
  </>
   
}

export default App;
