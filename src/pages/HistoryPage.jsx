import React from "react";
import HistoryForm from "../features/historys/components/HistoryForm";
import HistoryContextProvider from "../features/historys/components/contexts/HistoryContext";
import HistoryContainer from "../features/historys/components/HistoryContainer";
import HistoryContainerCreate from "../features/historys/components/HistoryContainerCreate";

function HistoryPage() {
  return (
    <>
      <HistoryContextProvider>
        <div className="flex justify-around pt-10">
          <div className="flex flex-col">
            <p className="pb-10 text-2xl font-bold">JOIN</p>
            <HistoryContainer />
          </div>
          <div className="flex flex-col">
            <p className="pb-10 text-2xl font-bold">CREATE TRIP</p>
            <HistoryContainerCreate />
          </div>
        </div>
      </HistoryContextProvider>
    </>
  );
}

export default HistoryPage;
