import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

export default function Pagination({ items, pageSize, currentPage, onPageChange }: any) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center my-5">
      <div
        className={`h-7 w-7 rounded-full flex items-center justify-center border  mx-4 ${
          currentPage === 1 ? 'text-gray-800 border-gray-800 cursor-not-allowed' : 'text-primary border-primary  hover:shadow-xl cursor-pointer'
        }`}
        onClick={currentPage === 1 ? undefined : handlePrevClick}
      >
        <GoChevronLeft />
      </div>
      <ul className="flex gap-2 items-center">
        {pages.map((page) => (
          <li key={page}>
            <a
              className={`cursor-pointer p-2 rounded-full text-base font-bold h-10 w-10 flex items-center justify-center transition-all duration-200 
                ${page === currentPage ? 'bg-gray-250 text-gray-650' : 'text-primary hover:bg-gray-250 hover:text-gray-650'}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`h-7 w-7 rounded-full flex items-center justify-center border  mx-4 ${
          currentPage === pagesCount ? 'text-gray-800 border-gray-800 cursor-not-allowed' : 'text-primary border-primary  hover:shadow-xl cursor-pointer'
        }`}
        onClick={currentPage === pagesCount ? undefined : handleNextClick}
      >
        <GoChevronRight />
      </div>
    </div>
  );
}
