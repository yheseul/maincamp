import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <div>page1</div>
      <Link to="/page2">go page2</Link>
    </>
  );
};

export default Page1;
