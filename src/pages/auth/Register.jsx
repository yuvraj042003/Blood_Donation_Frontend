import React from 'react'
import Form from '../../components/shared/Form/Form'
import banner from '../../assets/images/banner2.jpg'
import { useSelector } from 'react-redux'
import Spinner from '../../redux/features/Spinner'
import { toast } from 'react-toastify'
const Register = () => {
  const { loading, error, } = useSelector(state => state.auth)
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {
        loading ? <Spinner /> : (
          <div className='row g-0'>
            <div className='col-md-8 form-banner'>
              <img src={banner} alt='img' />
            </div>
            <div className='col-md-4 form-container'>
              <Form
                formTitle={'Register Page'}
                submitBtn={'Register'}
                formType={'register'} />
            </div>
          </div>
        )}
    </>

  )
}

export default Register