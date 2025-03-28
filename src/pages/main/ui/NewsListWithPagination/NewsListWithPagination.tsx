import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";
import Pagination from "@/features/pagination/ui/Pagination/Pagination";

interface Props {
  filters: IFilters;
  news: INews[]
  isLoading: boolean
}

const NewsListWithPagination = ({filters, news, isLoading}: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters)

  return (
      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >

        <NewsList
          direction="column"
          type="item"
          isLoading={isLoading}
          news={news}
        />
      </Pagination>
  );
};

export default NewsListWithPagination;
