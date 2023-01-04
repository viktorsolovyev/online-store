import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import "../styles/components/appFilter.css";
import { IBrands, ICategories } from "../types/types";
import { filtersActions, getAllFilters } from "../app/feautures/filtersSlice";

interface AppFilterProps {
  type: string;
  name: string;
  title: string;
  totalItems?: ICategories[] | IBrands[];
  totalNumbers?: number[];
}

const AppFilter: FC<AppFilterProps> = ({ type, name, title, totalItems, totalNumbers }) => {
  const dispatch = useDispatch();
  const [activeItems, setactiveItems] = useState<Array<number>>([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const totalFilters = useSelector(getAllFilters);

  useEffect(() =>{
    totalFilters.forEach((item) => {
      if (item.name === name && item.values) {
        setactiveItems(item.values);
      }
    });

  }, [totalFilters]);

  function toogleToActive (id: number) { 
      if (activeItems.includes(id)) {
        const newActiveItems = [...activeItems.filter((item) => item !== id)];
        setactiveItems(newActiveItems);        
        dispatch(filtersActions.removeFilter({
          type: type,
          name: name,
          values: [id]
        }));
        if (newActiveItems.length === 0) {
          searchParams.delete(name);
        } else {
          searchParams.set(name, String(newActiveItems.join('-')));
        }
        setsearchParams(searchParams);
      } else {
        const newActiveItems = [...activeItems, id];        
        setactiveItems(newActiveItems);        
        dispatch(filtersActions.addFilter({
          type: type,
          name: name,
          values: [id]
        }));      
        searchParams.set(name, String(newActiveItems.join('-')));
        setsearchParams(searchParams);        
      }
    }

  const clearActiveItems = () => {
    dispatch(filtersActions.removeFilter({
      type: type,
      name: name,
      values: activeItems
    }));
    setactiveItems([]);
    searchParams.delete(name);
    setsearchParams(searchParams);
  }

  return (
    <div className="filter__header">
      <h1>{title}</h1>
      {type === "list" && (
        <ul>
          <li
            onClick={clearActiveItems}
            className={
              "filter-item" + (!activeItems.length ? " filter-item-active" : "")
            }
          >
            All
          </li>
          {totalItems?.map((item) => (
            <li
              key={item.id}
              onClick={() => toogleToActive(item.id)}
              className={
                "filter-item" +
                (activeItems.includes(item.id) ? " filter-item-active" : "")
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppFilter;
