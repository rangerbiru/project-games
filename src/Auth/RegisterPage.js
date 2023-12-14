import React, { useState } from "react";
import "./Auth.css";
// import Logo from "../Images/logo.png";
import BgLogin from "../Images/bg2.jpg";
import { Link } from "react-router-dom";
import { supabase } from "../SupaClient";

const RegisterPage = () => {
  const [userName, setUserName] = useState(""); //Ini form Username
  const [emailData, setEmailData] = useState(""); //Ini form Email
  const [pass, setPass] = useState(""); //Ini form Password

  async function signUp(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: emailData,
      password: pass,
      options: {
        data: {
          user_name: userName,
        },
      },
    });

    // Reset Form
    setUserName("");
    setEmailData("");
    setPass("");

    if (data) {
      // Kalau berhasil
      alert(
        "Selamat, Anda berhasil mendaftar. Silahkan cek email anda untuk konfirmasi"
      );
    } else {
      // Kalau gagal
      alert("Data gagal ditambahkan");
    }
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="flex w-3/4 h-5/6 bg-white rounded-3xl login-shadow">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="py-8 px-10">
              <h2 className="text-4xl font-semibold mb-5">Create an account</h2>
              <form onSubmit={signUp}>
                <div className="flex flex-col gap-2">
                  <label>Username</label>
                  <input
                    type="text"
                    className="rounded-md"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label>Email</label>
                  <input
                    type="email"
                    className="rounded-md"
                    value={emailData}
                    onChange={(e) => setEmailData(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label>Password</label>
                  <input
                    type="password"
                    className="rounded-md"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full py-2 px-4 bg-blue-800 text-white rounded-md transition duration-300 hover:bg-blue-900"
                >
                  Submit
                </button>

                <Link
                  to={"/login"}
                  className="flex justify-center mt-5 text-blue-800 text-sm"
                >
                  Sudah punya account? Login sekarang
                </Link>
              </form>
            </div>
          </div>
          <div className="py-8 px-10 w-1/2">
            <img
              src={BgLogin}
              alt="BG"
              className="object-cover h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
