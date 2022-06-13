import Title from '../../../../components/Title'
import ColumnItem from './ColumnItem'

const Column = ({ parentClassName, column }) => {

  return (
    <div className={`${parentClassName}__column`}>
      {column?.title && (
        <Title
          parentClassName={parentClassName}
          title={column.title}
        />
      )}

      <ul className={`${parentClassName}__list`}>
        {column?.links.length > 0 && column.links.map((link) => (
          <ColumnItem
            parentClassName={parentClassName}
            link={link}
            key={link.data}
          />
        ))}
      </ul>
    </div>
  )
}

export default Column