import { useContext, useRef } from 'react'
import { AppContext } from '../../AppContext'
import {ReactComponent as CloseIcon} from './assets/close_icon.svg'
import Title from '../../components/Title'
import Form from './components/Form'

const Modal = ({
  data: {
    title,
    form
  }
}) => {
  const className = 'modal'
  const refTitle = useRef(null)

  const {
    isModalActive,
    lang,
    setIsModalActive
  } = useContext(AppContext)

  const handleModalCloseClick = () => {
    setIsModalActive(false)
  }

  const handleTitleChange = () => { 
    const prevTitleValue = refTitle.current.innerText
    refTitle.current.innerText = (lang === 'en') 
      ? 'Submit!' 
      : 'Отправлено!'
    setTimeout(()=> {
      setIsModalActive(false)
      refTitle.current.innerText = prevTitleValue
    }, 2000)
  }

  return (
    <div 
      className={isModalActive
        ? `${className} active`
        : className
      }
    >
      <div className={`${className}__body`}>
        <button
          className={`${className}__close`} 
          onClick={handleModalCloseClick}
        >
          <CloseIcon/>
        </button>
        {title && (
          <Title 
            className={className} 
            title={title}
            refTitle={refTitle}
          />
        )}
        {form && (
          <Form
            className={className}
            form={form}
            onTitleChange={handleTitleChange}
          />
        )}
      </div>      
    </div>  
  )
}

export default Modal