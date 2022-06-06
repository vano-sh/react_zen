import { useEffect, useState } from 'react'
// import { API_BASE_URL } from '../../../../constans/api'
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
  }
}) => {
  const [name, setName] = useState('')  
  const [tel, setTel] = useState('')  
  const [email, setEmail] = useState('')  
  const [connection, setConnection] = useState('')  
  const [isPolicy, setIsPolicy] = useState(true)  

  useEffect(() => {
    
  }, [name])

  useEffect(() => {
    
  }, [tel])

  useEffect(() => {
    
  }, [email])

  useEffect(() => {
    
  }, [connection])
  
  useEffect(() => {
    
  }, [isPolicy])

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


  const handleFormSubmit = (event) => {
    event.preventDefault()

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
      {fields.length > 0 && (
        fields.map(field => {
          if (field.type === 'text') {
            return (
              <Input 
                className={className} 
                field={field}
                key={field.type}
                value={name}
                handleOnChange={handleNameOnChange}
              />
          )} else if (field.type === 'tel') {
            return (
              <Input 
                className={className} 
                field={field}
                key={field.type}
                value={tel}
                handleOnChange={handleTelOnChange}
              />
          )} else {
            return (
              <Input 
                className={className} 
                field={field}
                key={field.type}
                value={email}
                handleOnChange={handleEmailOnChange}
              />
          )}
        })
      )}

      <label 
        className={`${className}__select`}
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
        disabled
      >
        <span>
          {buttonText ? buttonText : 'Submit'}
        </span>
      </button>      
    </form>
  )
}

export default Form