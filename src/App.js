import { useState, useEffect, useRef } from 'react'
import { API_BASE_URL } from './constans/api'
import Preloader from './layout/Preloader'
import Header from './layout/Header'
import Download from './layout/Download'
import Warranty from './layout/Warranty'
import Care from './layout/Care'
import Cashback from './layout/Cashback'
import Clients from './layout/Clients'
import Footer from './layout/Footer'
import Modal from './layout/Modal'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const [isLogoClicked, setIsLogoClicked] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('isDarkTheme') === 'true'
  })
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [targetSectionScrolling, setTargetSectionScrolling] = useState('')
  const [isModalActive, setIsModalActive] = useState(false)

  const refDownload = useRef(null)
  const refWarranty = useRef(null)
  const refCare = useRef(null)
  const refCashback = useRef(null)
  const refClients = useRef(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}.json`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (Object.values(data).length) {
      const timerId = setTimeout(() => {
        setIsLoading(false)     
      }, 1000);

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [data])

  useEffect(() => {
    setIsBurgerActive(false)    
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })    
  }, [isLogoClicked])

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme)

    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])  

  useEffect(() => {
    
  }, [isBurgerActive])

  useEffect(() => {
  }, [targetSectionScrolling])

  useEffect(() => {
    if (isModalActive) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
  }, [isModalActive])  

  const handleLogoScrollClick = () => {
    setIsLogoClicked(!isLogoClicked)
  }

  const handleThemeChangeClick = () => {
    setIsDarkTheme(!isDarkTheme)    
  }
  
  const handleBurgerActiveClick = () => {
    setIsBurgerActive(!isBurgerActive)
  }

  const handleScrollToSectionClick = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
    setIsBurgerActive(true)
  }

  const handleModalButtonActiveClick = () => {
    setIsModalActive(true)
  }

  const handleModalCloseClick = () => {
    setIsModalActive(false)
  }

  return (
    <>
      {isLoading && (
        <Preloader/>
      )}

      {data.header && (
        <Header
          data={data.header}
          isDarkTheme={isDarkTheme}
          isBurgerActive={isBurgerActive}
          refDownload={refDownload}
          refWarranty={refWarranty}
          refCare={refCare}
          refCashback={refCashback}
          refClients={refClients}
          onLogoClick={handleLogoScrollClick}
          onThemeClick={handleThemeChangeClick}
          onBurgerClick={handleBurgerActiveClick}
          onScrollToSectionClick={handleScrollToSectionClick}
        />
      )}

      {data.download && (
        <Download
          data={data.download}
          refDownload={refDownload}
        />
      )}

      {data.warranty && (
        <Warranty
          data={data.warranty}
          refWarranty={refWarranty}
        />
      )}

      {data.care && (
        <Care
          data={data.care}
          refCare={refCare}
        />
      )}

      {data.cashback && (
        <Cashback 
          data={data.cashback}
          refCashback={refCashback}
          onModalButtonActiveClick={handleModalButtonActiveClick}
        />
      )}

      {data.clients && (
        <Clients
          data={data.clients}
          refClients={refClients}
          isDarkTheme= {isDarkTheme}
        />
      )}

      {data.footer && (
        <Footer
          className='footer'
          data={data.footer}
        />
      )}

      {data.modal && (
        <Modal
          className='modal'
          data={data.modal}
          isModalActive={isModalActive}
          onModalCloseClick={handleModalCloseClick}
        />
      )}
    </>
  )
}

export default App