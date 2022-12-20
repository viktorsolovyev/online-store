import { Link } from "react-router-dom";
import "../styles/components/header.css";
import { RootState } from "../../src/app/store";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const totalAmount: number = useSelector(
    (state: RootState) => state.cart.cart.length
  );

  return (
    <header className="header__wrapper">
      <div className="header__header">
        <div className="header__logo">
          <Link to="/">
            <span>ONLINE</span>STORE
          </Link>
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
          {totalAmount > 0 &&
            <div className="header__cart-count">{totalAmount}</div>
          }
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
