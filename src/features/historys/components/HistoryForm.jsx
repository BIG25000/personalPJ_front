import React from "react";
import allUserById from "../../../hooks/allUse-auth";

function HistoryForm({ data }) {
  return (
    <div className="border p-10 flex gap-5 items-center text-egg bg-greenTwo rounded-2xl">
      <div>
        <div>{data.title}</div>
      </div>
      <div className="text-center">
        <div>วันที่เริ่มทริป</div>
        <div>{data.start_date.slice(0, 10)}</div>
      </div>
      <div className="text-center">
        <div className="text-center">วันที่เริ่มทริป</div>
        <div>aaaaaa</div>
      </div>
      <div className="text-center">
        <div className="text-center">จำนวนคนที่จอง</div>
        <div>aaaaaa</div>
      </div>
      <div className="flex gap-4">
        <button className="btn bg-egg">PENDIN</button>
        <button className="btn bg-egg">CANCLE</button>
      </div>
    </div>
  );
}

export default HistoryForm;
