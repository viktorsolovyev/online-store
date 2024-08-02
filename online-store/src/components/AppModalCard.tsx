import '../styles/components/appModalCard.css';
import { FC, ChangeEvent, useState } from 'react'
import { IErrors, IFormData } from '../types/types';
import getCardSystem from '../helpers/getCardSystem';

interface AppModalCardProps {
  cardSystem: string,
  formData: IFormData,
  formErrors: IErrors,
  setFormData: Function,
  setCardSystem: Function,
}

const AppModalCard: FC <AppModalCardProps> = ({cardSystem, formData, formErrors, setFormData, setCardSystem}) => {

  const [cardCounter, setCardCounter] = useState(0);

  function changeCard(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length >= 20 || (!+value.split(' ').join('') && value.length > 0) || value.indexOf('.') >= 0) return;

    if (e.target.value.length === 1) setCardSystem(getCardSystem(value));

    let formatedNumber = '';
    if (formData.cardNumber.length < value.length) {
      if (cardCounter === 3) {
        formatedNumber += (value.length === 19) ? value : value + ' ';   
        setCardCounter(0);
      } else {
        formatedNumber += value;
        setCardCounter(cardCounter + 1);
      }
    } else {
      setCardCounter(0);
      setCardSystem('none');
    }

    setFormData({...formData, cardNumber: formatedNumber});
  }

  function changeCardDate(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length > 5 || value.indexOf('.') >= 0) return;
    
    if (value.length > formData.date.length) {
      if (value.length === 2) {
        setFormData({...formData, date: value + '/'});
      } else {
        setFormData({...formData, date: value});
      }
    } else {
      setFormData({...formData, date: ''});
    }
  }

  function changeCardCVV(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;    
    if ((!+value && value.length > 0) || value.length > 3 || value.indexOf('.') >= 0) return;
    setFormData({...formData, CVV: value});
  }

  return (
    <div style={{marginTop: 25}} className='modal__form-block'>
      <h2 className='modal__form-heading'>Card info</h2>
      <div className='modal__form-card'>
        <input onChange={(e) => changeCard(e)} value={formData.cardNumber} className="input" type="string" placeholder='Card number'/>
        <div className={`modal__form-card-icon modal__form-card-icon_${cardSystem}`}></div>
        {formErrors.cardNumber ? <label className='modal__form-error'>Error!</label> : ''}
      </div>
      <div style={{marginTop: 15}} className='modal__form-double'>
        <div>
          <input onChange={(e) => changeCardDate(e)} value={formData.date} type="text" className='input input-small' placeholder='Card date'/>
          {formErrors.date ? <label className='modal__form-error'>Error!</label> : ''}
        </div>
        <div>
          <input onChange={(e) => changeCardCVV(e)} value={formData.CVV} type="text" className='input input-small' placeholder='CVV'/>
          {formErrors.CVV ? <label className='modal__form-error'>Error!</label> : ''}
        </div>
      </div>
    </div>
  )
}

export default AppModalCard