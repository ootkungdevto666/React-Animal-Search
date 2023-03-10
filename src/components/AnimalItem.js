import './AnimalItem.css'
function AnimalItem(props){
    const {animal,onAnimalClick} = props;
    return(
        <div className='animal-item'>
          <img src={animal.thumbnailUrl} onClick={()=>onAnimalClick(animal)}/>
          <h4>{animal.title}</h4>
        </div>
    );
}

export default AnimalItem;