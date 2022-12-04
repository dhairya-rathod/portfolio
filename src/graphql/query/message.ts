import { gql } from "@apollo/client";

export const AllMessagesQuery = gql`
  query {
    messages {
      id
      name
      message
      email
      created_at
    }
  }
`;
