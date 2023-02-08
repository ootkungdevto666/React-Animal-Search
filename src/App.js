import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import AnimalItem from './components/AnimalItem';
import AnimalPost from './components/AnimalPost';
import animals from './data/animals'
import { useState } from 'react';

function App() {
  const [selectedAnimal,setSelectedAnimal] = useState(null);

  const onAnimalOpenClick = (animal) => {
    setSelectedAnimal(animal);
  }

  const onAnimalCloseClick = () => {
    setSelectedAnimal(null);
  }

  const AnimalElements = animals.map((animal,index)=>{
    return <AnimalItem key={index} animal={animal} onAnimalClick={onAnimalOpenClick}/>;
  });

  let animalPost = null;
  if(!!selectedAnimal){
    animalPost = <AnimalPost animal={selectedAnimal} onBgClick={onAnimalCloseClick}/>
  }
  return (
    <div className="app">
      <AppHeader/>
      <button onClick={()=>onAnimalOpenClick(animals[2])}>Click me onichang!</button>
      <div className='app-grid'>
          {AnimalElements}
      </div>
      {animalPost};
    </div>
  );
}

export default App;
