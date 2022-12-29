import { FC, useState, useCallback } from "react";
import "../styles/components/appFilter.css";
// import { RootState } from "../../src/app/store";
import { ICategories } from "../types/types";

interface AppFilterProps {
  name: string;
  title: string;
  totalItems: ICategories[];
}

const AppFilter: FC<AppFilterProps> = ({ name, title, totalItems }) => {
  // let activeArr: Array<number> = [];
  const [activeArr, setActiveArr] = useState<Array<number>>([]);

  const toogleToActive = useCallback(
    (id: number) => {
      if (activeArr.includes(id)) {
        setActiveArr([...activeArr.filter((item) => item !== id)]);
      } else {
        setActiveArr([...activeArr, id]);
      }
    },
    [activeArr, setActiveArr]
  );

  return (
    <div className="filter__header">
      <h1>{title}</h1>
      <ul>
        <li className="filter-item filter-item-active">All</li>
        {totalItems.map((item) => (          
          <li
            onClick={() => {
              toogleToActive(item.id);
            }}
            className={
              "filter-item" +
              (activeArr.includes(item.id) ? " filter-item-active" : "")
            }
          >
            {item.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppFilter;
