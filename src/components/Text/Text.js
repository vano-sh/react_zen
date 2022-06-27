import { useRef } from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Text = ({ parentClassName, children }) => {

  const refText = useRef(null)

  useAnimateRef(refText)

  return (
    <p className={`${parentClassName}__copy`} ref={refText} >
      {children}
    </p>
  )
}

export default Text