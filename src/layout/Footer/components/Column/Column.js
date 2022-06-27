import Title from '../../../../components/Title'
import ColumnItem from './ColumnItem'

const Column = ({ parentClassName, column }) => {

  return (
    <div className={`${parentClassName}__column`}>
      {column?.title && (
        <Title
          parentClassName={parentClassName}
          size={column.title.priority}
        >
          {column.title.data}
        </Title>
      )}

      <ul className={`${parentClassName}__list`}>
        {column?.links.length > 0 && column.links.map((link) => 
          <ColumnItem
            key={link.data}
            parentClassName={parentClassName}
            link={link}
          />
        )}
      </ul>
    </div>
  )
}

export default Column