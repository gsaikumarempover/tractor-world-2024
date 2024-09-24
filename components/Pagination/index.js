import React from 'react';
import Image from 'next/image';

const Pagination = ({ currentPage, totalPages, onPageChange, hasNextPage, handleNext, handlePrev }) => {
  const maxPagesToShow = 4; // Show only 4 pages
  let pages = [];

  if (totalPages <= maxPagesToShow) {
    // If totalPages is less than or equal to maxPagesToShow, show all pages
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    // If the current page is close to the start (first 3 pages)
    if (currentPage <= 2) {
      pages = [1, 2, 3, 4];
    } 
    // If the current page is close to the end (last 2 pages)
    else if (currentPage >= totalPages - 1) {
      pages = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } 
    // If the current page is somewhere in the middle
    else {
      pages = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }
  }

  return (
    <ul className="pagination gap-2 flex justify-center mb-4">
      <li className="cursor-pointer font-bold" onClick={handlePrev}>
      <Image src='/images/Previous.svg' alt="Previous" width={20} height={20} />
        
        </li>

      {currentPage > 2 && totalPages > maxPagesToShow && (
        <>
          <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => onPageChange(1)}>1</li>
          {currentPage > 3 && <li>...</li>}
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

      {currentPage < totalPages - 1 && totalPages > maxPagesToShow && (
        <>
          {currentPage < totalPages - 2 && <li>...</li>}
          <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => onPageChange(totalPages)}>{totalPages}</li>
        </>
      )}
      
      <li className="cursor-pointer border px-4 py-2 font-bold" onClick={handleNext} disabled={!hasNextPage}>Next</li>
    </ul>
  );
};

export default Pagination;
