import { useGetProductsQuery } from "../../entities/product/productApi/productsApi";
import { useState, useEffect } from "react";
import Button from "../../share/atom/Button/Button";
import CatalogItem from "../CatalogItem/CatalogItem";
import SearchInput from "../SearchInput/SearchInput";
import Spiner from "../../share/spiner/spiner";
import PageNotFound from "../../pages/PageNotFound";
import useDebounce from '../../hook/useDebounce';
import { useNavigate } from 'react-router-dom';


import './Catalog.css'

function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
		const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const [currentPage] = useState(1);
    const [productsPerPage,setProductsPerPage] = useState(6);
    const { data: products, isLoading, error } = useGetProductsQuery({
        q: debouncedSearchTerm, 
        limit: productsPerPage,
        skip: (currentPage - 1) * productsPerPage,
      });
    const navigate = useNavigate();
    const [, setUser] = useState(null);
 
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          navigate('/login');
        }
      }, [navigate]);

     const handleSearch = (searchTerm: string) => {
       setSearchTerm(searchTerm);
     };

		 const  handleShowMore = () => {
			setProductsPerPage(prevPage => prevPage + 22)
		 }
    if (isLoading) {
        return <Spiner />;
    }
    if (error) {
        return <PageNotFound />;
      }

      // console.log(products)
    return (
        <>
        <div className="catalog-container" id="catalog" role="region" aria-label="Catalog of products">
            <h1 className="catalog-title">Catalog</h1>
            <SearchInput aria-label="Search for products" 
                        onSearch={handleSearch}/>
            <ul className="product-list" role="list">                
				{products && products.map((product) => (
				<li key={product.id}>
          
					<CatalogItem {...product}/>          
				</li> 
			))}									                     
            </ul>
            <div className="card-list-more-container"> 
                <Button className="card-list-more" 
										onClick={handleShowMore}
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