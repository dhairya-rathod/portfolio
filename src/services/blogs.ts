import {
  AllBlogsQuery,
  BlogByIdQuery,
  BlogsWithInfinitePaginationQuery,
  BlogsWithNumberPaginationQuery,
} from "@/graphql/query";
import graphqlRequestClient from "@/services/graphqlRequestClient";

export const fetchAllBlogs = async () => {
  return await graphqlRequestClient.request(AllBlogsQuery);
};

export const fetchBlogsWithInfinitePagination = async (
  take: number,
  cursor?: string,
) => {
  return await graphqlRequestClient.request(BlogsWithInfinitePaginationQuery, {
    ...(cursor && { cursor }),
    take,
  });
};

export const fetchBlogsWithNumberPagination = async (
  page: number,
  take: number,
) => {
  return await graphqlRequestClient.request(BlogsWithNumberPaginationQuery, {
    page,
    take,
  });
};

export const fetchBlog = async (id: string) => {
  return await graphqlRequestClient.request(BlogByIdQuery, { id });
};
