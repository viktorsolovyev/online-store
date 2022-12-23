import '../styles/components/appModal.css';
import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { IErrors } from '../types/types';
import getCardSystem from '../helpers/getCardSystem';

interface AppModalProps {
  isOpen: Boolean,
  setIsOpen: Function,
}

const AppModal= () => {

  const [formData, setFormData] = useState(
    {
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      number: '',
      cardNumber: '',
      cardNumberValid: '',
      cardDate: '',
      cvv: '',
    }
  );
  
  const [formErrors, setFormErrors] = useState<IErrors>(
    {
      email: false,
      firstname: false,
      lastname: false,
      address: false,
      number: false,
      cardNumber: false,
      cardDate: false,
      cvv: false,
  });

  const [cardSystem, setCardSystem] = useState('none');
  const [cardCounter, setCardCounter] = useState(0);

  function validateForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let isValid = true;

    const findErrors: IErrors = {
      email: false,
      firstname: false,
      lastname: false,
      address: false,
      number: false,
      cardNumber: false,
      cardDate: false,
      cvv: false,
    };

    const cardMonth = formData.cardDate[0] + formData.cardDate[1];
    const cardYear = formData.cardDate[3] + formData.cardDate[4];

    findErrors.email = (/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,3}/.test(formData.email)) ? false : true;
    findErrors.firstname = (/[a-zA-Z]{3,20}/.test(formData.firstname)) ? false : true;
    findErrors.lastname = (/[a-zA-Z]{3,20}/.test(formData.lastname)) ? false : true;
    findErrors.number = (/\+[0-9]{9,20}/.test(formData.number)) ?  false : true;
    findErrors.address = (formData.address.split(' ').length >= 3) ? false : true;
    findErrors.cardNumber = (formData.cardNumber.length === 19) ? false : true;
    findErrors.cvv = (formData.cvv.length === 3) ? false : true;
    findErrors.cardDate = +cardMonth > 12 || +cardMonth < 1 || !+cardMonth || !+cardYear;

    setFormErrors(findErrors);

    for (let error in findErrors) {
      let key = error as keyof typeof findErrors;
      if (findErrors[key]) isValid = false;
    }
    
    if (isValid) submitForm();
  }

  function changeCard(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length >= 20 || (!+value.split(' ').join('') && value.length > 0)) return;

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
    if (value.length > 5) return;
    
    if (value.length > formData.cardDate.length) {
      if (value.length === 2) {
        setFormData({...formData, cardDate: value + '/'});
      } else {
        setFormData({...formData, cardDate: value});
      }
    } else {
      setFormData({...formData, cardDate: ''});
    }
  }

  function changeCardCVV(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if ((!+value && value.length > 0) || value.length > 3) return;
    setFormData({...formData, cvv: value});
  }

  function submitForm() {
    console.log('Submited!');
  }

  return (  
    <div className="modal">
      <form onSubmit={(e) => validateForm(e)} className="modal__content">
        <div className='modal__form-block'>
          <h2 className='modal__form-heading'>Contact information</h2>
          <div>
            <input onChange={(e) => setFormData({...formData, email: e.target.value})} className="input" type="text" placeholder='Email'/>
            {formErrors.email ? <label className='modal__form-error'>Error!</label> : ''}
          </div>
        </div>
        <div className='modal__form-block'>
          <h2 className='modal__form-heading'>Shipping address</h2>
          <div className='modal__form-double'>
            <div>
              <input onChange={(e) => setFormData({...formData, firstname: e.target.value})} type="text" className='input input-small' placeholder='Firstname'/>
              {formErrors.firstname ? <label className='modal__form-error'>Error!</label> : ''}
            </div>
            <div>
              <input onChange={(e) => setFormData({...formData, lastname: e.target.value})} type="text" className='input input-small' placeholder='Lastname'/>
              {formErrors.lastname ? <label className='modal__form-error'>Error!</label> : ''}
            </div>
          </div>
          <div style={{marginTop: 15}}>
            <input onChange={(e) => setFormData({...formData, number: e.target.value})} className="input" type="text" placeholder='Phone number'/>
            {formErrors.number ? <label className='modal__form-error'>Error!</label> : ''}
          </div>
          <div style={{marginTop: 15}}>
            <input onChange={(e) => setFormData({...formData, address: e.target.value})} className="input" type="text" placeholder='Shipping address'/>
            {formErrors.address ? <label className='modal__form-error'>Error!</label> : ''}
          </div>
        </div>
        <div className='modal__form-block'>
          <h2 className='modal__form-heading'>Card info</h2>
          <div className='modal__form-card'>
            <input onChange={(e) => changeCard(e)} value={formData.cardNumber} className="input" type="string" placeholder='Card number'/>
            <div className={`modal__form-card-icon modal__form-card-icon_${cardSystem}`}></div>
            {formErrors.cardNumber ? <label className='modal__form-error'>Error!</label> : ''}
          </div>
          <div style={{marginTop: 15}} className='modal__form-double'>
            <div>
              <input onChange={(e) => changeCardDate(e)} value={formData.cardDate} type="text" className='input input-small' placeholder='Card date'/>
              {formErrors.cardDate ? <label className='modal__form-error'>Error!</label> : ''}
            </div>
            <div>
              <input onChange={(e) => changeCardCVV(e)} value={formData.cvv} type="text" className='input input-small' placeholder='CVV'/>
              {formErrors.cvv ? <label className='modal__form-error'>Error!</label> : ''}
            </div>
          </div>
        </div>
        <button className='btn'>Continue</button>
      </form>
    </div>
  )
}

export default AppModal