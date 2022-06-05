import { ReactComponent as LogoIcon } from './assets/logo.svg'

const Logo = ({className, onLogoClick}) => {
  return (
    <button
      className={`${className}__logo`}
      onClick={onLogoClick}
    >
      <LogoIcon/>
    </button>
  )
}

export default Logo