import { useEffect } from "react"

const useBodyHidden = (prop) => {
  useEffect(() => {
    if (prop) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
  }, [prop])

  return null
}

export default useBodyHidden