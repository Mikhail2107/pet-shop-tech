import CatalogItem from "../CatalogItem/CatalogItem";
import SearchInput from "../SearchInput/SearchInput";

import './Catalog.css'

function Catalog() {

    return (
        <>
        <div className="catalog-container" id="catalog" role="region" aria-label="Catalog of products">
            <h1 className="catalog-title" aria-level="1">Catalog</h1>
            <SearchInput aria-label="Search for products" />
            <ul className="product-list" role="list">
                <li><CatalogItem /></li>
                <li><CatalogItem /></li>
                <li><CatalogItem /></li>
                <li><CatalogItem /></li>
                <li><CatalogItem /></li>
                <li><CatalogItem /></li>
            </ul>
            <div className="card-list-more-container"> 
                <button className="card-list-more" aria-label="Show more products">Show more</button>
            </div>
            </div>

        </>
    )
}

export default Catalog