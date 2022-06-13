import { AppContext } from '../../../../AppContext'
import { useContext } from 'react'
import clsx from 'clsx'

const Burger = ({ parentClassName }) => {

  const { isBurgerActive, setIsBurgerActive } = useContext(AppContext)

  const activeClassName = clsx({ 'active': isBurgerActive })

  const handleButtonClick = () => {
    setIsBurgerActive(!isBurgerActive)
  }

  return (
    <button
      className={`${parentClassName}__burger ${activeClassName}`}
      onClick={handleButtonClick}
    >
      <span></span>
    </button>
  )
}

export default Burger