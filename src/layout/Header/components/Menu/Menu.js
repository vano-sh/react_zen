import { AppContext } from '../../../../AppContext'
import { useContext } from 'react'
import MenuItem from './MenuItem'

const Menu = ({
  parentClassName,
  menuItems,
}) => {
  const currentClassName = `${parentClassName}__menu`

  const { isBurgerActive } = useContext(AppContext)

  return (
    <ul className={isBurgerActive
      ? `${currentClassName} active`
      : currentClassName
    }>
      {menuItems?.length > 0 && menuItems.map(item => (
        <MenuItem
          key={item.target}
          parentClassName={parentClassName}
          item={item}
        />
      ))}
    </ul>
  )
}

export default Menu