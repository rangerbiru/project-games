import React, { useState } from "react";
import "./Auth.css";
// import Logo from "../Images/logo.png";
import BgLogin from "../Images/bg2.jpg";
import { Link, useNavigate } from "react-router-dom";
// import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../SupaClient";

const LoginPage = () => {
  // const user = useUser()
  // const supabase = useSupabaseClient()
  const [emailData, setEmailData] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailData,
      password: pass,
    });

    if (!error) {
      alert("Selamat Datang");
      navigate("/");
    } else {
      alert("Email dan Password Anda Gagal");
    }
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="flex w-3/4 h-5/6 bg-white rounded-3xl login-shadow">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="py-8 px-10">
              <h2 className="text-4xl font-semibold mb-5">Sign In</h2>
              <form action="#" onSubmit={signIn}>
                <div className="flex flex-col gap-2">
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
                  to={"/register"}
                  className="flex justify-center mt-5 text-blue-800 text-sm"
                >
                  Belum punya akun, Daftar DISINI
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

export default LoginPage;
