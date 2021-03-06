import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import Title from '../../components/Title'
import Text from '../../components/Text'

const Cashback = ({ data }) => {

  const className = 'cashback'

  const { setIsModalActive } = useContext(AppContext)

  const handleModalButtonActiveClick = () => {
    setIsModalActive(true)
  }

  return (
    <section
      className={className}
      data-name={data.name}
    >
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {data?.title && (
            <Title
              parentClassName={className}
              size={data.title.priority}
            >
              {data.title.data}
            </Title>
          )}
          {data?.texts.length > 0 && data.texts.map((text) =>
            <Text key={text} parentClassName={className} >
              {text}
            </Text>
          )}
          <button
            className={`${className}__btn`}
            onClick={handleModalButtonActiveClick}
          >
            {data?.orderBtn.data}
          </button>
        </div>
      </div>
    </section>
  )
}
export default Cashback