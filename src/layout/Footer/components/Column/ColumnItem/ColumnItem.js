const ColumnItem = ({
  className, 
  link: {
    url,
    data
  }
}) => {
  const currentClassName = className
    ? `${className}__item`
    : 'item'

  const getTypeLink = (link) => {
    if (link.includes('.svg') 
      || link.includes('.png') 
      || link.includes('.jpg')) {
        return 'image'
    } else if (link.search(/[a-z]*@[a-z]*\.(com|ru)/gy) !== -1) {
      return 'email'
    } else {
      return 'text'
    }
  }

  switch (getTypeLink(data)) {
    case 'email':
      return (
        <li className={currentClassName}>
          <a href={`mailto:${url}`}>{data}</a>
        </li>
      )
    case 'image':
      return (
        <li className={currentClassName}>
          <a href={url}>
            <img src={data} alt={data}/>
          </a>
        </li>
      )     
    default:
      return (
        <li className={currentClassName}>
          <a href={url}>{data}</a>
        </li>
      )
  }
}

export default ColumnItem