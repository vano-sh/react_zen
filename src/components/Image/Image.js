import { useRef } from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Image = ({ image }) => {

  const refImage = useRef(null)

  useAnimateRef(refImage)

  return (
    <img src={image.source} alt={image.alternate} ref={refImage} />
  )
}
export default Image