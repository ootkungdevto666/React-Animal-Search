import './AnimalPost.css'
function AnimalPost(props){
    const {animal,onBgClick} = props;
    return(
        <div className="animal-post">
            <div className="animal-post-bg" onClick={onBgClick}/>
            <div className="animal-post-content">
                <img src={animal.thumbnailUrl} />
                <h4>{animal.title}</h4>
            </div>
        </div>
    )
}

export default AnimalPost;