const Burger = ({
  className, 
  isBurgerActive,
  onBurgerClick
}) => {

  const currentClassName = `${className}__burger`

  return (
    <button
      className={isBurgerActive 
        ? `${currentClassName} active`
        : currentClassName
      }
      onClick={onBurgerClick}
    >
      <span></span>
    </button>
  )
}

export default Burger