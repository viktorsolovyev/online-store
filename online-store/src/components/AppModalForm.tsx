import '../styles/components/appModalForm.css';
import {FC, FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { IErrors, IFormData } from '../types/types';
import AppModalCard from './AppModalCard';
import AppModalUserInfo from './AppModalUserInfo';

interface AppModalFormProps {
  clearCart: Function,
  setOrderAccepted: Function,
}

const AppModalForm:FC <AppModalFormProps> = ({setOrderAccepted, clearCart}) => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IFormData>(
    {
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      number: '',
      cardNumber: '',
      cardNumberValid: '',
      date: '',
      CVV: '',
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
      date: false,
      CVV: false,
  });

  const [cardSystem, setCardSystem] = useState('none');

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
      date: false,
      CVV: false,
    };

    const cardMonth = formData.date[0] + formData.date[1];
    const cardYear = formData.date[3] + formData.date[4];

    findErrors.email = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(formData.email)) ? false : true;
    findErrors.firstname = (/[a-zA-Z]{3,20}/.test(formData.firstname)) ? false : true;
    findErrors.lastname = (/[a-zA-Z]{3,20}/.test(formData.lastname)) ? false : true;
    findErrors.number = (/\+[0-9]{9,20}/.test(formData.number)) ?  false : true;
    findErrors.address = (formData.address.split(' ').length >= 3 && formData.address.split(' ').find((item) => item.length < 5) === undefined) ? false : true;
    findErrors.cardNumber = (formData.cardNumber.length === 19) ? false : true;
    findErrors.CVV = (formData.CVV.length === 3) ? false : true;
    findErrors.date = +cardMonth > 12 || +cardMonth < 1 || !+cardMonth || !+cardYear;

    setFormErrors(findErrors);

    for (let error in findErrors) {
      let key = error as keyof typeof findErrors;
      if (findErrors[key]) isValid = false;
    }
    
    if (isValid) submitForm();
  }

  function submitForm() {
    dispatch(clearCart());
    setOrderAccepted(true);
  }

  return (
    <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => validateForm(e)} className="modal__content">
      <AppModalUserInfo
        formData={formData}
        formErrors={formErrors}
        setFormData={setFormData}
      />
      <AppModalCard
        formData={formData}
        formErrors={formErrors}
        cardSystem={cardSystem}
        setFormData={setFormData}
        setCardSystem={setCardSystem}
      />
      <button className='btn'>Continue</button>
    </form>
  )
}

export default AppModalForm