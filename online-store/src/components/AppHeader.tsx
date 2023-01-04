import { Link, useSearchParams } from "react-router-dom";
import "../styles/components/appHeader.css";
import { RootState } from "../../src/app/store";
import { useSelector, useDispatch } from "react-redux";
import { ICart } from "../types/types";
import { getSearch, changeSearch } from "../app/feautures/searchSlice";

const AppHeader = () => {
  const dispatch = useDispatch();
  const [searchParams, setsearchParams] = useSearchParams();
  const search = useSelector(getSearch);
  const totalAmount: number = useSelector((state: RootState) => {
    return state.cart.cart.reduce(
      (sum: number, item: ICart) => (sum += item.amount),
      0
    );
  });

  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.currentTarget.value));
    if (e.currentTarget.value === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", e.currentTarget.value);
    }
    setsearchParams(searchParams);
  }

  return (
    <header className="header__wrapper">
      <div className="header__header">
        <div className="header__logo">
          <Link to="/">
            <span>ONLINE</span>STORE
          </Link>
        </div>
        <form className="header__search-form" action="" onSubmit={(e) => e.preventDefault()}>
          <button type="submit" className="header__search-sumbit"></button>
          <input
            value={search}  
            className="header__search-input"
            type="search"
            placeholder="Find cat"
            onInput={searchHandler}
          />
        </form>
        <Link to="/cart" className="header__cart">
          {totalAmount > 0 && (
            <div className="header__cart-count">{totalAmount}</div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
