import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import AnimalItem from './components/AnimalItem';
import AnimalPost from './components/AnimalPost';
import animals from './data/animals'
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchText, setSearchText] = useState('');

  const onAnimalOpenClick = (animal) => {
    setSelectedAnimal(animal);
  }

  const onAnimalCloseClick = () => {
    setSelectedAnimal(null);
  }

  const AnimalElements = animals.filter((animal) => {
    return animal.title.includes(searchText);
  }).map((animal, index) => {
    return <AnimalItem key={index} animal={animal} onAnimalClick={onAnimalOpenClick} />;
  });

  let animalPost = null;
  if (!!selectedAnimal) {
    animalPost = <AnimalPost animal={selectedAnimal} onBgClick={onAnimalCloseClick} />
  }
  return (
    <div className="app">
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {AnimalElements}
          </div>
        </div>
      </section>
      {animalPost};
    </div>
  );
}

export default App;
