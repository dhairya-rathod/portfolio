import { gql } from "@apollo/client";

export const AllBlogsQuery = gql`
  query GetAllBlogs {
    blogs {
      id
      title
      slug
      content
      tags
      active
      created_at
      updated_at
      created_by {
        id
      }
      # images
    }
  }
`;

export const BlogsWithInfinitePaginationQuery = gql`
  query GetBlogsWithInfinitePagination($cursor: String, $take: Int!) {
    blogsWithInfinitePaginationQuery(cursor: $cursor, take: $take) {
      pageInfo {
        endCursor
        hasNextPage
      }
      records {
        id
        title
        slug
        content
        tags
        active
        created_at
        updated_at
        # created_by
        # images
      }
    }
  }
`;

export const BlogsWithNumberPaginationQuery = gql`
  query GetBlogsWithNumberPagination($page: Int!, $take: Int!) {
    blogsWithNumberPaginationQuery(page: $page, take: $take) {
      pageInfo {
        totalRecords
      }
      records {
        id
        title
        slug
        content
        tags
        active
        created_at
        updated_at
        # created_by
        # images
      }
    }
  }
`;

export const BlogByIdQuery = gql`
  query GetBlogById($id: string!) {
    blogById(id: $id) {
      id
      title
      slug
      content
      tags
      active
      created_at
      updated_at
      # created_by
      # images
    }
  }
`;
