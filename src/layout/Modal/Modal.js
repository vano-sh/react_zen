import { AppContext } from '../../AppContext'
import { useContext, useEffect } from 'react'
import { ReactComponent as CloseIcon } from './assets/close_icon.svg'
import Title from '../../components/Title'
import Form from './components/Form'
import clsx from 'clsx'
import useBodyHidden from '../../hooks/useBodyHidden'
import Success from './components/Success'

const Modal = ({ data }) => {

  const {
    isModalActive,
    setIsModalActive,
    isSuccessSubmit,
    setIsSuccessSubmit,
    setIsFormReset,
    lang
  } = useContext(AppContext)

  const className = 'modal'

  const successMessage = lang === 'en'
    ? 'Order submit successfully!'
    : 'Заказ успешно отправлен!'

  useBodyHidden(isModalActive)

  useEffect(() => {
    if (isSuccessSubmit) {
      const timerId = setTimeout(() => {
        setIsModalActive(false)
        setIsSuccessSubmit(false)
      }, 2000)
      return () => clearTimeout(timerId)
    }
  }, [isSuccessSubmit])

  const handleModalCloseButtonClick = () => {
    setIsModalActive(false)
    setIsFormReset(true)
  }

  const activeClassName = clsx({
    'active': isModalActive
  })

  return (

    <div className={`${className} ${activeClassName}`}>
      <div className={`${className}__body`}>
        <button
          className={`${className}__close`}
          onClick={handleModalCloseButtonClick}
        >
          <CloseIcon />
        </button>

        {data?.title && (
          <Title parentClassName={className} >
            {data.title.data}
          </Title>
        )}

        {data?.form && (
          <Form
            parentClassName={className}
            form={data.form}
          />
        )}

        {isSuccessSubmit &&
          <Success
            parentClassName={className}
          >
            {successMessage}
          </Success>
        }
      </div>
    </div >
  )
}

export default Modal