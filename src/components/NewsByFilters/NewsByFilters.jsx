import NewsList from "../NewsList/NewsList";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import styles from "./styles.module.css";
import { TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

  const {data: dataCategories} = useFetch(getCategories)

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter("page_number", filters.page_number + 1)
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter("page_number", filters.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilter("page_number", pageNumber)
    }

  return (
    <section className={styles.section}>
      {dataCategories ? (
            <Categories 
            categories={dataCategories.categories} 
            setSelectedCategory={(category) => changeFilter("category", category)} 
            selectedCategory={filters.category}/> 
            ) : null}

            <Search
            keywords={filters.keywords} 
            setKeywords={(keywords) => changeFilter("keywords", keywords)}/>

            <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={news}/>

            <Pagination 
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
            />
    </section>
  );
};

export default NewsByFilters;
