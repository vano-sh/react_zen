import { AppContext } from '../../../../AppContext'
import { useContext, useState, useEffect } from 'react'
import { API_BASE_URL } from '../../../../constans/api'
import Field from './components/Field'
import Connection from './components/Connection'
import Policy from '../Policy'
import useFetch from '../../../../hooks/useFetch'
import {
  validateName,
  validateTel,
  validateEmail
} from '../../../../utils/helpers'

const Form = ({ parentClassName, form }) => {

  const { postData, isLoading } = useFetch(API_BASE_URL)

  const {
    lang,
    isSuccessSubmit,
    setIsSuccessSubmit,
    isFormReset,
    setIsFormReset
  } = useContext(AppContext)

  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(false)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(true)

  const isSubmitDisabled = !(
    isValidName &&
    isValidTel &&
    isValidEmail &&
    isValidConnection &&
    isPolicyChecked
  )

  const handleNameChange = (event) => {
    const name = event.target.value
    setName(name)
    setIsValidName(validateName(name))
  }

  const handleTelChange = (event) => {
    const tel = event.target.value
    setTel(tel)
    setIsValidTel(validateTel(tel))
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(email)
    setIsValidEmail(validateEmail(email))
  }

  const handleConnectionChange = (event) => {
    const connection = event.target.value
    setConnection(connection)

    connection
      ? setIsValidConnection(true)
      : setIsValidConnection(false)
  }

  const handlePolicyChange = () => {
    setIsPolicyChecked(!isPolicyChecked)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      type: 'order',
      date: new Date().toLocaleString(),
      name,
      tel,
      email,
      connection,
      policy: isPolicyChecked
    }

    postData(`${lang}/orders.json`, order).then(
      () => setIsSuccessSubmit(true),
      (error) => console.error({ error })
    )
  }

  useEffect(() => {
    if (isSuccessSubmit || isFormReset) {
      setName('')
      setIsValidName(false)
      setTel('')
      setIsValidTel(false)
      setEmail('')
      setIsValidEmail(false)
      setConnection('')
      setIsValidConnection(false)
      setIsFormReset(false)
    }
  }, [isSuccessSubmit, isFormReset])

  return (
    <>
      <form
        className={`${parentClassName}__form`}
        onSubmit={handleFormSubmit}
      >
        {form?.fields.length > 0 && form.fields.map((field, index) => (
          <Field
            key={index}
            type={field.type}
            parentClassName={parentClassName}
            details={field}

            name={name}
            isValidName={isValidName}
            onNameChange={handleNameChange}

            tel={tel}
            isValidTel={isValidTel}
            onTelChange={handleTelChange}

            email={email}
            isValidEmail={isValidEmail}
            onEmailChange={handleEmailChange}
          />
        ))}

        {form?.connection && (
          <Connection
            parentClassName={parentClassName}
            details={form.connection}
            connection={connection}
            isValidConnection={isValidConnection}
            onConnectionChange={handleConnectionChange}
          />
        )}

        {form?.policy && (
          <Policy
            parentClassName={parentClassName}
            policy={form.policy}
            isPolicyChecked={isPolicyChecked}
            onPolicyChange={handlePolicyChange}
          />
        )}

        <button
          className={`${parentClassName}__btn`}
          type='submit'
          disabled={isSubmitDisabled}
        >
          {form.buttonText}
        </button>
      </form>

      {isLoading && (
        <div className={`${parentClassName}__sending`}>
          {
            lang === 'en'
              ? 'Sending...'
              : 'Отправка...'
          }
        </div>
      )}
    </>
  )
}

export default Form