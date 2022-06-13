const MenuItem = ({
  parentClassName,
  item,
  onScrollToSectionClick
}) => {
  return (
    <li className={`${parentClassName}__item`}>
      <button
        data-btn={item.target}
        onClick={() => onScrollToSectionClick(item.target)}
      >
        <span>{item.data}</span>
      </button>
    </li>
  )
}

export default MenuItem