import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'

const Cashback = ({
  data: {
    title, 
    texts, 
    orderBtn
  }, 
  refCashback,
  onModalButtonActiveClick
}) => {
  const className = 'cashback'

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
          {texts.length && (
            texts.map(text => 
              <Text 
                className={className} 
                text={text} 
                key={text}/>
            )
          )}
          <button 
            className={`${className}__btn`}
            onClick={onModalButtonActiveClick}
          >
            {orderBtn.data}
          </button>
        </div>
      </div>
    </section>
  )
}
export default Cashback