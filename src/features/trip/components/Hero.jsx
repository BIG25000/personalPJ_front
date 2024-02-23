import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-[600px] "
      style={{
        backgroundImage:
          "url(https://r4.wallpaperflare.com/wallpaper/355/537/288/fantasy-art-anime-forest-princess-mononoke-wallpaper-e9f8ffbb016fad78b94a54f8c889e9e9.jpg)",
      }}
    >
      <div className="hero-overlay bg-green bg-opacity-70"></div>
    </div>
  );
}

export default Hero;
