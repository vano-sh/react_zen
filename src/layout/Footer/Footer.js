import Column from './components/Column'
import Info from './components/Info'

const Footer = ({className, data}) => {
  const {
    columns,
    info
  } = data

  return (
    <footer className={className}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__columns`}>
          {columns.length && (
            columns.map(column => 
              <Column
                className={className}
                column={column}
                key={column.title.data}
              />
            )            
          )}
        </div>
        <Info
          className={className}
          info={info}
        />    
      </div>
    </footer>
  )
}

export default Footer