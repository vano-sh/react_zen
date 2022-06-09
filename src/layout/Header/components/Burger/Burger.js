import { useContext } from "react"
import { AppContext } from "../../../../AppContext"

const Burger = ({
  className,
}) => {
  const currentClassName = `${className}__burger`
  
  const {
    isBurgerActive, 
    setIsBurgerActive
  } = useContext(AppContext)

  const handleBurgerActiveClick = () => {
    setIsBurgerActive(!isBurgerActive)
  }

  return (
    <button
      className={isBurgerActive 
        ? `${currentClassName} active`
        : currentClassName
      }
      onClick={handleBurgerActiveClick}
    >
      <span></span>
    </button>
  )
}

export default Burger