function Cart({ cartItems }) {
  return (
    <div>
      <h1>Carrinho</h1>
      {
        cartItems.length === 0 ? (<p>Não há itens no carrinho</p>) : (
          <>
            {
              cartItems.map((item) => (
                <p key={item.id}>{item.name} - {item.quantity}</p>
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default Cart