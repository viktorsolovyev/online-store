import { Link } from "react-router-dom";
import "../styles/components/header.css";

const AppHeader = () => {

  return (
    <header className="header__wrapper">
      <div className="header__header">
        <div className="header__logo">
          <span>ONLINE</span>STORE
        </div>
        <form className="header__search-form" action="">
          <button type="submit" className="header__search-sumbit"></button>
          <input
            className="header__search-input"
            type="search"
            placeholder="Find cat"
          />
        </form>        
        <Link to="/cart" className="header__cart">          
          <div className="header__cart-count">20</div>
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
