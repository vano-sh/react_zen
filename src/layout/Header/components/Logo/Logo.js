import { AppContext } from '../../../../AppContext'
import { useContext, useEffect, useState } from 'react'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import { scrollToTop } from '../../../../utils/helpers'

const Logo = ({ parentClassName }) => {

  const { setIsBurgerActive } = useContext(AppContext)

  const [isLogoClicked, setIsLogoClicked] = useState(null)

  useEffect(() => {
    if (isLogoClicked) {
      scrollToTop()
      setIsLogoClicked(false)
    }
  }, [isLogoClicked])

  const handleButtonClick = () => {
    setIsBurgerActive(false)
    setIsLogoClicked(true)
  }

  return (
    <button
      className={`${parentClassName}__logo`}
      onClick={handleButtonClick}
    >
      <LogoIcon />
    </button>
  )
}

export default Logo