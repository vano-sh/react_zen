import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'

const Warranty = ({data}) => {
  const className = 'warranty'

  return (
    <section
      className={className}
      data-name={data.name}
    >
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {data.title && (
            <Title 
              className={className} 
              title={data.title}                  
            /> 
          )}
          {data.texts.length > 0 && (
            data.texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}                    
              />
            )
          )}                 
        </div>
        <div className={`${className}__image`}>
          {data.image && (
            <Image 
              image={data.image}                  
            />
          )}
        </div>
      </div>      
    </section>
  )
}

export default Warranty