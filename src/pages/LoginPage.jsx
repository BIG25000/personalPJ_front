import React from "react";

import RegisterContainer from "../features/auth/components/RegisterContainer";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="max-w-sm mx-auto my-32 rounded-lg p-4 bg-egg shadow-lg flex flex-col gap-2">
        <LoginForm />
        <RegisterContainer />
      </div>
    </>
  );
}

export default LoginPage;
