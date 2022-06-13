const Input = ({
  parentClassName,
  field,
  refInputName,
  value,
  handleOnChange
}) => {

  return (
    <input
      className={parentClassName}
      type={field.type}
      placeholder={field.placeholder}
      ref={refInputName}
      value={value}
      onChange={handleOnChange}
    />
  )
}
export default Input