import './AppSearch.css'
const AppSearch = (props) => {
    const { value , onValueChange } = props;
    return (
        <div className='app-search'>
            <input className='app-search-input' type="text" placeholder='ค้นหน่อยยย' value={value} onChange={(event) => { onValueChange(event.target.value) }} />
        </div>
    )
}

export default AppSearch;