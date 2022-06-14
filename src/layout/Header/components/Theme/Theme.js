import { useContext } from 'react'
import { AppContext } from '../../../../AppContext'
import useToogleTheme from '../../../../hooks/useToogleTheme'
import { ReactComponent as MoonIcon } from './assets/moon.svg'
import { ReactComponent as SunIcon } from './assets/sun.svg'


const Theme = ({ parentClassName }) => {

  const { theme, toogleTheme } = useContext(AppContext)

  useToogleTheme(theme)

  return (
    <button
      className={`${parentClassName}__theme`}
      onClick={() => toogleTheme()}
    >
      {theme === 'light'
        ? <MoonIcon />
        : <SunIcon />
      }
    </button>
  )
}

export default Theme