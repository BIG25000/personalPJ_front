import { Link } from "react-router-dom";
import Card from "./Card";
import useAuth from "../../../hooks/use-auth";
import useTrip from "../hooks/use-trip";

function CardListSortSuccess({ layout }) {
  const { trips2 } = useTrip();

  console.log(trips2);

  const shFilter = trips2.map((trip) => (
    <Link to={`/trip/${trip.id}`}>
      <Card trip={trip} />
    </Link>
  ));

  return <div className={layout}>{shFilter}</div>;
}

export default CardListSortSuccess;
