import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'
import Image from '../../components/Image/Image'
import { ReactComponent as AppleIcon } from './assets/apple_icon.svg'
import { ReactComponent as GoogleIcon } from './assets/google_icon.svg'

const Download = ({
   data: {
    title, 
    texts, 
    links, 
    image
   },
   refDownload
  }) => {
  
  const className = 'download'

  return (
    <section
      className={className}
      ref={refDownload}
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
          <div className={`${className}__links`}>
            {links.length && (
              links.map((link) => 
                <a className={`${className}__link`} href={link.url} key={link.name}>
                  {link.name === 'apple' 
                    ? <AppleIcon/>
                    : <GoogleIcon/>
                  }
                </a>
              )
            )}    
          </div>               
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

export default Download