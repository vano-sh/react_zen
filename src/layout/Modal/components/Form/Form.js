import { useState } from 'react'
// import { API_BASE_URL } from '../../../../constans/api'
import Input from '../Input'

const Form = ({className, form}) => {
  const {
    fields, 
    connection: {
      label,
      options
    }, 
    policy: {
      checkbox,
      linkPolicy: {
        url,
        data
      }
    }, 
    buttonText
  } = form

  const [order, setOrder] = useState({
    name: '',
    tel: '',
    email: '',
    connection: '',
    isPolicy: true
  })
  const [isValid, setIsValid] = useState(false)

  const handleOnChange = (event) => {
    const {
      name, 
      value, 
      type, 
      checked
    } = event.target

    type === 'checkbox' 
    ? setOrder({
      ...order,
      [name]: checked
    })
    : setOrder({
      ...order,
      [name]: value,
      data: new Date().toLocaleString(),
      type: 'order'
    })
  }  

  const handleFormSubmit = (event) => {
    event.preventDefault()

    console.log({order})

    // fetch(`${API_BASE_URL}/orders/.json`, {
    //   method: 'POST',
    //   body: JSON.stringify(order)
    // })
    //   .catch(error => console.error(error))
  }

  
  return (
    <form 
      className={`${className}__form`} 
      onSubmit={handleFormSubmit}
    >      
      {fields.length && (
        fields.map(field => 
          <Input 
            className={className} 
            field={field}
            key={field.type}
            order={order}
            handleOnChange={handleOnChange}
          />
        )
      )}
      <label 
        className={order.connection
          ? `${className}__select success`
          : `${className}__select error`
        }
      >
        <span>{label}</span>          
        <select
          name='connection'
          value={order.connection}
          onChange={handleOnChange}
        >
          <option></option>
          {options.length && (
            options.map(option => 
              <option 
                value={option.value} 
                key={option.value}
              >
                {option.text}
              </option>
            )
          )}
        </select>
      </label>    
      <label className={`${className}__policy`}>
        <input 
          type={checkbox.type} 
          name='isPolicy'
          checked={order.isPolicy}
          onChange={handleOnChange}
        />
        <a href={url}>
          {data}
        </a>
      </label>
      <button 
        className={`${className}__btn`} 
        type='submit'
        disabled={isValid ? 'enable' : 'disabled'} 
      >
        <span>
          {buttonText ? buttonText : 'Submit'}
        </span>
      </button>      
    </form>
  )
}

export default Form

/*
name === 'connection'
    ? setIsValid({
        ...isValid,
        [`${name}Valid`]: value ? true : false
      })
    : setIsValid({
        ...isValid,
        [`${name}Valid`]: validate
      })  

const [isValid, setIsValid] = useState({
    nameValid: false,
    telValid: false,
    emailValid: false,
    connectionValid: false
  })
*/