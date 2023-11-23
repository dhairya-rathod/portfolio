import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { fetchBlogsWithNumberPagination } from "@/services/blogs";

export interface BlogRecord {
  title: string;
  slug: string;
  status: string | boolean;
  createdAt: string;
  updatedAt: string;
}

export const useBlog = () => {
  const [paginationInfo, setPaginationInfo] = useState({
    pageNo: 1,
    recordsPerPage: 10,
  });

  const { data, isLoading }: { data: any; isLoading: boolean } = useQuery({
    queryKey: [
      "all-blogs",
      paginationInfo.pageNo,
      paginationInfo.recordsPerPage,
    ],
    queryFn: () =>
      fetchBlogsWithNumberPagination(
        paginationInfo.pageNo,
        paginationInfo.recordsPerPage,
      ),
  });

  return { data, isLoading, setPaginationInfo };
};
