import './SearchInput.css'

function SearchInput(){
    return (
        <>
        <div className="search-panel">
                <input className="search-input" type="text" name="search-panel" id="search-panel" placeholder="Search by title" />
            </div>
        </>
    )
}

export default SearchInput;