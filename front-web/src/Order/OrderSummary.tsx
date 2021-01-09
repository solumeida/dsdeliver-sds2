import { formatPrice } from "./helpers"

type Props={
  amount: number,
  totalPrice: number;
  onSubmit: () =>void
}

function OrderSummary({amount,totalPrice,onSubmit}:Props) {
  return (
    
      <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
        <span className="amount-selected-container">
        <strong className="amount-selected">{amount} </strong>
         PEDIDOS SELECIONADOS
        </span>
        <span className="order-symmary-total">
          <strong  className="amount-selected">{formatPrice(totalPrice)}</strong>
          valor total
        </span>
        </div>
       <button className="order-summary-make-order" onClick={onSubmit}>
         Fazer pedido
       </button>

      </div>
      </div>
    
  )
}
//contina https://www.youtube.com/watch?v=OpWfkIhcBoY&feature=emb_logo
export default OrderSummary