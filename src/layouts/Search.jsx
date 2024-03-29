import React from "react";

function Search({ onSh, sh, type }) {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-egg">
      <input
        type={type}
        className="grow  text-greenOne bg-egg"
        placeholder="Search"
        onChange={onSh}
        value={sh}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
          className="text-greenOne"
        />
      </svg>
    </label>
  );
}

export default Search;
