import { useEffect } from "react"

const useToogleTheme = (theme) => {
  useEffect(() => {
    localStorage.setItem('theme', theme)

    theme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark')
  }, [theme])

  return null
}

export default useToogleTheme