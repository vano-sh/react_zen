import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import Image from '../../components/Image'

const Clients = ({ data }) => {

  const className = 'clients'

  const { theme } = useContext(AppContext)

  const clients = theme === 'light'
    ? data.lightThemeClients
    : data.darkThemeClients

  return (
    <section
      className={className}
      data-name={data.name}
    >
      <div className={`${className}__wrapper`}>
        {clients.length > 0 && clients.map((client) =>
          <Image image={client} key={client.source} />
        )}
      </div>
    </section>
  )
}

export default Clients