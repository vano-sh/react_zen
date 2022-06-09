import Title from '../../components/Title'
import Text from '../../components/Text'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

const Cashback = ({
  data: {
    title, 
    texts, 
    orderBtn
  }, 
  refCashback
}) => {
  const className = 'cashback'

  const {setIsModalActive} = useContext(AppContext)
  
  const handleModalButtonActiveClick = () => {
    setIsModalActive(true)
  }

  return (
    <section 
      className={className}
      ref={refCashback}
    >      
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && (
            <Title 
              className={className} 
              title={title}                  
            />
          )}
          {texts.length > 0 && (
            texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}/>
            )
          )}
          <button 
            className={`${className}__btn`}
            onClick={handleModalButtonActiveClick}
          >
            {orderBtn.data}
          </button>
        </div>
      </div>
    </section>
  )
}
export default Cashback