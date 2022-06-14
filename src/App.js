/* eslint-disable react-hooks/exhaustive-deps */
import { AppContext } from './AppContext'
import { useState, useEffect, useContext } from 'react'
import { API_BASE_URL } from './constans/api'
import useFetch from './hooks/useFetch'
import Preloader from './layout/Preloader'
import Header from './layout/Header'
import Download from './layout/Download'
import Warranty from './layout/Warranty'
import Care from './layout/Care'
import Cashback from './layout/Cashback'
import Clients from './layout/Clients'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import ProgressBar from './layout/ProgressBar/ProgressBar'

const App = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const { isLoading, setIsLoading, lang } = useContext(AppContext)
  const { getData } = useFetch(API_BASE_URL)

  useEffect(() => {
    getData(`${lang}.json`).then(
      (data) => setData(data),
      (error) => setError(error)
    )
  }, [lang])

  useEffect(() => {
    if (data) {
      const timerId = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => clearTimeout(timerId)
    }
  }, [data])

  useEffect(() => {
    error && console.error(error)
  }, [error])

  return (
    <>
      <ProgressBar />

      {isLoading && <Preloader />}

      {data?.header && <Header data={data.header} />}

      {data?.download && <Download data={data.download} />}

      {data?.warranty && <Warranty data={data.warranty} />}

      {data?.care && <Care data={data.care} />}

      {data?.cashback && <Cashback data={data.cashback} />}

      {data?.clients && <Clients data={data.clients} />}

      {data?.footer && <Footer data={data.footer} />}

      {data?.modal && <Modal data={data.modal} />}
    </>
  )
}

export default App