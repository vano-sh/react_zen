import { useRef } from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Title = ({ size, parentClassName, children }) => {

  const titleRef = useRef(null)

  useAnimateRef(titleRef)

  switch (size) {
    case 6: return (
      <h6 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h6>
    )

    case 5: return (
      <h5 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h5>
    )

    case 4: return (
      <h4 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h4>
    )

    case 3: return (
      <h3 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h3>
    )

    case 2: return (
      <h2 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h2>
    )

    default: return (
      <h1 className={`${parentClassName}__title`} ref={titleRef}>
        {children}
      </h1>
    )
  }
}

export default Title

/*
switch (title.priority) {
    case '6': return (
      <h6 className={className}>
        {children}
      </h6>
    )
    case '5': return (
      <h5 className={className}>
        {children}
      </h5>
    )
    case '4': return (
      <h4 className={className}>
        {children}
      </h4>
    )
    case '3': return (
      <h3 className={className}>
        {children}
      </h3>
    )
    case '2': return (
      <h2 className={className}>
        {children}
      </h2>
    )
    default: return (
      <h1 className={className}>
        {children}
      </h1>
    )
  }
*/