import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from "../app/feautures/productsSlice";
import ProductsSettings from "../components/ProductsSettings";
import ProductsList from "../components/ProductsList";
import '../styles/pages/storePage.css';
import AppFilter from "../components/AppFilter";
import { getAllCategories } from "../app/feautures/categories";
import { getAllBrands } from "../app/feautures/brandsSlice";
import { getAllPrices } from "../app/feautures/pricesSlice";
import { getAllFilters, filtersActions, availableFilters} from "../app/feautures/filtersSlice";
import { getSearch, changeSearch } from "../app/feautures/searchSlice";
import { getPriceSale } from "../helpers/getSalePrice";
import { IProduct } from "../types/types";

const StorePage = () => {
  const totalProducts = useSelector(getAllProducts);
  const totalCategories = useSelector(getAllCategories);
  const totalBrands = useSelector(getAllBrands);
  const totalPrices = useSelector(getAllPrices);
  const totalFilters = useSelector(getAllFilters);
  const search = useSelector(getSearch);
  const [sortBy, setSortBy] = useState('');
  const [isRow, setIsRow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.get('isRow')) {
      const listType = searchQuery.get('isRow') === 'true' ? true : false;
      setIsRow(listType);
    }
    if (searchQuery.get('sort')) {
      const sortType = searchQuery.get('sort');
      if (sortType) {
        setSortBy(sortType);
      };
    }
    availableFilters.forEach((item) => {
      if (searchQuery.get(item.name)) {
        const filterValues = searchQuery.get(item.name)?.split('-').map((i) => +i);
        if (filterValues)      
          dispatch(filtersActions.addFilter({
            type: item.type,
            name: item.name,
            values: filterValues
          }));  
  
      }
    });
    const search = searchQuery.get('search');
    if (search) {
      dispatch(changeSearch(search));
    }
  }, [])

  const sortedProducts = useMemo(() => {
    let copy = [...totalProducts];
    if (sortBy.length <= 0 && totalFilters.length === 0 && search === "") return copy;
    
    const [sortParam, sortType] = sortBy.split('-');

    const key: keyof IProduct = sortParam as keyof IProduct;
    copy.sort((a,b) => {
      if (sortType === 'ASC') {
        return +a[key] - +b[key];
      } 
      return +b[key] - +a[key];
    });
    totalFilters.map((filter) => {
      const propName: keyof IProduct = `${filter.name}Id` as keyof IProduct;
      copy = copy.filter((item) => filter.values?.includes(+item[propName]));
      return copy;
    });
    if (search !== "") {
      copy = copy.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.price.toString().includes(search) ||
          getPriceSale(item.price, item.sale).toString().includes(search) ||
          item.sale.toString().includes(search) ||
          item.raiting.toString().includes(search) ||
          item.stock.toString().includes(search) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return copy;
  },[totalProducts, sortBy, totalFilters, search]);

  return (
    <div className="container store__container">
        <aside className="filters">
          <AppFilter type="list" name="category" title="Category" totalItems={totalCategories} />
          <AppFilter type="list" name="brand" title="Brand" totalItems={totalBrands} />
          <AppFilter type="slider" name="price" title="Price" totalNumbers={totalPrices} />
        </aside>
        <div className="products__container">
          <ProductsSettings 
            modalOpen={modalOpen}
            setModalIsOpen={setModalOpen}
            isRow={isRow}
            setIsRow={setIsRow}
            amount={sortedProducts.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ProductsList totalProducts={sortedProducts} isRow={isRow}/>
        </div>
    </div>
  )
}

export default StorePage