import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../index.css";
import { supabase } from "../SupaClient";

const Testimoni = () => {
  const [nama, setNama] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState("");

  async function postTestimoni(e) {
    e.preventDefault();
    const { error } = await supabase.from("testimoni").insert(
      [
        //   Data-data input
        {
          nama_lengkap: nama,
          desc: desc,
          rating: rating,
        },
        // End Data
        // Upsert

        // End Upsert
      ],
      { upsert: true }
    );

    // window.location.reload();
  }

  return (
    <>
      <Header />
      <div className="pt-40 pb-20 px-16">
        <h2 className="text-4xl text-white text-center font-medium mb-2">
          Your Testimoni
        </h2>
        <form action="#" onSubmit={postTestimoni}>
          <div className="flex flex-col">
            <label className="text-white mb-2">FullName</label>
            <input
              type="text"
              className="rounded-md"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white my-2">Reviews Website</label>
            <textarea
              rows="10"
              className="resize-none rounded-md"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-white my-2">Rating Website</label>
            <input
              type="number"
              className="rounded-md"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="py-4 px-5 bg-slate-700 text-white rounded-md w-full my-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Testimoni;
