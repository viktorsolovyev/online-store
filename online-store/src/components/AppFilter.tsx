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
  
  const minPrice = totalNumbers !== undefined ? totalNumbers[0] : 0;
  const maxPrice = totalNumbers !== undefined ? totalNumbers[totalNumbers.length - 1] : 100;

  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const [sliderValue1, setSliderValue1] = useState(minPrice);
  const [sliderValue2, setSliderValue2] = useState(maxPrice);
  

  useEffect(() =>{
    totalFilters.forEach((item) => {
      if (item.name === name && item.values) {
        setactiveItems(item.values);
      }
    });

  }, [totalFilters]);

  //  for slider filter
  function changeMinMaxValues (currentValue: number, setSlider: Function, anotherSliderValue: number ) {
    setSlider(currentValue);
    if (currentValue < anotherSliderValue) {
      setMinValue(currentValue);
    } else if (currentValue > anotherSliderValue) {
      setMaxValue(currentValue);
    } else {
      setMinValue(currentValue);
      setMaxValue(currentValue);
    }
    if ((currentValue !== minPrice && currentValue !== maxPrice) ||
    (anotherSliderValue !== minPrice && anotherSliderValue !== maxPrice) ) {
      const minValue = currentValue < anotherSliderValue ? currentValue : anotherSliderValue;
      const maxValue = currentValue > anotherSliderValue ? currentValue : anotherSliderValue;
      dispatch(filtersActions.addFilter({
        type: type,
        name: name,
        minValue: minValue,
        maxValue: maxValue,
      }));
      searchParams.set(name, `${minValue}-${maxValue}`);      
    } else {
      dispatch(filtersActions.removeFilter({
        type: type,
        name: name,        
      }));
      searchParams.delete(name);
    }
    setsearchParams(searchParams);
  }

  //  for list filter
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
      {type === "slider" && (
        <div>
          <div className="filter__wrapper-slider" role="group">
            <input
              type="range"
              value={sliderValue1}
              min={minPrice}
              max={maxPrice}
              onChange={(event) =>
                changeMinMaxValues(
                  +event.target.value,
                  setSliderValue1,
                  sliderValue2
                )
              }
            />
            <input
              type="range"
              value={sliderValue2}
              min={minPrice}
              max={maxPrice}
              onChange={(event) =>
                changeMinMaxValues(
                  +event.target.value,
                  setSliderValue2,
                  sliderValue1
                )
              }
            />
          </div>
          <div className="filter__slider-info">
            <div>
              {name === "price" ? "$" : ""}
              {minValue}
            </div>
            <div>
              {name === "price" ? "$" : ""}
              {maxValue}
            </div>
          </div>
        </div>
      )}
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
