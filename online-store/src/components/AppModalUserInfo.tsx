import { FC } from 'react'
import { IFormData, IErrors } from '../types/types'
import ModalInput from './ModalInput'

interface AppModalUserInfoProps {
  formData: IFormData,
  formErrors: IErrors,
  setFormData: Function,
}

const AppModalUserInfo: FC <AppModalUserInfoProps> = ({formData, formErrors, setFormData}) => {
  return (
    <div>
      <div className='modal__form-block'>
        <h2 className='modal__form-heading'>Contact information</h2>
        <ModalInput 
          formData={formData}
          formErrors={formErrors}
          setFormData={setFormData}
          param={'email'}
        />
      </div>
      <div className='modal__form-block'>
        <h2 className='modal__form-heading'>Shipping address</h2>
        <div className='modal__form-double'>
          <div className='input-small'>
            <ModalInput
              formData={formData}
              formErrors={formErrors}
              setFormData={setFormData}
              param={'firstname'}
            />
          </div>
          <div className='input-small'>
            <ModalInput
              formData={formData}
              formErrors={formErrors}
              setFormData={setFormData} 
              param={'lastname'}
            />
          </div>
        </div>  
        <div style={{marginTop: 15}}>
          <ModalInput 
            formData={formData}
            formErrors={formErrors}
            setFormData={setFormData}
            param={'number'}
          />
        </div>
        <div style={{marginTop: 15}}>
          <ModalInput 
            formData={formData}
            formErrors={formErrors}
            setFormData={setFormData}
            param={'address'}
          />
        </div>
      </div>
    </div>
  )
}

export default AppModalUserInfo