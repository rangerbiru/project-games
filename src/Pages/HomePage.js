import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "../index.css";
import bg from "../Images/bg1.jpg";
import bg3 from "../Images/bg3.jpg";
import { ProgressBar } from "react-loader-spinner";
import { useUser } from "@supabase/auth-helpers-react";

// Setting Supabase
import { supabase } from "../SupaClient";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import axios from "axios";
import ListCategories from "../Components/ListCategories";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [listGame, setListGame] = useState([]);
  const [testimoni, setTestimoni] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useUser();

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          // params: { category: "shooter" },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );
      // const rand = [res.data];
      // const randGame = Math.floor(Math.random() * 370);
      // console.log(res.data.slice(0, 10));
      setListGame(res.data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    getCategory();
  }, []);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  // Func untuk memanggil Supabase
  async function getTestimoni() {
    const { data } = await supabase.from("testimoni").select();

    console.log("Data : ", data);
    setTestimoni(data);
  }

  useEffect(() => {
    getTestimoni();
  }, []);

  // End Call Supabase

  return (
    <>
      {loading ? (
        <>
          <div className="flex flex-col h-screen justify-center items-center">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#0d47a1"
              barColor="#0d47a1"
            />
            <h2 className="font-semibold -mt-5 text-white">Loading...</h2>
          </div>
        </>
      ) : (
        <>
          <Header />
          <section id="home">
            <div className="position-center  w-11/12 h-3/4 flex flex-col justify-center">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                loop={true}
                navigation={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: false,
                // }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper rounded-3xl"
              >
                <SwiperSlide>
                  <img
                    src={bg}
                    alt="foto usaha 1"
                    className="max-lg:rounded-md brightness-75"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={bg3}
                    alt="foto usaha 1"
                    className="max-lg:rounded-md brightness-50"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="px-24 w-1/2 absolute z-30">
                <h2 className="text-white font-semibold text-5xl leading-tight">
                  New Marketplace <br /> for Steam Items
                </h2>

                <p className="text-white leading-normal mt-5">
                  Find thousands of interesting games and game <br />{" "}
                  descriptions
                  <span className="text-blue-500 font-semibold text-lg">
                    {" "}
                    Only Here
                  </span>
                </p>

                <div className="mt-10">
                  <a href="#random" className="btn-selengkapnya">
                    Check Games
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section Category */}
          <section id="category" className="px-16 py-5">
            <h2 className="text-white font-semibold text-4xl">
              Category Games
            </h2>

            <ListCategories />
          </section>

          {/* Section Random Games */}
          <section id="random" className="px-16 pt-32 pb-5">
            <h2 className="text-white font-semibold text-4xl">Random Games</h2>

            <div className="flex flex-wrap gap-7 my-10 justify-center">
              {listGame.map((list) => (
                <Link
                  target={"_blank"}
                  to={list.freetogame_profile_url}
                  key={list.id}
                  className="w-64 h-80 bg-slate-900 text-white rounded-xl card-games"
                >
                  <img
                    src={list.thumbnail}
                    alt={list.title}
                    className="w-auto rounded-t-lg"
                  />
                  <h2 className="text-center my-3 font-semibold text-lg">
                    {list.title}
                  </h2>

                  <div className=" text-center">
                    {truncateString(`${list.short_description}`, 20)}
                  </div>
                  <div className="flex justify-center mt-14">
                    <p className="bg-slate-600 py-1.5 px-2.5 rounded-3xl text-xs text-white">
                      {list.genre}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Testimoni */}
          {/* <section id="testimoni" className="px-16 pt-32 pb-5">
            <h2 className="text-white font-semibold text-4xl">Testimoni</h2> */}

          {/* Card */}
          {/* <div className="py-4 flex flex-wrap justify-between relative">
              {testimoni.map((tes) => (
                <div
                  key={tes.id}
                  className="w-80 h-64 bg-slate-900 text-white rounded-md p-4"
                >
                  <h2 className="font-semibold text-lg">{tes.nama_lengkap}</h2>

                  <p className="mt-2">"{tes.desc}"</p>

                  <div className="absolute bottom-7">
                    <span>
                      Rating <br /> <b>{tes.rating} / 10</b>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {user == null ? (
              <></>
            ) : (
              <div className="flex">
                <Link
                  to={"testimoni"}
                  className="w-full flex justify-center bg-slate-900 text-white py-4 px-5 rounded-md "
                >
                  Add Testimoni
                </Link>
              </div>
            )}
          </section> */}

          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
