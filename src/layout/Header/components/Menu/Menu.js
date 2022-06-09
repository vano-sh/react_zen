import { useContext } from 'react'
import { AppContext } from '../../../../AppContext'
import MenuItem from './MenuItem'

const Menu = ({
  className,
  menuItems,
  onScrollToSectionClick
}) => {
  const currentClassName = `${className}__menu`

  const {isBurgerActive} = useContext(AppContext)

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
            onScrollToSectionClick={onScrollToSectionClick} //?!
          />
      )} 
    </ul>
  )
}

export default Menu