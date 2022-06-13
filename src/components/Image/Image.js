const Image = ({ image }) => {
  return (
    <img src={image.source} alt={image.alternate} />
  )
}
export default Image