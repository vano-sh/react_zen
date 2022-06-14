import useProgressBar from '../../hooks/useProgressBar'

const ProgressBar = () => {

  useProgressBar()

  return (
    <div
      data-name="progress-bar"
      className="progress-bar"
    ></div>
  )
}

export default ProgressBar