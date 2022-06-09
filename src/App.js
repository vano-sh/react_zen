import { useState, useEffect, useRef, useContext } from 'react'
import { API_BASE_URL } from './constans/api'
import Preloader from './layout/Preloader'
import useFetch from './hooks/useFetch'
import Header from './layout/Header'
import Download from './layout/Download'
import Warranty from './layout/Warranty'
import Care from './layout/Care'
import Cashback from './layout/Cashback'
import Clients from './layout/Clients'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import {AppContext} from './AppContext'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  //?!
  const [targetSectionScrolling, setTargetSectionScrolling] = useState(0)
  
  const refHeader = useRef(null)
  const refDownload = useRef(null)
  const refWarranty = useRef(null)
  const refCare = useRef(null)
  const refCashback = useRef(null)
  const refClients = useRef(null)
  
  const {
    lang, 
    isDarkTheme, 
    isModalActive, 
    setIsBurgerActive
  } = useContext(AppContext)
  const {getData} = useFetch(API_BASE_URL)  
  
  useEffect(() => {
    setIsLoading(true)
    getData(`${lang}.json`).then(
      data => setData(data),
      error => console.error(error)
    )
  }, [lang])

  useEffect(() => {
    if (data) {
      const timerId = setTimeout(() => {
        setIsLoading(false)     
      }, 1000);

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [data])

  //?!
  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme)

    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])

  //?!
  useEffect(() => {
    window.scrollTo({
      top: targetSectionScrolling,
      behavior: 'smooth'
    })
  }, [targetSectionScrolling])

  //?!
  useEffect(() => {
    if (isModalActive) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
  }, [isModalActive])    

  //?!
  const handleScrollToSectionClick = (targetName) => {
    const headerHeight = refHeader.current.clientHeight
    setIsBurgerActive(false)

    switch (targetName) {
      case 'download':
        return (
          setTargetSectionScrolling(
            refDownload.current.offsetTop - headerHeight))

      case 'warranty':
        return (
          setTargetSectionScrolling(
            refWarranty.current.offsetTop - headerHeight))    

      case 'care':
        return (
          setTargetSectionScrolling(
            refCare.current.offsetTop - headerHeight))    

      case 'cashback':
        return (
          setTargetSectionScrolling(
            refCashback.current.offsetTop - headerHeight)) 

      case 'clients':
        return (
          setTargetSectionScrolling(
            refClients.current.offsetTop - headerHeight))    

      default:
        return setTargetSectionScrolling(0)
    }
  }

  return (    
    <>
      {isLoading && (
        <Preloader/>
      )}

      {data?.header && (
        <Header
          data={data.header}          
          refHeader={refHeader}          
          onScrollToSectionClick={handleScrollToSectionClick}
        />
      )}

      {data?.download && (
        <Download
          data={data.download}
          refDownload={refDownload}
        />
      )}

      {data?.warranty && (
        <Warranty
          data={data.warranty}
          refWarranty={refWarranty}
        />
      )}

      {data?.care && (
        <Care
          data={data.care}
          refCare={refCare}
        />
      )}

      {data?.cashback && (
        <Cashback 
          data={data.cashback}
          refCashback={refCashback}
        />
      )}

      {data?.clients && (
        <Clients
          data={data.clients}
          refClients={refClients}
        />
      )}

      {data?.footer && (
        <Footer
          data={data.footer}
        />
      )}

      {data?.modal && (
        <Modal
          data={data.modal}
        />
      )}
    </>
  )
}

export default App