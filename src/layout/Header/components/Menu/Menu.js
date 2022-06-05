import MenuItem from './MenuItem'

const Menu = ({
  className,
  menuItems,
  isBurgerActive,
  refDownload,
  refWarranty,
  refCare,
  refCashback,
  refClients,
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
            refDownload={refDownload}
            refWarranty={refWarranty}
            refCare={refCare}
            refCashback={refCashback}
            refClients={refClients}
            onScrollToSectionClick={onScrollToSectionClick}
          />
      )} 
    </ul>
  )
}

export default Menu