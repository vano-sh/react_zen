import Text from '../../../../components/Text'
import { ReactComponent as LogoFooterIcon } from './assets/logo_footer_icon.svg'
import { ReactComponent as CopyrightIcon } from './assets/copyright_icon.svg'

const Info = ({ parentClassName, info }) => {

  return (
    <div className={`${parentClassName}__info`}>
      <div className={`${parentClassName}__body`}>
        <div>
          <LogoFooterIcon />
        </div>
        <div className={`${parentClassName}__copies`}>
          {info?.texts.length > 0 && info.texts.map((text) =>
            <Text key={text} parentClassName={parentClassName} >
              {text}
            </Text>
          )}
        </div>
      </div>
      <a
        className={`${parentClassName}__copyright`}
        href={info.copyright.url}
      >
        <CopyrightIcon />
      </a>
    </div>
  )
}

export default Info