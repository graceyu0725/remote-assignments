import menu from "../img/menu.png";
import {useState} from "react";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left">Website Title / Logo</div>

      <ul className="main-nav">
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
        <li className="item">Item 4</li>

        <div className="menu" onClick={handleOpenMenu}>
          <img src={menu} alt="menu" width="30px" height="30px" />
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li className="close-button" onClick={handleCloseMenu}>
                X
              </li>
              <li className="mobile-item">Item 1</li>
              <li className="mobile-item">Item 2</li>
              <li className="mobile-item">Item 3</li>
              <li className="mobile-item">Item 4</li>
            </ul>
          </div>
        )}
      </ul>
    </header>
  );
}

export default Header;
