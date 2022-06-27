const Success = ({ children, parentClassName }) => {
  return (
    <div className={`${parentClassName}__success`}>
      {children}
    </div>
  )
}

export default Success