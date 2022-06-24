import clsx from "clsx"
import { validateName, validateTel, validateEmail } from '../../../../../../utils/helpers'

const Field = ({
  parentClassName,
  details,
  valueName,
  isValidName,
  handleNameChange,
  valueTel,
  isValidTel,
  handleTelChange,
  valueEmail,
  isValidEmail,
  handleEmailChange
}) => {

  const currentClassName = `${parentClassName}__input`

  const validNameClasses = clsx({
    'success': validateName(valueName),
    'error': valueName.length && !isValidName
  })

  const validTelClasses = clsx({
    'success': validateTel(valueTel),
    'error': valueTel.length && !isValidTel
  })
  const validEmailClasses = clsx({
    'success': validateEmail(valueEmail),
    'error': valueEmail.length && !isValidEmail
  })


  switch (details.type) {
    default: return (
      <input
        className={`${currentClassName} ${validNameClasses}`}
        type={details.type}
        placeholder={details.placeholder}
        value={valueName}
        onChange={handleNameChange}
      />
    )
    case 'tel': return (
      <input
        className={`${currentClassName} ${validTelClasses}`}
        type={details.type}
        placeholder={details.placeholder}
        value={valueTel}
        onChange={handleTelChange}
      />
    )
    case 'email': return (
      <input
        className={`${currentClassName} ${validEmailClasses}`}
        type={details.type}
        placeholder={details.placeholder}
        value={valueEmail}
        onChange={handleEmailChange}
      />
    )
  }
}
export default Field