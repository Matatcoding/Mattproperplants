export default function Plant({ plant, addPlant }) {
  return (
    <div>
      <h2>{plant.name}</h2>
      <p> {plant.image}</p>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => addPlant(plant)}
      >
        Add To Cart
      </button>
    </div>
  );
}
