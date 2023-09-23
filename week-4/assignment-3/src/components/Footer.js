import {useState} from "react";

function Footer(props) {
  const [showMore, setShowMore] = useState(0);
  const [showText, setShowText] = useState(0);

  const handleShowMore = () => {
    if (showMore === 0) {
      setShowMore(1);
      setShowText(1);
    } else {
      setShowMore(0);
      setShowText(0);
    }
  };

  return (
    <>
      <footer className="footer">
        <button type="button" className="cta" onClick={handleShowMore}>
          {showText === 0 ? "Show More" : "Show Less"}
        </button>
      </footer>
      {showMore === 1 && (
        <div className="more-boxes">
          <div className="bottom">
            <div className="box">Content Box 5</div>
            <div className="box">Content Box 6</div>
            <div className="box">Content Box 7</div>
            <div className="box">Content Box 8</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
