import CatalogItem from "../CatalogItem/CatalogItem";
import SearchInput from "../SearchInput/SearchInput";

import './Catalog.css'

function Catalog() {

    return (
        <>
        <div className="catalog-container" id="catalog">
            <h1 className="catalog-title">Catalog</h1>
            <SearchInput />
            <ul className="product-list">
                <li className="product-item"><CatalogItem /></li>
                <li className="product-item"><CatalogItem /></li>
                <li className="product-item"><CatalogItem /></li>
                <li className="product-item"><CatalogItem /></li>
                <li className="product-item"><CatalogItem /></li>
                <li className="product-item"><CatalogItem /></li>
            </ul>
        </div>
        </>
    )
}

export default Catalog