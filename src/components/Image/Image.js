const Image = ({dataType, image}) => {
  const {alternate, source} = image

  return  (
    <img 
      src={source} 
      alt={alternate}        
    />
  )
}
export default Image