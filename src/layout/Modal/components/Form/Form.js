import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../../../AppContext'
import { API_BASE_URL } from '../../../../constans/api'
import useFetch from '../../../../hooks/useFetch'
import { validateEmail, validateName, validateTel } from '../../../../utils/helpers'
import Connection from './components/Connection'
import Field from './components/Field'

const Form = ({ parentClassName, form, setIsSubmitForm }) => {

  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(false)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(true)

  const [isValidForm, setIsValidForm] = useState(true)

  const { postData } = useFetch(API_BASE_URL)

  const { lang } = useContext(AppContext)

  const handleNameOnChange = (event) => {
    setName(event.target.value)
    setIsValidName(validateName(event.target.value))
  }
  const handleTelOnChange = (event) => {
    setTel(event.target.value)
    setIsValidTel(validateTel(event.target.value))
  }
  const handleEmailOnChange = (event) => {
    setEmail(event.target.value)
    setIsValidEmail(validateEmail(event.target.value))
  }
  const handleConnectionChange = (event) => {
    setConnection(event.target.value)
    setIsValidConnection(event.target.value ? true : false)
  }
  const handlePolicyOnChange = (event) => {
    setIsPolicyChecked(event.target.checked)
  }

  useEffect(() => {
    setIsValidForm(
      !(isValidName
        && isValidTel
        && isValidEmail
        && isValidConnection)
      && isPolicyChecked
    )
  }, [name, tel, email, connection, isPolicyChecked])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      name,
      tel,
      email,
      connection,
      isPolicy: isPolicyChecked,
      type: 'order',
      date: new Date().toLocaleString(),
    }

    console.log(order)

    postData(`${lang}/orders.json`, order)
      .then((id) => console.log(id))
      .then(() => {
        setIsSubmitForm(true)
        setIsValidForm(true)
      })
      .catch((error) => console.error(error))


    setName('')
    setIsValidName(false)
    setTel('')
    setIsValidTel(false)
    setEmail('')
    setIsValidEmail(false)
    setConnection('')
    setIsValidConnection(false)
  }

  return (
    <form
      className={`${parentClassName}__form`}
      onSubmit={handleFormSubmit}
    >
      {form?.fields.length > 0 && form.fields.map(field =>
        <Field
          key={field.type}

          parentClassName={parentClassName}
          details={field}

          valueName={name}
          isValidName={isValidName}
          handleNameChange={handleNameOnChange}

          valueTel={tel}
          isValidTel={isValidTel}
          handleTelChange={handleTelOnChange}

          valueEmail={email}
          isValidEmail={isValidEmail}
          handleEmailChange={handleEmailOnChange}
        />
      )
      }

      <Connection
        parentClassName={parentClassName}
        details={form.connection}
        valueConnection={connection}
        handleConnectionChange={handleConnectionChange}
      />

      <label
        className={`${parentClassName}__policy`}
      >
        <input
          type={form.policy.checkbox.type}
          checked={isPolicyChecked}
          onChange={handlePolicyOnChange}
        />
        <a href={form.policy.linkPolicy.url}>
          {form.policy.linkPolicy.data}
        </a>
      </label>

      <button
        className={`${parentClassName}__btn`}
        type='submit'
        disabled={isValidForm}
      >
        <span>
          {form.buttonText ? form.buttonText : 'Submit'}
        </span>
      </button>
    </form>
  )
}

export default Form