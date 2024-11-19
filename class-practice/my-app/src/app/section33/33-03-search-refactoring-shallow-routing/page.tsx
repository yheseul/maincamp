import List from "@/components/33-03-search-refactoring-shallow-routing/list/page";
import Pagination from "@/components/33-03-search-refactoring-shallow-routing/pagination/page";
import Search from "@/components/33-03-search-refactoring-shallow-routing/search/page";

export default function SearchRefactoringShallowRouting() {
  return (
    <>
      <Search />
      <List />
      <Pagination />
    </>
  );
}
