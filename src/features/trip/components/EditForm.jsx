import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";
import useTrip from "../hooks/use-trip";
import { useParams } from "react-router-dom";

function EditForm({ onSubmit }) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputEl = useRef(null);
  const { editTrip } = useTrip();

  const { tripId } = useParams();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // const newStartDate = new Date(input.startDate);
      // input.startDate = `${newStartDate}`;
      // input.endDate = new Date(input.endDate);
      const formData = new FormData();
      // if (
      //   input.title ||
      //   input.location ||
      //   input.startDate ||
      //   input.endDate ||
      //   input.description ||
      //   input.meetingPlace ||
      //   input.numPeople
      // ) {
      //   formData.append("title", input.title);
      //   formData.append("location", input.location);
      //   formData.append("startDate", input.startDate);
      //   formData.append("endDate", input.endDate);
      //   formData.append("description", input.description);
      //   formData.append("meetingPlace", input.meetingPlace);
      //   formData.append("numPeople", input.numPeople);
      // }
      if (input.title) {
        formData.append("title", input.title);
      }
      if (input.location) {
        formData.append("location", input.location);
      }
      if (input.startDate) {
        formData.append("startDate", input.startDate);
      }
      if (input.endDate) {
        formData.append("endDate", input.endDate);
      }
      if (input.description) {
        formData.append("description", input.description);
      }
      if (input.meetingPlace) {
        formData.append("meetingPlace", input.meetingPlace);
      }
      if (input.numPeople) {
        formData.append("numPeople", input.numPeople);
      }
      //  else {
      //   return toast.error("กรุณากรอกสักอย่าง");
      // }

      if (image) {
        formData.append("image", image);
      }

      setLoading(true);
      await onSubmit(formData, tripId);
      toast.success("edit trip success");
      document.getElementById("editForm").close();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmitForm}>
        <div className="text-center">
          <h1 className="text-center font-medium text-2xl">Edit Trip</h1>
        </div>
        <div className="grid grid-cols-2 gap-1 items-center mt-2">
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">Title</span>
              </div>
              <input
                type="text"
                placeholder="ลำคลองงู"
                className="input input-bordered w-full"
                name="title"
                value={input.title}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">Location</span>
              </div>
              <input
                type="text"
                placeholder="ตาก"
                className="input input-bordered w-full"
                name="location"
                value={input.location}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">startDate</span>
              </div>
              <input
                type="date"
                placeholder="ตาก"
                className="input input-bordered w-full"
                name="startDate"
                value={input.startDate}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">endDate</span>
              </div>
              <input
                type="date"
                placeholder="ตาก"
                className="input input-bordered w-full"
                name="endDate"
                value={input.endDate}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs col-span-full">
            <div className="label">
              <span className="label-text text-md">Description</span>
            </div>
            <textarea
              className="block w-full outline-none resize-none"
              rows="10"
              placeholder="เดินป่าที่ตาก"
              name="description"
              value={input.description}
              onChange={handleChangeInput}
            />
          </label>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">meetingPlace</span>
              </div>
              <input
                type="text"
                placeholder="หมอชิต"
                className="input input-bordered w-full"
                name="meetingPlace"
                value={input.meetingPlace}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-md">numPeople</span>
              </div>
              <input
                type="text"
                placeholder="10"
                className="input input-bordered w-full"
                name="numPeople"
                value={input.numPeople}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="col-span-full mt-5">
            <input
              type="file"
              className="hidden"
              ref={fileInputEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            {image ? (
              <div
                className="relative"
                onClick={() => fileInputEl.current.click()}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="post"
                  className="mx-auto"
                />
                <button
                  className="absolute top-1 right-1 font-black"
                  onClick={(e) => {
                    e.stopPropagation(); // ให้มันหยุดทำงานซ้ำซ้อน
                    setImage(null);
                    fileInputEl.current.value = "";
                  }}
                >
                  &#10005;
                </button>
              </div>
            ) : (
              <div
                className="bg-greenTwo hover:bg-egg flex flex-col items-center py-12 rounded-lg"
                role="button"
                onClick={() => fileInputEl.current.click()}
              >
                <span className="text-greeOne bg-egg rounded-xl">
                  Add Photo Trip
                </span>
              </div>
            )}
          </div>
        </div>
        <button className="btn bg-greenOne text-egg w-full mt-5" type="submit">
          Edit Trip
        </button>
      </form>
    </>
  );
}

export default EditForm;
