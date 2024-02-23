import React from "react";

import RegisterContainer from "../features/auth/components/RegisterContainer";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/958/157/272/sun-rays-landscape-steps-torii-wallpaper-6920283d411a7dfb2667f8dfc061460d.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="flex items-center justify-center h-[100%]">
        <div className="w-[400px] mx-auto rounded-lg p-4 bg-egg shadow-lg bg-opacity-60 flex flex-col gap-2">
          <LoginForm />
          <RegisterContainer />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
//
