import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = props => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') ?? 'en'
  })  
  const [isLogoClicked, setIsLogoClicked] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('isDarkTheme') === 'true'
  })
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  const value = {
    lang,
    isLogoClicked,
    isDarkTheme,
    isBurgerActive,
    isModalActive,
    setLang,
    setIsLogoClicked,
    setIsDarkTheme,
    setIsBurgerActive,
    setIsModalActive,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}

