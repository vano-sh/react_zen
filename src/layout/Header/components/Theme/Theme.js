import { useContext } from 'react'
import { AppContext } from '../../../../AppContext'
import { ReactComponent as MoonIcon } from './assets/moon.svg'
import { ReactComponent as SunIcon } from './assets/sun.svg'

const Theme = ({className}) => {
  const {
    isDarkTheme, 
    setIsDarkTheme
  } = useContext(AppContext)

  const handleThemeChangeClick = () => {
    setIsDarkTheme(!isDarkTheme)    
  }
  return (
    <button
      className={`${className}__theme`}
      onClick={handleThemeChangeClick}
    >
      {isDarkTheme         
        ? <SunIcon/> 
        : <MoonIcon/>
      }
    </button>
  )
}

export default Theme