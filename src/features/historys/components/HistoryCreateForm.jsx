import React from "react";

function HistoryCreateForm({ data }) {
  return (
    <div className="border p-10 flex justify-around gap-5 items-center text-egg bg-greenTwo rounded-2xl">
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
        <div className="text-center">status</div>
        <div class="badge badge-outline text-md">{data.statusTrip}</div>
      </div>
      <div className="text-center">
        <div className="text-center">status</div>
        <div class="badge badge-outline text-md">{data.statusTrip}</div>
      </div>
      <div>
        <button className="btn bg-egg">CANCLE</button>
      </div>
    </div>
  );
}

export default HistoryCreateForm;
