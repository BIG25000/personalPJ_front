import React from "react";
import allUserCreate from "../../../hooks/allUse-auth";

function HistoryCreateForm({ data }) {
  const { deleteCreateTrip } = allUserCreate();

  return (
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
        <div>{data.num_people}</div>
      </div>
      <div className="text-center">
        <div className="text-center">location</div>
        <div class="badge badge-outline text-md">{data.location}</div>
      </div>
      <div className="text-center">
        <div className="text-center">status</div>
        <div class="badge badge-outline text-md">{data.statusTrip}</div>
      </div>
      <div>
        <button
          className="btn bg-egg on"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteCreateTrip(data.id);
          }}
          type="button"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default HistoryCreateForm;
