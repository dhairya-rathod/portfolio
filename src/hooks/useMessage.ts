import { useQuery } from "@apollo/client";

import { AllMessagesQuery } from "@/graphql/query";

const useMessage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error, fetchMore } = useQuery(AllMessagesQuery, {
    variables: { first: 10 },
  });

  return {};
};

export default useMessage;
