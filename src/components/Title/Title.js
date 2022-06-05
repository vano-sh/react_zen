const Title = ({className, title}) => {
  const currentClassName = className 
    ? `${className}__title` 
    : 'title'

  switch (title.priority) {
    case '6': return (
      <h6 className={currentClassName}>
        {title.data}
      </h6>
    )
    case '5': return (
      <h5 className={currentClassName}>
        {title.data}
      </h5>
    )
    case '4': return (
      <h4 className={currentClassName}>
        {title.data}
      </h4>
    )
    case '3': return (
      <h3 className={currentClassName}>
        {title.data}
      </h3>
    )
    case '2': return (
      <h2 className={currentClassName}>
        {title.data}
      </h2>
    )
    default: return (
      <h1 className={currentClassName}>
        {title.data}
      </h1>
    )
  }
}

export default Title