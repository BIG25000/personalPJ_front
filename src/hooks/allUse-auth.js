import { useContext } from "react";
import { HistoryContext } from "../features/historys/components/contexts/HistoryContext";

export default function allUserById() {
  return useContext(HistoryContext);
}
