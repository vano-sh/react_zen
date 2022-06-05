import { validateForm } from '../../../../utils/helpers'

const Input = ({
  className, 
  field,
  order,
  handleOnChange
}) => {
  const validateData = field.type === 'text'
    ? order.name
    : order[`${field.type}`]

  return (
    <input
      className={validateForm(validateData, field.type)
        ? `${className}__input success`
        : `${className}__input error`
      } 
      type={field.type}
      placeholder={field.placeholder}
      name={field.type === 'text'
        ? 'name'
        : field.type
      }
      value={field.type === 'text'
        ? order.name
        : order[`${field.type}`]
      }
      onChange={handleOnChange}
    />
  )
}
export default Input