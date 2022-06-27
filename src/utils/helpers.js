export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

export const validateName = (value) => {
  const regexp = /[^a-z]+/gi

  return value.length >= 2 && value.search(regexp) === -1
    ? true
    : false
}

export const validateTel = (value) => {
  const regexp = /[^0-9]+/gi

  return value.length >= 10 && value.search(regexp) === -1
    ? true
    : false
}

export const validateEmail = (value) => {
  const regexp = /[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)/gi

  return value.length >= 9 && value.search(regexp) !== -1
    ? true
    : false
}

export const showAnimateRef = (ref) => {
  const element = ref.current
  const screenHeight = window.screen.height
  const elementTopPosition = element.getBoundingClientRect().top

  if ((screenHeight - 20) >= elementTopPosition) {
    element.classList.remove('off')
    element.classList.add('on')
  } else {
    element.classList.remove('on')
    element.classList.add('off')
  }

  // console.log('---------------------------------------')
  // console.log({ screenHeight })
  // console.log({ elementTopPosition })
  // console.log({ element })
}