import { gql } from "@apollo/client";

export const AllMessagesQuery = gql`
  query allMessageQuery($first: Int, $after: String) {
    messages(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          email
          created_at
        }
      }
    }
  }
`;
