"use client";

import { ChangeEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState();
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // refetch({ search, page: 1 });
    // 1. 샬로우 라우팅
    //  => 페이지 가만히 있고 url만 변경
    //  => url관련 컴포넌트(usePathname, useSearchParams 등)만 리렌더
    //  => 구버전: router.push(주소, 옵션, { shallow: true })

    window.history.pushState(null, "", `?search=${search}`);
  };

  console.log("검색이 리렌더 되었습니다.");

  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
    </>
  );
}
