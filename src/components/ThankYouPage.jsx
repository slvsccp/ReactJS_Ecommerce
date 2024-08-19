import { useLocation, useNavigate } from "react-router-dom"

function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="thank-you-page">
      <h3>Resumo dos pedidos</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => navigate("/")}>Voltar ao catálago</button>
    </div>
  )
}

export default ThankYouPage