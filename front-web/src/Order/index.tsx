import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import './styles.css';
import './StepsHeader'
import ProductList from './ProductList';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { checkSelected } from './helpers';
import { toast } from 'react-toastify';

function Order() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice =selectedProducts.reduce((sum, item)=>{
    return sum + item.price

  },0)

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(error => console.log(error));
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkSelected(selectedProducts,product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch((response) => {
        toast.warning(`Erro ao enviar pedidoNº${response.data.id}`);
      })
  }

  return (
    <>
      <nav className="orders-container">
        <StepsHeader />
        <ProductList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts}/>
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>=
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit={handleSubmit}
          />
      </nav>
    </>
  )
}
// npm install axios para fazer requesiçoes 
export default Order