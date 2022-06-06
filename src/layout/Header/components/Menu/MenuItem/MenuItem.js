const MenuItem = ({
  className, 
  item,
  onScrollToSectionClick
}) => {
  return (
    <li className={`${className}__item`}>
      <button
        onClick={() => onScrollToSectionClick(item.target)}
      >
        <span>{item.data}</span>
      </button>
    </li>
  )
}

export default MenuItem