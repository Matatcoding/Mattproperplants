export default function CartItem({ plant, addPlant, removePlant }) {
  const increase = () => {
    addPlant(plant);
  };

  const decrease = () => {
    removePlant(plant);
  };

  return (
    <div className="cart-item">
      <img src={plant.image} alt={plant.name} width="100" />
      <div>
        <h3>{plant.name}</h3>
        <p>Quantity: {plant.quantity}</p>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
