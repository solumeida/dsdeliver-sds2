import { checkSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props={
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) =>void;
 
}

function ProductList({products,onSelectProduct,selectedProducts}:Props) {
  return (
    
      <div className="orders-list-container">
        <div className="orders-list-items">
        {products.map(product=>(
        <ProductCard 
         key={product.id}          
         product={product}
         onSelectProduct={onSelectProduct}
         isSelected={checkSelected(selectedProducts,product)}
         />
         
         )
        )}
        
      </div>
      </div>
    
  )
}
//contina https://www.youtube.com/watch?v=OpWfkIhcBoY&feature=emb_logo
export default ProductList