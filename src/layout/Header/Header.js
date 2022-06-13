import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import clsx from 'clsx'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Theme from './components/Theme'
import Burger from './components/Burger'
import Language from './components/Language'

const Header = ({ data }) => {

  const { theme } = useContext(AppContext)

  const className = 'header'
  const darkClassName = clsx({ 'dark': theme === 'dark' })

  return (
    <header
      className={`${className} ${darkClassName}`}
      data-name={data.name}
    >
      <div className={`${className}__wrapper`}>
        <nav className={`${className}__nav`}>

          <Logo parentClassName={className} />

          <Menu
            parentClassName={className}
            menuItems={data.navigation.menus}
          />
        </nav>

        <Language parentClassName={className} />

        <Theme parentClassName={className} />

        <Burger parentClassName={className} />
      </div>
    </header>
  )
}

export default Header