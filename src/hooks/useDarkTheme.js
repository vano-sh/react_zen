import { useEffect } from "react"

const useDarkTheme = (isDarkTheme) => {
  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme)

    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])

  return null
}

export default useDarkTheme