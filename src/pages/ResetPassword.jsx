import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ResetPassword = () => {
  const { email } = useContext(AuthContext);
  return (
    <div className="bg-secondary2 flex items-center justify-center h-screen">
      <div className="rounded bg-white shadow w-[30%] p-6 grid gap-4">
        <h1>Email Verification</h1>
        <div>
          <p>we have send a code to your email {email}</p>
        </div>
      </div>
      <form action="">
        <input type="text" name="" maxLength={1} id="" />
        <input type="text" name="" maxLength={1} id="" />
        <input type="text" name="" maxLength={1} id="" />
        <input type="text" name="" maxLength={1} id="" />
      </form>
    </div>
  );
};

export default ResetPassword;
