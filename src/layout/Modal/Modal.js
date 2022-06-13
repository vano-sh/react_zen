import { useContext, useRef } from 'react'
import { AppContext } from '../../AppContext'
import clsx from 'clsx'
import { ReactComponent as CloseIcon } from './assets/close_icon.svg'
import Title from '../../components/Title'
import Form from './components/Form'

const Modal = ({ data }) => {

  const className = 'modal'

  const refTitle = useRef(null)

  const {
    isModalActive,
    lang,
    setIsModalActive
  } = useContext(AppContext)

  const activeClass = clsx({ 'active': isModalActive })

  const handleModalCloseClick = () => {
    setIsModalActive(false)
  }

  const handleTitleChange = () => {
    const prevTitleValue = refTitle.current.innerText
    refTitle.current.innerText = (lang === 'en')
      ? 'Submit!'
      : 'Отправлено!'
    setTimeout(() => {
      setIsModalActive(false)
      refTitle.current.innerText = prevTitleValue
    }, 2000)
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

        {data.title && (
          <Title
            parentClassName={className}
            title={data.title}
            refTitle={refTitle}
          />
        )}

        {data.form && (
          <Form
            parentClassName={className}
            form={data.form}
            onTitleChange={handleTitleChange}
          />
        )}
      </div>
    </div>
  )
}

export default Modal