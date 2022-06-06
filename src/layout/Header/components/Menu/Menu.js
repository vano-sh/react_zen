import MenuItem from './MenuItem'

const Menu = ({
  className,
  menuItems,
  isBurgerActive,
  onScrollToSectionClick
}) => {

  const currentClassName = `${className}__menu`

  return (
    <ul className={isBurgerActive 
      ? `${currentClassName} active`
      : currentClassName
    }>      
      {menuItems.length && 
        menuItems.map(item => 
          <MenuItem 
            key={item.target}
            className={className} 
            item={item}
            onScrollToSectionClick={onScrollToSectionClick}
          />
      )} 
    </ul>
  )
}

export default Menu