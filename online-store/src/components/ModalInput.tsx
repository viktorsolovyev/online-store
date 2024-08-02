import { FC, ChangeEvent } from 'react'
import { IErrors, IFormData } from '../types/types'

interface ModalInputProps {
  setFormData: Function,
  formData: IFormData,
  formErrors: IErrors,
  param: string,
}

const ModalInput:FC <ModalInputProps> = ({setFormData, formData, formErrors, param}) => {

  const textPlaceholder = param[0].toUpperCase() + param.slice(1);

  function changeData(e: ChangeEvent<HTMLInputElement>) {
    const newData = {...formData};
    newData[param as keyof typeof newData] = e.target.value;
    setFormData(newData);
  }

  return (
    <div>
      <input onChange={(e) => changeData(e)} className="input" type="text" placeholder={textPlaceholder}/>
      {formErrors[param as keyof typeof formErrors] ? <label className='modal__form-error'>Enter valid {param}!</label> : ''}
    </div>
  )
}

export default ModalInput