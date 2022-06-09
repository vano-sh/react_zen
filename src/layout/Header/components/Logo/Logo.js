import { useContext, useEffect } from 'react'
import { AppContext } from '../../../../AppContext'
import { ReactComponent as LogoIcon } from './assets/logo.svg'

const Logo = ({className}) => {
  const {
    isLogoClicked, 
    setIsLogoClicked,
    setIsBurgerActive
  } = useContext(AppContext)

  //?!
  useEffect(() => {       
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })    
  }, [isLogoClicked])

  const handleLogoScrollClick = () => {
    setIsBurgerActive(false) 
    setIsLogoClicked(!isLogoClicked)
  }

  return (
    <button
      className={`${className}__logo`}
      onClick={handleLogoScrollClick}
    >
      <LogoIcon/>
    </button>
  )
}

export default Logo