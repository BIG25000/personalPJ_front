import HistoryCreateForm from "./HistoryCreateForm";
import allUserCreate from "../../../hooks/allUse-auth";
import useAuth from "../../../hooks/use-auth";

function HistoryContainerCreate() {
  const { allCreate } = allUserCreate();
  const { authUser } = useAuth();
  console.log(allCreate);

  const a = allCreate
    .filter((el) => el.userId === authUser.id)
    .map((el, index) => <HistoryCreateForm key={index} data={el} />);
  return <div>{a}</div>;
}

export default HistoryContainerCreate;
