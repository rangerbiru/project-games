import React from "react";
import "./Components.css";
import Logo from "../Images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-700 box-shadow h-auto flex px-20 py-14">
        <div className="col">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-12" />
            <h2 className="text-white font-semibold text-xl">RevGaming</h2>
          </div>
          <div className="py-7">
            <p className="text-white text-justify">
              Is a website that provides the most complete list of games from
              various game genres, along with game descriptions. We also provide
              facilities for you to be able to order games on this website.
            </p>
          </div>
        </div>
        <div className="col py-2.5">
          <h2 className="text-white font-semibold text-xl title-footer relative">
            Contact Us
          </h2>

          <div className="contact mt-8">
            <p>
              <i class="fa-solid fa-location-dot"></i> Bekasi Timur, Indonesia
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> rangerbiru.id@gmail.com
            </p>
            <p>
              <i class="fa-brands fa-whatsapp"></i> +62 813 1743 5630
            </p>
          </div>
        </div>
        <div className="col py-2.5">
          <div className="contact">
            <h2 className="text-white font-semibold text-xl title-footer relative">
              Send Us A Message
            </h2>

            <form action="#" id="contact">
              <div className="mt-8 flex flex-col">
                {/* <label className="text-white">Your Name</label> */}
                <input
                  type="text"
                  className="rounded-md mt-1.5 w-96 placeholder:text-sm "
                  placeholder="Your Fullname"
                />
              </div>
              <div className="pt-3 flex flex-col">
                {/* <label className="text-white">Email</label> */}
                <input
                  type="email"
                  className="rounded-md mt-1.5 w-96 placeholder:text-sm "
                  placeholder="Your Email"
                />
              </div>
              <div className="pt-3 flex flex-col">
                {/* <label className="text-white">Your Message</label> */}
                <textarea
                  rows="5"
                  className="rounded-md mt-1.5 w-96 placeholder:text-sm resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                className="mt-5 py-2.5 px-4 bg-blue-800 text-white rounded-lg text-sm transition duration-300 hover:bg-blue-900 hover:text-slate-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>

      <div className="flex items-center py-4 bg-slate-800 px-28">
        <div className="text-sub-footer">
          <h2 className="text-white">
            Copyright &#169; 2023 | Website Created By{" "}
            <span className="text-blue-500">Rangerbiru</span>
          </h2>
        </div>
        <div className="icon-sosmed">
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
