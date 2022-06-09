import { useEffect, useRef, useState } from 'react'
import { API_BASE_URL } from '../../../../constans/api'
import useFetch from '../../../../hooks/useFetch'
import Input from '../Input'

const Form = ({
  className, 
  form: {
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
  },
  onTitleChange
}) => {  
  const [name, setName] = useState('')  
  const [tel, setTel] = useState('')  
  const [email, setEmail] = useState('')  
  const [connection, setConnection] = useState('')  
  const [isPolicy, setIsPolicy] = useState(true)
  
  const refInputName = useRef()

  const {postData} = useFetch(API_BASE_URL)

  useEffect(() => {
    refInputName.current.focus()
  }, [])

  const handleNameOnChange = (event) => {
    setName(event.target.value)
  }
  const handleTelOnChange = (event) => {
    setTel(event.target.value)
  }
  const handleEmailOnChange = (event) => {
    setEmail(event.target.value)
  }
  const handleConnectionOnChange = (event) => {
    setConnection(event.target.value)
  }
  const handlePolicyOnChange = (event) => {
    setIsPolicy(event.target.checked)
  }

  const validateName = (value) => {
    if (value.length >= 2 
      && value.search(/[^a-z]+/gi) === -1) {
      return 'success'     
    } else if (value.length === 0 ) {
      return ''
    } else {
      return 'error'
    }
  }
  const validateTel = (value) => {
    if (value.length >= 10
      && value.search(/[^0-9]+/gi) === -1) {
      return 'success'     
    } else if (value.length === 0 ) {
      return ''
    } else {
      return 'error'
    }
  }
  const validateEmail = (value) => {
    if (value.length >= 9 
      && value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)/gi) !== -1) {
      return 'success'     
    } else if (value.length === 0 ) {
      return ''
    } else {
      return 'error'
    }
  }
  const validateForm = () => {
    if (
      validateName(name) === 'success' &&
      validateTel(tel) === 'success' &&
      validateEmail(email) === 'success' &&
      connection && isPolicy
    ) {
      return false
    }
    return true    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      name,
      tel,
      email,
      connection,
      isPolicy,
      type: 'order',
      date: new Date().toLocaleString(),
    }

    console.log(order)

    postData(`en/order.json`, order)
      .catch(error => console.error(error))  
    
    onTitleChange()
    setName('')
    setTel('')
    setEmail('')
    setConnection('')
  }
  
  return (
    <form 
      className={`${className}__form`} 
      onSubmit={handleFormSubmit}
    >      
      {fields.length > 0 && (
        fields.map(field => {
          if (field.type === 'text') {
            return (
              <Input
                className={`${className}__input ${validateName(name)}`} 
                field={field}
                key={field.type}
                refInputName={refInputName} 
                value={name}
                handleOnChange={handleNameOnChange}
              />
          )} else if (field.type === 'tel') {
            return (
              <Input 
                className={`${className}__input ${validateTel(tel)}`} 
                field={field}
                key={field.type}
                value={tel}
                handleOnChange={handleTelOnChange}
              />
          )} else {
            return (
              <Input 
                className={`${className}__input ${validateEmail(email)}`} 
                field={field}
                key={field.type}
                value={email}
                handleOnChange={handleEmailOnChange}
              />
          )}
        })
      )}

      <label 
        className={connection 
          ? `${className}__select success`
          : `${className}__select`
        } 
      >
        <span>{label}</span>          
        <select
          value={connection}
          onChange={handleConnectionOnChange}
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

      <label 
        className={`${className}__policy`}
      >
        <input 
          type={checkbox.type} 
          checked={isPolicy}
          onChange={handlePolicyOnChange}
        />
        <a href={url}>
          {data}
        </a>
      </label>

      <button 
        className={`${className}__btn`} 
        type='submit'
        disabled={validateForm()}
      >
        <span>
          {buttonText ? buttonText : 'Submit'}
        </span>
      </button>      
    </form>
  )
}

export default Form