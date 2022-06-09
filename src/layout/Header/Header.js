import Logo from './components/Logo'
import Menu from './components/Menu'
import Theme from './components/Theme'
import Burger from './components/Burger'
import Language from './components/Language'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

const Header = ({
  data: {
    navigation: {
      menus: menuItems
    }
  },
  refHeader,
  onScrollToSectionClick
}) => {
  const className = 'header'

  const {isDarkTheme} = useContext(AppContext)

  return (
    <header
      className={isDarkTheme 
        ? `${className} dark`
        : className  
      }
      ref={refHeader} 
    >
      <div className={`${className}__wrapper`}>
        <nav className={`${className}__nav`}>

          <Logo 
            className={className} 
          />

          <Menu 
            className={className} 
            menuItems={menuItems}
            onScrollToSectionClick={onScrollToSectionClick}     //?!         
            />
        </nav>

        <Language
          className={className}
        />

        <Theme 
          className={className}
        />        

        <Burger 
          className={className}
        />
      </div>
    </header>
  )
}

export default Header