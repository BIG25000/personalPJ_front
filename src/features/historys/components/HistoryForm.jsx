import React from "react";
import allUserById from "../../../hooks/allUse-auth";
import allUserCreate from "../../../hooks/allUse-auth";

function HistoryForm({ data }) {
  const { deleteJoinTrip } = allUserCreate();
  return (
    <>
      <div className="border p-10 flex justify-around gap-5 items-center text-egg bg-greenTwo rounded-2xl hover:scale-110 transition">
        <div className="text-center">
          <div>หัวข้อ</div>
          <div>{data.title}</div>
        </div>
        <div className="text-center">
          <div>วันที่เริ่มทริป</div>
          <div>{data.start_date.slice(0, 10)}</div>
        </div>
        <div className="text-center">
          <div className="text-center">วันสิ้นสุดทริป</div>
          <div>{data.end_date.slice(0, 10)}</div>
        </div>
        <div className="text-center">
          <div className="text-center">จำนวนคนที่จอง</div>
          <div>{data.people_join}</div>
        </div>
        <div className="text-center">
          <div className="text-center">status</div>
          <div class="badge badge-outline text-md">{data.statusJoin}</div>
        </div>
        <div>
          <button
            className="btn bg-egg"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteJoinTrip(data.id);
            }}
          >
            CANCLE
          </button>
        </div>
      </div>
    </>
  );
}

export default HistoryForm;
