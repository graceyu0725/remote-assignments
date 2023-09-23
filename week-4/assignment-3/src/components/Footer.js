import {useState} from "react";

function Footer(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    <>
      <footer className="footer">
        <button type="button" className="cta" onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </footer>
      {showMore && (
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
