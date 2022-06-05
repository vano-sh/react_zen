import Logo from './components/Logo'
import Menu from './components/Menu'
import Theme from './components/Theme'
import Burger from './components/Burger'

const Header = ({
  data, 
  isDarkTheme, 
  isBurgerActive,
  refDownload,
  refWarranty,
  refCare,
  refCashback,
  refClients,
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
            refDownload={refDownload}
            refWarranty={refWarranty}
            refCare={refCare}
            refCashback={refCashback}
            refClients={refClients}
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