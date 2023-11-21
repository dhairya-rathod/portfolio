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
      created_by
      images
    }
  }
`;

export const BlogsWithInfinitePagination = gql`
  query GetBlogsWithInfinitePagination($cursor: String, $take: Int!) {
    blogsWithInfinitePagination(cursor: $cursor, take: $take) {
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
        created_by
        images
      }
    }
  }
`;

export const BlogsWithNumberPagination = gql`
  query GetBlogsWithNumberPagination($page: Int!, $take: Int!) {
    blogsWithNumberPagination(page: $page, take: $take) {
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
        created_by
        images
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
      created_by
      images
    }
  }
`;
