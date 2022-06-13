import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { ReactComponent as PreloadIcon } from './assets/preloadIcon.svg'
import cslx from 'clsx'

const Preloader = () => {

  const { theme } = useContext(AppContext)

  const className = 'preloader'
  const darkClassName = cslx({ 'dark': theme === 'dark' })

  return (
    <div className={`${className} ${darkClassName}`}>
      <div className={`${className}__image`}>
        <PreloadIcon />
      </div>
    </div>
  )
}

export default Preloader