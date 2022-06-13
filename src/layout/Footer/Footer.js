import Column from './components/Column'
import Info from './components/Info'

const Footer = ({ data }) => {

  const className = 'footer'

  return (
    <footer className={className}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__columns`}>
          {data.columns.length > 0 && data.columns.map(column =>
            <Column
              parentClassName={className}
              column={column}
              key={column.title.data}
            />
          )}
        </div>

        <Info parentClassName={className} info={data.info} />
        
      </div>
    </footer>
  )
}

export default Footer