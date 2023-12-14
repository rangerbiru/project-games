import React from "react";

const Pagination = ({ totalPost, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center px-20">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="w-10 h-10 bg-slate-700 text-white rounded-full"
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
