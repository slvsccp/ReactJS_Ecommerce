import { useState, useEffect } from "react"
import productsData from '../data/products_mock.json'
import Product from "./Product"

function Catalog({ onAddToCart }) {
  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <div className="product-container">
        {
          productsData.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Catalog