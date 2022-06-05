const Text = ({className, text}) => {
  const currentClassName = className 
    ? `${className}__copy` 
    : 'copy'

  return (
    <p className={currentClassName}>
      {text}
    </p>
  )
}

export default Text