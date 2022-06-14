import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') ?? 'en'
  })
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light'
  })
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  const toogleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const value = {
    isLoading,
    setIsLoading,
    lang, setLang,
    theme, toogleTheme,
    isBurgerActive,
    setIsBurgerActive,
    isModalActive,
    setIsModalActive,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }