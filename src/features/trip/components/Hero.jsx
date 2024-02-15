import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-[600px] "
      style={{
        backgroundImage:
          "url(https://c4.wallpaperflare.com/wallpaper/621/280/939/fantasy-art-digital-art-artwork-nature-wallpaper-preview.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
    </div>
  );
}

export default Hero;
