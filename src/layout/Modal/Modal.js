import {ReactComponent as CloseIcon} from './assets/close_icon.svg'
import Title from '../../components/Title'
import Form from './components/Form'

const Modal = ({
  data: {
    title,
    form
  }, 
  isModalActive,
  onModalCloseClick
}) => {
  const className = 'modal'

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
          onClick={onModalCloseClick}
        >
          <CloseIcon/>
        </button>
        {title && (
          <Title 
            className={className} 
            title={title}
          />
        )}
        {form && (
          <Form
            className={className}
            form={form}
          />
        )}
      </div>      
    </div>  
  )
}

export default Modal