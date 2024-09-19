const Main = () => {
  const [subscribers, setSubscribers] = React.useState(0);
  const subscribe = () => {
    setSubscribers(subscribers + 1);
  };

  const showList = () => {
    document.getElementById("showListPage").style = "display: block";
    document.getElementById("showYoutuber").style = "display: none";
  };

  const showYoutuber = () => {
    document.getElementById("showYoutuber").style = "display: block";
    document.getElementById("showListPage").style = "display: none";
  };

  return (
    <div>
      <div>banner</div>
      <div>
        <button onClick={showList}>List</button>
        <button onClick={showYoutuber}>Youtuber</button>
      </div>
      <div id="showListPage">
        <List subscribers={subscribers} />
      </div>
      <div id="showYoutuber">
        <Youtuber subscribers={subscribers} subscribe={subscribe} />
      </div>
    </div>
  );
};
