import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'
import { ReactComponent as AppleIcon } from './assets/apple_icon.svg'
import { ReactComponent as GoogleIcon } from './assets/google_icon.svg'

const Download = ({ data }) => {
  
  const className = 'download'

  return (
    <section
      className={className}
      data-name={data.name}
    >
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {data?.title && (
            <Title
              parentClassName={className}
              title={data.title}
            />
          )}
          {data?.texts.length > 0 && (data.texts.map(text =>
            <Text
              parentClassName={className}
              text={text}
              key={text}
            />
          ))}
          <div className={`${className}__links`}>
            {data?.links.length > 0 && (data.links.map((link) =>
              <a
                className={`${className}__link`}
                href={link.url}
                key={link.name}
              >
                {link.name === 'apple'
                  ? <AppleIcon />
                  : <GoogleIcon />
                }
              </a>
            ))}
          </div>
        </div>
        <div className={`${className}__image`}>
          {data?.image && <Image image={data.image} />}
        </div>
      </div>
    </section>
  )
}

export default Download