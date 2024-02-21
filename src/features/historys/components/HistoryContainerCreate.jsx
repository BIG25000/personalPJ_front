import HistoryCreateForm from "./HistoryCreateForm";
import allUserCreate from "../../../hooks/allUse-auth";
import useAuth from "../../../hooks/use-auth";
import { Link } from "react-router-dom";

function HistoryContainerCreate() {
  const { allCreate } = allUserCreate();
  const { authUser } = useAuth();

  const a = allCreate
    .filter((el) => el.userId === authUser.id)
    .map((el, index) => (
      <Link to={`/trip/${el.id}`}>
        <HistoryCreateForm key={index} data={el} />
      </Link>
    ));

  return <div>{a}</div>;
}

export default HistoryContainerCreate;
