const MenuItem = ({ parentClassName, item }) => {

  const handleButtonClick = (targetName) => {
    const $section = document.querySelector(`[data-name="${targetName}"]`)
    const $header = document.querySelector('[data-name="header"]')

    const clientPosition = window.pageYOffset
    const sectionPosition = $section.getBoundingClientRect().top
    const headerHeight = $header.getBoundingClientRect().height
    const targetPosition = clientPosition + sectionPosition - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <li className={`${parentClassName}__item`}>
      <button
        data-btn={item.target}
        onClick={() => handleButtonClick(item.target)}
      >
        <span>{item.data}</span>
      </button>
    </li>
  )
}

export default MenuItem