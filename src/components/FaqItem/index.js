// Write your code here.
import './index.css'

const FaqItem = props => {
  const {listItem, state, activeId, clickBtn} = props
  const {id, questionText, answerText} = listItem

  let isTrue = false
  if (activeId === id) {
    const {isActive} = state
    isTrue = isActive
  }

  const imgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isTrue ? 'minus' : 'plus'

  const buttonClick = () => {
    clickBtn(id)
  }

  return (
    <li className="faq-item">
      <div className="first-container">
        <h1 className="question">{questionText}</h1>
        <button className="button" type="button" onClick={buttonClick}>
          <img src={imgUrl} alt={altText} className="image" />
        </button>
      </div>
      {isTrue && (
        <>
          <hr />
          <p className="answer">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
