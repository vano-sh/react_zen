import { useEffect } from "react"

const useProgressBar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const clientRect = document.body.getBoundingClientRect()
      const clientPassed = Math.abs(clientRect.top)
      const clientHeight = document.body.clientHeight
      const screenHeight = window.screen.height
      const clientNotPassed = clientHeight - screenHeight
      const percentPassed = Math.floor(clientPassed / clientNotPassed * 100)
      const $progressBar = document.querySelector('[data-name="progress-bar"]')

      $progressBar.style.width = `${percentPassed}%`
    })

    return () => window.removeEventListener('scroll')
  }, [])

  return null
}

export default useProgressBar