import React, { useEffect } from "react";
import "./Components.css";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../SupaClient";

const Header = () => {
  const user = useUser();

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      window.location.reload();
    } else {
      alert("Logout Gagal");
    }
  }

  async function userWeb() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
  }

  useEffect(() => {
    userWeb();
  }, []);

  return (
    <div className="w-full fixed z-50">
      <header className="flex items-center py-5 px-10 my-5 mx-16 text-white rounded-full backdrop-blur-lg bg-shadow">
        <div className="logo w-8 h-auto flex items-center gap-3">
          <img src={Logo} alt="Logo" />
          <h2 className="font-semibold">RevGaming</h2>
        </div>

        <nav className="ml-auto">
          <ul className="flex gap-6 text-sm items-center">
            <li>
              <a href="/#home" className="font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/#random" className="font-medium">
                Random Games
              </a>
            </li>
            <li>
              <a href="/#contact" className="font-medium">
                Contact
              </a>
            </li>

            {user == null ? (
              <>
                <Link
                  to={`login`}
                  className="py-2 px-4 bg-blue-800 rounded-2xl text-white transition duration-300 hover:bg-blue-900"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <p>Selamat Datang {user.user_metadata.user_name}</p>
                <button
                  onClick={signOut}
                  className="py-1.5 px-3 bg-blue-800 text-white text-sm rounded-md"
                >
                  Keluar
                </button>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
