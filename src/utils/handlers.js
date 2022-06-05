// export const scrollToSection = (target) => {
//   const $section = document.querySelector(`[data-name='${target}']`)
//   const $header = document.querySelector('[data-name='header']')

  // const clientPosition = window.pageYOffset
  // const sectionPosition = $section.getBoundingClientRect().top
  // const headerHeight = $header.getBoundingClientRect().height
  // const targetPosition = clientPosition + sectionPosition - headerHeight

  // window.scrollTo({
  //   top: targetPosition,
  //   behavior: 'smooth'
  // })
// }

// export const burgerActive = (isBurgerActive) => {
//   const $menu = document.querySelector('[data-name='menu']')
//   const $burgerBtn = document.querySelector('[data-btn='burger']')

//   if ($menu) {
//     if (isBurgerActive) {
//       $menu.classList.add('active')
//       $burgerBtn.classList.add('active')
//     } else {
//       $menu.classList.remove('active')
//       $burgerBtn.classList.remove('active')
//     }
//   }
// }

// export const darkThemeSet = (isDarkTheme) => {
//   const $header = document.querySelector('[data-name='header']')
//   const $burgerBtn = document.querySelector('[data-btn='burger']')

//   if ($header) {
//     if (isDarkTheme) {
//       document.body.classList.add('dark')
//       $header.classList.add('dark')
//       $burgerBtn.classList.add('dark')
//     } else {
//       document.body.classList.remove('dark')
//       $header.classList.remove('dark')
//       $burgerBtn.classList.remove('dark')
//     }
//   }
// }