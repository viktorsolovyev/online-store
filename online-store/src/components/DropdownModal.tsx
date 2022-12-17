import { FC } from "react"
import '../styles/components/dropdownModal.css';

interface DropdownModalProps {
  modalOpen: Boolean,
}

const DropdownModal: FC<DropdownModalProps> = ({modalOpen}) => {
  return (
    <ul onClick={(e) => e.stopPropagation()} className={modalOpen ? 'products__setting-modal products__setting-modal_active' : 'products__setting-modal'}>
      <li className='products__setting-modal-item'>Sort by price ASC</li>
      <li className='products__setting-modal-item'>Sort by price DESC</li>
      <li className='products__setting-modal-item'>Sort by rating ASC</li>
      <li className='products__setting-modal-item'>Sort by rating DESC</li>
      <li className='products__setting-modal-item'>Sort by discount ASC</li>
      <li className='products__setting-modal-item'>Sort by discount DESC</li>
  </ul>
  )
}

export default DropdownModal