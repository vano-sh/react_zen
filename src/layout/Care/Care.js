import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'

const Care = ({
  data: {
    title, 
    texts, 
    image
  },
  refCare
}) => {
  const className = 'care'

  return (
    <section 
      className={className}
      ref={refCare}
    >      
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && (
            <Title 
              className={className} 
              title={title}/> 
          )}
          {texts.length > 0 && (
            texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}/>
            )
          )}                 
        </div>
        <div className={`${className}__image`}>
          {image && (
            <Image 
              image={image}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Care