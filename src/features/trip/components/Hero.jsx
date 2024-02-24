import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-[600px] "
      style={{
        backgroundImage:
          "url(https://r4.wallpaperflare.com/wallpaper/242/236/855/mountains-river-snow-forest-wallpaper-4f5657864e3a780b5758f3673ce501cd.jpg)",
      }}
    >
      <div className="hero-overlay bg-green bg-opacity-60"></div>
    </div>
  );
}

export default Hero;
