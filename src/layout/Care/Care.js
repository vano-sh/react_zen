import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'

const Care = ({ data }) => {

  const className = 'care'

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
              title={data.title} />
          )}
          {data?.texts.length > 0 && data.texts.map(text =>
            <Text
              parentClassName={className}
              text={text}
              key={text}
            />
          )}
        </div>
        <div className={`${className}__image`}>
          {data?.image && <Image image={data.image} />}
        </div>
      </div>
    </section>
  )
}

export default Care