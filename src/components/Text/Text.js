const Text = ({ parentClassName, text }) => {
  return (
    <p className={`${parentClassName}__copy`} >
      {text}
    </p>
  )
}

export default Text