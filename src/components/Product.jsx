function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <div className="cart-buttons">
        <select>
          <option value="">1</option>
        </select>
        <button>Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default Product