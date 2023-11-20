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

export const BlogsWithPagination = gql`
  query GetBlogsWithPagination($cursor: Int, $take: Int) {
    blogsWithPagination(cursor: $cursor, take: $take) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
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
