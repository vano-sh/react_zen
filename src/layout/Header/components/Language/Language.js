import {AppContext} from '../../../../AppContext'
import { useContext } from 'react'

const Language = ({className}) => {
  const {
    lang, 
    setLang
  } = useContext(AppContext)

  const handleLangChange = (event) => {
    localStorage.setItem('lang', event.target.value)
    setLang(event.target.value)
  }

  return (
    <label
      className={`${className}__lang`}
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