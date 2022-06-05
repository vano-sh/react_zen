import { ReactComponent as MoonIcon } from './assets/moon.svg'
import { ReactComponent as SunIcon } from './assets/sun.svg'

const Theme = ({
  className, 
  isDarkTheme, 
  onThemeClick
}) => {
  return (
    <button
      className={`${className}__theme`}
      onClick={onThemeClick}
    >
      {isDarkTheme         
        ? <SunIcon/> 
        : <MoonIcon/>
      }
    </button>
  )
}

export default Theme