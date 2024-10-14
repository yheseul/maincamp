import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IPagination {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  lastPage: number;
}
