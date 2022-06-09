import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import Image from '../../components/Image'

const Clients = ({
  data: {
    lightThemeClients, 
    darkThemeClients
  }, 
  refClients
}) => {
  const className = 'clients'

  const {isDarkTheme} = useContext(AppContext)

  const clientsTheme = isDarkTheme 
    ? darkThemeClients 
    : lightThemeClients

  return (
    <section
      className={className}
      ref={refClients}
    >    
      <div className={`${className}__wrapper`}>
        {clientsTheme.length > 0 && (
          clientsTheme.map(client => 
            <Image 
              image={client} 
              key={client.source}
            />
          )
        )}
      </div>
    </section>      
  )
}

export default Clients