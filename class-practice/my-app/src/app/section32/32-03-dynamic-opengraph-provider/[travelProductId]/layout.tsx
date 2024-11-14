"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

const FETCH_TRAVEL_PRODUCT = gql`
  query {
    fetchTravelproducts {
      _id
      name
      remarks
      contents
    }
  }
`;

export default function OpenGraphProviderLayout({
  children,
}: {
  children: ReactNode;
}) {
  // 1. usePrams로 travelProductId 가져오기
  const params = useParams();
  params.travelproductId;

  // 2. travelProductId로 상품 조회하기 => useQuery
  const { data } = useQuery(FETCH_TRAVEL_PRODUCT, {
    variables: { travelproductId: params.travelproductId },
  });

  // 3. data <meta /> 바꾸기
  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct?.name} />
      <meta
        property="og:description"
        content={data?.fetchTravelproduct?.remarks}
      />
      <meta
        property="og:image"
        content={data?.fetchTravelproduct?.images?.[0]}
      />
      <>{children}</>
    </>
  );
}
