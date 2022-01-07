// Write your code here.
import './index.css'

const FaqItem = props => {
  const {item, isQuestioned, questionToTrue} = props
  const {id, questionText, answerText} = item
  const plusIcon = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
      className="image"
    />
  )
  const minusIcon = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      alt="minus"
      className="image"
    />
  )
  const element = (
    <div className="answer-container">
      <hr className="line" />
      <p className="answer">{answerText}</p>
    </div>
  )

  const onAskQuestion = () => {
    questionToTrue(id)
  }

  return (
    <li className="list-item">
      <div className="q-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onAskQuestion}>
          {isQuestioned ? minusIcon : plusIcon}
        </button>
      </div>
      {isQuestioned && element}
    </li>
  )
}

export default FaqItem
