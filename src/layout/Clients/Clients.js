import Image from '../../components/Image/Image'

const Clients = ({
  data: {
    lightThemeClients, 
    darkThemeClients
  }, 
  refClients,
  isDarkTheme
}) => {
  const className = 'clients'
  const clientsTheme = isDarkTheme 
    ? darkThemeClients 
    : lightThemeClients

  return (
    <section
      className={className}
      ref={refClients}
    >    
      <div className={`${className}__wrapper`}>
        {clientsTheme.length && (
          clientsTheme.map(client => 
            <Image 
              dataType={className} 
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