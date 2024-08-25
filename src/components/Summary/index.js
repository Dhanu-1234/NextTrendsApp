import CartContext from '../../context/CartContext'
import './index.css'

const getTotalCost = cartList => {
  let sum = 0
  for (let i = 0; i < cartList.length; i += 1) {
    const product = cartList[i]
    sum += product.price * product.quantity
  }
  return sum
}

const Summary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalCost = getTotalCost(cartList)

      return (
        <div className="summary-container">
          <div className="summary-content-container">
            <h3 className="summary-heading">
              Order Total: <span className="highlight-text">{totalCost}/-</span>{' '}
            </h3>
            <p className="summary-paragraph">{cartList.length} items in cart</p>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Summary
