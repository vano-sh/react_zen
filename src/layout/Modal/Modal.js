import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import clsx from 'clsx'
import { ReactComponent as CloseIcon } from './assets/close_icon.svg'
import Title from '../../components/Title'
import Form from './components/Form'
import Submit from './components/Submit/Submit'
import useBodyHidden from '../../hooks/useBodyHidden'

const Modal = ({ data }) => {

  const className = 'modal'

  const [isSubmitForm, setIsSubmitForm] = useState(false)

  const {
    isModalActive,
    setIsModalActive
  } = useContext(AppContext)

  const activeClass = clsx({ 'active': isModalActive })

  useEffect(() => {
    const idTimer = setTimeout(() => {
      setIsModalActive(false)
      setIsSubmitForm(false)
    }, 2000)

    return () => clearTimeout(idTimer)
  }, [isSubmitForm])

  const handleModalCloseClick = () => {
    setIsModalActive(false)
  }

  return (
    <div
      className={`${className} ${activeClass}`}
    >
      <div className={`${className}__body`}>
        <button
          className={`${className}__close`}
          onClick={handleModalCloseClick}
        >
          <CloseIcon />
        </button>

        {data?.title && (
          <Title
            parentClassName={className}
            title={data.title}
          />
        )}

        {data?.form && (
          <Form
            parentClassName={className}
            form={data.form}
            setIsSubmitForm={setIsSubmitForm}
          />
        )}

        {isSubmitForm && <Submit parentClassName={className} />}
      </div>
    </div>
  )
}

export default Modal