const MenuItem = ({
  className, 
  item,
  refDownload,
  refWarranty,
  refCare,
  refCashback,
  refClients,
  onScrollToSectionClick
}) => {
  return (
    <li className={`${className}__item`}>
      <button
        onClick={() => onScrollToSectionClick(refCashback)}
      >
        <span>{item.data}</span>
      </button>
    </li>
  )
}

export default MenuItem