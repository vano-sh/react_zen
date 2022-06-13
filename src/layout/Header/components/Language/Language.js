import { AppContext } from '../../../../AppContext'
import { useContext } from 'react'

const Language = ({ parentClassName }) => {
  const { lang, setLang, setIsLoading } = useContext(AppContext)

  const handleLangChange = (event) => {
    setIsLoading(true)
    localStorage.setItem('lang', event.target.value)
    setLang(event.target.value)
  }

  return (
    <label
      className={`${parentClassName}__lang`}
    >
      <select
        value={lang}
        onChange={handleLangChange}
      >
        <option value={'en'}>EN</option>
        <option value={'ru'}>RU</option>
      </select>
    </label>
  )
}

export default Language