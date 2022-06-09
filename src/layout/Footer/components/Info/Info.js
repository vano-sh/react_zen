import Text from '../../../../components/Text'
import {ReactComponent as LogoFooterIcon} from './assets/logo_footer_icon.svg'
import {ReactComponent as CopyrightIcon} from './assets/copyright_icon.svg'

const Info = ({
  className, 
  info: {
    texts,
    copyright
  }
}) => {
  const currentClassName = className
    ? `${className}__info`
    : 'info'
  const childClassName = className
    ? className
    : currentClassName

  return (
    <div className={currentClassName}>
      <div className={`${childClassName}__body`}>
        <div>
          <LogoFooterIcon/>
        </div>
        <div className={`${childClassName}__copies`}>
          {texts.length > 0 &&
            texts.map(text => 
              <Text className={childClassName} text={text} key={text}/>
            )}
        </div>  
      </div>
      <a 
        className={`${childClassName}__copyright`} 
        href={copyright.url}
      >
        <CopyrightIcon/>
      </a>
    </div>
  )
}

export default Info