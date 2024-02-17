import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function TripForm() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const fileInputEl = useRef(null);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      if (!input.trim() && !image) {
        return toast.error("Please enter input or select image");
      }

      const formData = new FormData();
      if (input) {
        formData.append("input", input);
      }
      if (image) {
        formData.append("image", image);
      }

      await onSubmit(formData);
      toast.success("create a new trip success");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="text-center">
        <h1 className="text-center font-medium text-2xl">Create Trip</h1>
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
              value={input.tilte}
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
        Create Trip
      </button>
    </form>
  );
}

export default TripForm;
