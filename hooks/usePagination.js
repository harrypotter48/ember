import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
// import { ITEMS_PER_PAGE } from '../utils/paginationUtils';
const ITEMS_PER_PAGE = 5;

const usePagination = (dataQuery, keywords = "") => {
  const [currentPage, setCurrentPage] = useState(1);
  const changeCurrentPage = (activePage) => {
    setCurrentPage(activePage);
  };

  const { data, loading, error } = useQuery(dataQuery, {
    variables: {
      start: currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
      limit: ITEMS_PER_PAGE,
      filter: keywords,
    },
  });

  if (error) {
    console.log(error.message);
  }

  return { currentPage, data, loading, changeCurrentPage };
};

export default usePagination;
