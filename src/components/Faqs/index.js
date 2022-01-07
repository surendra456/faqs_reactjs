// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isQuestioned: false}

  questionToTrue = () => {
    this.setState(prev => ({isQuestioned: !prev.isQuestioned}))
  }

  render() {
    const {faqsList} = this.props
    const {isQuestioned} = this.state

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="head">FAQs</h1>
          <ul className="un-list">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                item={each}
                isQuestioned={isQuestioned}
                questionToTrue={this.questionToTrue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
