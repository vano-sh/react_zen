import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'
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
          {texts.length > 0 && (
            texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}                  
              />
            )
          )}
          <div className={`${className}__links`}>
            {links.length > 0 && (
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
              image={image}                  
            />
          )}
        </div>
      </div>      
    </section>
  )
}

export default Download