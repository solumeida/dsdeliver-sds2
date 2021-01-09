import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import './styles.css';
import './StepsHeader'
import ProductList from './ProductList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


function Order(){

  const [products,setProducts] =useState<Product[]>([]);
  const [orderLocation,setOrderLocation]=useState<OrderLocationData>();
   useEffect(()=>{
      fetchProducts()
      .then(res=> setProducts(res.data))
      .catch(error=>console.log(error));
  },[])
  return (
    <nav className="orders-container"> 
   <StepsHeader/>
   <ProductList products={products}/>
   <OrderLocation onChangeLocation={location=>setOrderLocation(location)}/>
    </nav>
  )
}
// npm install axios para fazer requesiçoes 
export default Order