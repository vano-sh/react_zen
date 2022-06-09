import { useContext } from 'react'
import {AppContext} from '../../AppContext'
import { ReactComponent as PreloadIcon } from './assets/preloadIcon.svg'

const Preloader = () => {
  const {isDarkTheme} = useContext(AppContext)

  return (
    <div className={isDarkTheme
      ? 'preloader dark'
      : 'preloader'
    }>
      <div className='preloader__image'>
        <PreloadIcon/>
      </div>                 
    </div>
)}

export default Preloader