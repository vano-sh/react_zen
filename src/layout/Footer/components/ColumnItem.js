import {getTypeLink} from '../../../utils/helpers'

const ColumnItem = ({className, link}) => {
  const {url, data} = link
  const currentClassName = className
    ? `${className}__item`
    : 'item'
  const type = getTypeLink(data)

  switch (type) {
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
  // return null  
}

export default ColumnItem