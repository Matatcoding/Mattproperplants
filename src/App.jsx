// import { useState } from "react";
// import Plants from "./plants/Plants.jsx";
// import "./index.css";
// import "./main.jsx";
// import Cart from "./cart/Cart.jsx";
// import "./data.js";
// import PLANTS from "./data.js";

// export default function App() {
//   const [cart, setCart] = useState([]);

//   const addPlant = (plant) => {
//     setCart((cartArray) => {
//       const exists = cartArray.find((item) => item.id === plant.id);
//       if (exists) {
//         return cartArray.map((item) =>
//           item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...cartArray, { ...plant, quantity: 1 }];
//       }
//     });
//   };

//   const removePlant = (plant) => {
//     setCart((cartArray) =>
//       cartArray
//         .map((item) =>
//           item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <>
//       <div>
//         <h1>Proper Plants</h1>
//       </div>
//       <div>
//         <h2>Plants</h2>
//         <Plants plantArr={PLANTS} addPlant={addPlant} />
//       </div>
//       <div>
//         <h2>Cart</h2>
//         <Cart cart={cart} addPlant={addPlant} removePlant={removePlant} />
//       </div>
//     </>
//   );
// }

// Above is prop drilling, below is useContext

import Plants from "./plants/Plants.jsx";
import "./index.css";
import "./main.jsx";
import Cart from "./cart/Cart.jsx";
import "./data.js";

export default function App() {
  return (
    <>
      <div>
        <h1>Proper Plants</h1>
      </div>
      <div>
        <h2>Plants</h2>
        <Plants />
      </div>
      <div>
        <h2>Cart</h2>
        <Cart />
      </div>
    </>
  );
}
