import React from "react";
import { Link } from "react-router-dom";

const ListCategories = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between py-8 gap-7">
        {/* Baris 1 */}
        <Link to={`/category/shooter`}>
          <div className="w-80 h-28 bg-cat1 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Shooter</h2>
          </div>
        </Link>

        <Link to={`/category/racing`}>
          <div className="w-80 h-28 bg-cat2 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Racing</h2>
          </div>
        </Link>

        <Link to={`/category/strategy`}>
          <div className="w-80 h-28 bg-cat3 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Strategy</h2>
          </div>
        </Link>

        <Link to={`/category/fighting`}>
          <div className="w-80 h-28 bg-cat4 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Fighting</h2>
          </div>
        </Link>

        {/* Baris 2 */}
        <Link to={`/category/action`}>
          <div className="w-80 h-28 bg-cat5 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Action</h2>
          </div>
        </Link>

        <Link to={`/category/horror`}>
          <div className="w-80 h-28 bg-cat6 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Horror</h2>
          </div>
        </Link>

        <Link to={`/category/mmorpg`}>
          <div className="w-80 h-28 bg-cat7 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">MMORPG</h2>
          </div>
        </Link>

        <Link to={`/category/sports`}>
          <div className="w-80 h-28 bg-cat8 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Sports</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListCategories;
