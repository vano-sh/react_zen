import { ReactComponent as PreloadIcon } from './assets/preloadIcon.svg'

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='preloader__image'>
        <PreloadIcon/>
      </div>                 
    </div>
)}

export default Preloader