import styles from "./styles.module.css";

const Pagination = ({
  totalPages, 
  handleNextPage, 
  handlePreviousPage, 
  handlePageClick, 
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button 
      disabled={currentPage <= 1}
      onClick={handlePreviousPage} 
      className={styles.arrow}
      >{"<"}</button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return <button 
          className={styles.pageNumber} 
          key={index}
          disabled={index + 1 === currentPage}
          onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
            </button>
        })}
      </div>

      <button disabled={currentPage >= totalPages} 
      onClick={handleNextPage} 
      className={styles.arrow}
      >{">"}</button>
    </div>
  );
};

export default Pagination;