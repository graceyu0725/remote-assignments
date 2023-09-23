import {useState} from "react";

function Main(props) {
  const [clicks, setClicks] = useState(true);

  const handleClick = () => {
    if (clicks) {
      setClicks(false);
    } else {
      setClicks(true);
    }
  };

  return (
    <main>
      <div className="title" onClick={handleClick}>
        {clicks ? "Welcome Message" : "Have a Good Time!"}
      </div>
      <div className="body">
        <div className="top">Section Title</div>

        <div className="bottom">
          <div className="box">Content Box 1</div>
          <div className="box">Content Box 2</div>
          <div className="box">Content Box 3</div>
          <div className="box">Content Box 4</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
