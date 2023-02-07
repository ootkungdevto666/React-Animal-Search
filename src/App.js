import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import AnimalItem from './components/AnimalItem';
import animals from './data/animals'
import { useState } from 'react';

function App() {
  const [text,setText] = useState("ไม่ต้องห่วงฉัน");
  const AnimalElements = animals.map((animal,index)=>{
    return <AnimalItem key={index} animal={animal}/>;
  })
  return (
    <div className="app">
      <AppHeader/>
      <div className='app-grid'>
          {AnimalElements}
      </div>
    </div>
  );
}

export default App;
