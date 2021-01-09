import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props={
  products: Product[];
}
function ProductList({products}:Props) {
  return (
    
      <div className="orders-list-container">
        <div className="orders-list-items">
        {products.map(product=>(<ProductCard product={product} key={product.id}/>)
        )}
        
      </div>
      </div>
    
  )
}
//contina https://www.youtube.com/watch?v=OpWfkIhcBoY&feature=emb_logo
export default ProductList