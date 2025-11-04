import { useQuery } from "@apollo/client";
import { type GetAllUsersResponse } from "@/interfaces";
import { GET_ALL_USERS } from "@/graphql/queries";

const useQueryUsers = () => {
  const { data, loading, error } = useQuery<GetAllUsersResponse>(GET_ALL_USERS);

  return { data: data?.users, loading, error };
};

export { useQueryUsers };
