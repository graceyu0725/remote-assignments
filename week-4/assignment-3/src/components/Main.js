import {useState} from "react";

function Main(props) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (clicks === 0) {
      setClicks(1);
    } else {
      setClicks(0);
    }
  };

  return (
    <main>
      <div className="title" onClick={handleClick}>
        {clicks === 0 ? "Welcome Message" : "Have a Good Time!"}
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
