import { useEffect, useState } from "react";
import  NewsBanner  from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import  NewsList  from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentpage] = useState(1)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [keywords, setKeywords] = useState("")

    const debouncedKeywords = useDebounce(keywords, 1500)

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: PAGE_SIZE,
                category: selectedCategory === "All" ? null : selectedCategory,
                keywords: debouncedKeywords,
            });
            setNews(response.news);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
          const response = await getCategories();
          setCategories(["All", ...response.categories]);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchCategories();
    }, []); 

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords]); 

    const handleNextPage = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentpage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentpage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
            setCurrentpage(pageNumber)
    }

    return (
        <main className={styles.main}>
            <Categories 
            categories={categories} 
            setSelectedCategory={setSelectedCategory} 
            selectedCategory={selectedCategory}/>

            <Search 
            keywords={keywords} 
            setKeywords={setKeywords}/>

            <NewsBanner isLoading={isLoading} item={news.length > 0 && news[0]} /> 

            <Pagination 
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={currentPage}
            />

            <NewsList isLoading={isLoading} news={news}/>

            <Pagination 
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={currentPage}
            />
        </main>
    );
};

export default Main;