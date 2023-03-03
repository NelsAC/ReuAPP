import { useEffect } from "react";

export const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className='table-footer'>
      {range.map((el, index) => (
        <button
          key={index}
          className={`table-btn rounded-full text-sm ${
            page === el ? 'table-active' : 'table-inactive'
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};