import Button from "../../share/atom/Button/Button";
import CatalogItem from "../CatalogItem/CatalogItem";
import SearchInput from "../SearchInput/SearchInput";
import { useGetProductsQuery } from "../../entities/product/productApi/productsApi";
import Spiner from "../../share/spiner/spiner";

import './Catalog.css'

function Catalog() {
    const {data: products, isLoading,} = useGetProductsQuery();
 console.log(products)
if (isLoading) {
	return <Spiner />;
}
    return (
        <>
        <div className="catalog-container" id="catalog" role="region" aria-label="Catalog of products">
            <h1 className="catalog-title">Catalog</h1>
            <SearchInput aria-label="Search for products" />
            <ul className="product-list" role="list">                
									{products && products.map((product) => (
										<li key={product.id}>
										<CatalogItem {...product}/>
									</li> 
									))}
									                     
            </ul>
            <div className="card-list-more-container"> 
                <Button className="card-list-more" 
                    ariaLabel="Show more products" 
                    children="Show more" 
                    bgImage={false} >
                </Button>            
            </div>
            </div>
        </>
    )
}

export default Catalog