import React from "react";

function Card() {
  return (
    <div className="card card-side bg-greenTwo text-egg shadow-xl">
      <figure className="w-[40rem]">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/337/871/597/naruto-shippuuden-anime-uzumaki-naruto-uchiha-sasuke-wallpaper-preview.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">ภูสอยดาว</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-egg text-greenOne">
            view detail trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
