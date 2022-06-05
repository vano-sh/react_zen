import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'
import Image from '../../components/Image/Image'

const Warranty = ({
   data: {
    title, 
    texts, 
    image
   },
   refWarranty
}) => {

  const className = 'warranty'

  return (
    <section
      className={className}
      ref={refWarranty}
    >
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && (
            <Title 
              className={className} 
              title={title}                  
            /> 
          )}
          {texts.length && (
            texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}                    
              />
            )
          )}                 
        </div>
        <div className={`${className}__image`}>
          {image && (
            <Image 
              dataType={className} 
              image={image}                  
            />
          )}
        </div>
      </div>      
    </section>
  )
}

export default Warranty