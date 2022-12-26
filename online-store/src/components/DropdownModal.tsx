import '../styles/components/dropdownModal.css';
import { FC } from "react"
import { useSearchParams } from "react-router-dom";

interface DropdownModalProps {
  modalOpen: Boolean,
  sortBy: string,
  setSortBy: Function,
  setModalIsOpen: Function,
}

type ISort = {
  id: number,
  value: string,
  title: string,
}

const DropdownModal: FC<DropdownModalProps> = ({setModalIsOpen, modalOpen, sortBy, setSortBy}) => {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const sortTypes: ISort[] = [
    {
      id: 1,
      value: 'price-ASC',
      title: 'Sort by price ASC',
    },
    {
      id: 2,
      value: 'price-DESC',
      title: 'Sort by price DESC',
    },
    {
      id: 3,
      value: 'raiting-ASC',
      title: 'Sort by rating ASC',
    },
    {
      id: 4,
      value: 'raiting-DESC',
      title: 'Sort by rating DESC',
    },
    {
      id: 5,
      value: 'sale-ASC',
      title: 'Sort by discount ASC',
    },
    {
      id: 6,
      value: 'sale-DESC',
      title: 'Sort by discount DESC',
    },
  ]

  function changeSort(value: string): void {
    searchQuery.set('filter', value);
    setSearchQuery(searchQuery);
    setModalIsOpen(false);
    setSortBy(value);
  }

  return (
    <ul onClick={(e) => e.stopPropagation()} className={modalOpen ? 'products__setting-modal products__setting-modal_active' : 'products__setting-modal'}>
      {sortTypes.map(sort => 
        <li 
          key={sort.id}
          className={sort.value === sortBy 
            ? 'products__setting-modal-item products__setting-modal-item_active' 
            : 'products__setting-modal-item'
          }
        >
          <button onClick={() => changeSort(sort.value)} value={sort.value}>{sort.title}</button>
        </li>
      )}
  </ul>
  )
}

export default DropdownModal