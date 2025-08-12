// import CartItem from "./CartItem";

// export default function Cart({ cart, addPlant, removePlant }) {
//   return (
//     <div className="cart">
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((plant) => (
//           <CartItem
//             key={plant.id}
//             plant={plant}
//             addPlant={addPlant}
//             removePlant={removePlant}
//           />
//         ))
//       )}
//     </div>
//   );
// }

//Above is prop drilling below is use Context

import CartItem from "./CartItem";
import { useCart } from "../Context";

export default function Cart() {
  const { cart, addPlant, removePlant } = useCart();
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((plant) => (
          <CartItem
            key={plant.id}
            plant={plant}
            addPlant={addPlant}
            removePlant={removePlant}
          />
        ))
      )}
    </div>
  );
}
