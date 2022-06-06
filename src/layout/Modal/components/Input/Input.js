const Input = ({
  className, 
  field,
  value,
  handleOnChange
}) => {
  return (
    <input
      className={`${className}__input`} 
      type={field.type}
      placeholder={field.placeholder}
      value={value}
      onChange={handleOnChange}
    />
  )
}
export default Input