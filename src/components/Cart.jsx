import CartItem from "./CartItem"

function Cart({ cartItems, onUpdateCart }) {
  return (
    <div>
      <h1>Carrinho</h1>
      {
        cartItems.length === 0 ? (<p>Não há itens no carrinho</p>) : (
          <>
            {
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} />
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default Cart