import './AnimalItem.css'
function AnimalItem(props){
    const {animal} = props;
    return(
        <div className='animal-item'>
          <img src={animal.thumbnailUrl} />
          <h4>{animal.title}</h4>
        </div>
    );
}

export default AnimalItem;