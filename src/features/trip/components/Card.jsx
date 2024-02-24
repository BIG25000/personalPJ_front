function Card({ trip }) {
  const { title, startDate, endDate, location, image, statusTrip } = trip;

  console.log(trip);

  return (
    <div className="card card-compact w-[18rem] h-[20rem] bg-greenTwo text-egg shadow-xl hover:scale-110 transition">
      <figure>
        <img className="w-[25rem] h-[10rem]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title underline">title : {title}</h2>
        <p>location : {location}</p>
        <p>startDate : {startDate.slice(0, 10)}</p>
        <p>endDate : {endDate.slice(0, 10)}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline flex justify-center">
            {statusTrip}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
