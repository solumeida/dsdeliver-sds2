import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import './styles.css';
import './StepsHeader'
import ProductList from './ProductList';
import { Product } from './types';
import { fetchProducts } from '../api';


function Order(){

  const [products,setProducts] =useState<Product[]>([]);
  console.log(products);
  useEffect(()=>{
      fetchProducts()
      .then(res=> setProducts(res.data))
      .catch(error=>console.log(error));
  },[])
  return (
    <nav className="orders-container"> 
   <StepsHeader/>
   <ProductList products={products}/>
    </nav>
  )
}
// npm install axios para fazer requesiçoes 
export default Order