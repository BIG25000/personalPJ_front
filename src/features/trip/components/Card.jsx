function Card({ trip }) {
  const { title, startDate, endDate, location, image } = trip;

  return (
    <div className="card card-compact w-96 bg-greenTwo text-egg shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title underline">title : {title}</h2>
        <p>location : {location}</p>
        <p>startDate : {startDate}</p>
        <p>endDate : {endDate}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-egg text-greenTwo">view detail trip</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
