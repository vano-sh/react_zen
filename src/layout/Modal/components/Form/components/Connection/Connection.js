const Connection = ({
  parentClassName,
  details,
  valueConnection,
  handleConnectionChange
}) => {

  const currentClassName = `${parentClassName}__select`

  return (
    <label
      className={valueConnection
        ? `${currentClassName} success`
        : currentClassName
      }
    >
      {!valueConnection && <span>{details.label}</span>}
      <select
        value={valueConnection}
        onChange={handleConnectionChange}
      >
        <option></option>
        {details?.options.length > 0 && (
          details.options.map(option =>
            <option
              value={option.value}
              key={option.value}
            >
              {option.text}
            </option>
          ))}
      </select>
    </label>
  )
}

export default Connection