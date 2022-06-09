const Title = ({className, title, refTitle}) => {
  const currentClassName = className 
    ? `${className}__title` 
    : 'title'

  switch (title.priority) {
    case '6': return (
      <h6 className={currentClassName} ref={refTitle}>
        {title.data}
      </h6>
    )
    case '5': return (
      <h5 className={currentClassName} ref={refTitle}>
        {title.data}
      </h5>
    )
    case '4': return (
      <h4 className={currentClassName} ref={refTitle}>
        {title.data}
      </h4>
    )
    case '3': return (
      <h3 className={currentClassName} ref={refTitle}>
        {title.data}
      </h3>
    )
    case '2': return (
      <h2 className={currentClassName} ref={refTitle}>
        {title.data}
      </h2>
    )
    default: return (
      <h1 className={currentClassName} ref={refTitle}>
        {title.data}
      </h1>
    )
  }
}

export default Title