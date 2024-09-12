// components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, hasNextPage, handleNext, handlePrev }) => {
  const maxPagesToShow = 9;
  let pages = [];

  if (totalPages <= maxPagesToShow) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else if (currentPage > totalPages - 3) {
      pages = [totalPages - 8, totalPages - 7, totalPages - 6, totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4];
    }
  }

  return (
    <ul className="pagination">
      {currentPage > 3 && totalPages > maxPagesToShow && (
        <>
          <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => onPageChange(1)}>1</li>
          <li>...</li>
        </>
      )}
      {pages.map(page => (
        <li
          key={page}
          className={`cursor-pointer border px-4 py-2 ${page === currentPage ? 'font-bold bg-secondaryColor text-white' : 'font-bold'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < totalPages - 2 && totalPages > maxPagesToShow && (
        <>
          <li>...</li>
          <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => onPageChange(totalPages)}>{totalPages}</li>
        </>
      )}
      <li className="cursor-pointer border px-4 py-2 font-bold" onClick={handlePrev}>Previous</li>
      <li className="cursor-pointer border px-4 py-2 font-bold" onClick={handleNext} disabled={!hasNextPage}>Next</li>
    </ul>
  );
};

export default Pagination;
