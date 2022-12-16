import { FC } from "react"

interface DropdownModalProps {
  modalOpen: Boolean,
}

const DropdownModal: FC<DropdownModalProps> = ({modalOpen}) => {
  return (
    <ul onClick={(e) => e.stopPropagation()} className={modalOpen ? 'products__setting-modal products__setting-modal_active' : 'products__setting-modal'}>
      <li className='products__setting-modal-item'><button>Sort by price ASC</button></li>
      <li className='products__setting-modal-item'><button>Sort by price DESC</button></li>
      <li className='products__setting-modal-item'><button>Sort by rating ASC</button></li>
      <li className='products__setting-modal-item'><button>Sort by rating DESC</button></li>
      <li className='products__setting-modal-item'><button>Sort by discount ASC</button></li>
      <li className='products__setting-modal-item'><button>Sort by discount DESC</button></li>
  </ul>
  )
}

export default DropdownModal