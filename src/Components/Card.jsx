function Card({ pizza }) {
  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src={pizza.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
      </div>
    </div>
  );
}

export default Card;
