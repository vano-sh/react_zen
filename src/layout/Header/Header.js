import Logo from './components/Logo'
import Menu from './components/Menu'
import Theme from './components/Theme'
import Burger from './components/Burger'

const Header = ({
  data, 
  isDarkTheme, 
  isBurgerActive,
  refHeader,
  onLogoClick, 
  onThemeClick, 
  onBurgerClick, 
  onScrollToSectionClick
}) => {
  const {
    navigation: {
      menus: menuItems
    }
  } = data

  const className = 'header'

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
            onLogoClick={onLogoClick}
          />

          <Menu 
            className={className} 
            menuItems={menuItems}
            isBurgerActive={isBurgerActive}
            onScrollToSectionClick={onScrollToSectionClick}              
            />
        </nav>

        <Theme 
          className={className} 
          isDarkTheme={isDarkTheme} 
          onThemeClick={onThemeClick}
        />        

        <Burger 
          className={className}
          isBurgerActive={isBurgerActive}
          onBurgerClick={onBurgerClick}
        />
      </div>
    </header>
  )
}

export default Header