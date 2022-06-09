const Input = ({
  className, 
  field,
  refInputName,
  value,
  handleOnChange
}) => {
  return (
    <input
      className={className} 
      type={field.type}
      placeholder={field.placeholder}
      ref={refInputName}
      value={value}
      onChange={handleOnChange}
    />
  )
}
export default Input