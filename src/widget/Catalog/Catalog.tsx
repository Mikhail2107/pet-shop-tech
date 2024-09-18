import Button from "../../share/atom/Button/Button";
import CatalogItem from "../CatalogItem/CatalogItem";
import SearchInput from "../SearchInput/SearchInput";

import './Catalog.css'

function Catalog() {

    return (
        <>
        <div className="catalog-container" id="catalog" role="region" aria-label="Catalog of products">
            <h1 className="catalog-title">Catalog</h1>
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
                <Button className="card-list-more" ariaLabel="Show more products" children="Show more" ></Button>            
            </div>
            </div>
        </>
    )
}

export default Catalog