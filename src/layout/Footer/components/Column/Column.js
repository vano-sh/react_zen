import Title from '../../../../components/Title'
import ColumnItem from './ColumnItem'

const Column = ({
  className, 
  column: {
    title,
    links
  }
}) => {
  const currentClassName = className
    ? `${className}__column`
    : 'column'
  const childClassName = className
    ? className
    : currentClassName

  return (
    <div className={currentClassName}>
      {title && (
        <Title
          className={className}
          title={title}
        />
      )}
      <ul className={`${childClassName}__list`}>
        {links.length > 0 && (
          links.map(link => 
            <ColumnItem
              className={childClassName}
              link={link}
              key={link.data}
            />
          )
        )}
      </ul>
    </div>
  )
}

export default Column