// import { useState } from "react";
// import Plant from "./Plant";
// import PLANTS from "../data.js";

// export default function Plants({ addPlant }) {
//   const [plants] = useState(PLANTS);
//   return (
//     <div>
//       <div>
//         {plants.map((plant) => (
//           <Plant key={plant.id} plant={plant} addPlant={addPlant} />
//         ))}
//       </div>
//     </div>
//   );
// }

//Above is prop drilling, below is useContext

import { useState } from "react";
import Plant from "./Plant";
import PLANTS from "../data.js";
import { useCart } from "../Context.jsx";

export default function Plants() {
  const [plants] = useState(PLANTS);
  const { addPlant } = useCart();
  return (
    <div>
      <div>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addPlant={addPlant} />
        ))}
      </div>
    </div>
  );
}
