import React from "react";

function PeopleJoinForm({ item }) {
  return (
    <div className="border p-5 flex flex-col gap-5 items-center text-egg bg-greenTwo rounded-2xl">
      <div className="text-center">
        <div>หัวข้อ</div>
        <div>{item.title}</div>
      </div>
      <div className="text-center">
        <div>จำนวนผู้เข้าร่วม</div>
        <div>{item.people_join} คน</div>
      </div>
      <div className="text-center">
        <div className="text-center">วันเริ่มทริป</div>
        <div>{item.start_date.slice(0, 10)}</div>
      </div>
      <div className="text-center">
        <div className="text-center">location</div>
        <div class="badge badge-outline text-md">{item.location}</div>
      </div>
      <div className="text-center">
        <div className="text-center">status</div>
        <div class="badge badge-outline text-md">{item.statusJoin}</div>
      </div>
      <div></div>
    </div>
  );
}

export default PeopleJoinForm;
