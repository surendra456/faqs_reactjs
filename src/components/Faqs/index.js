// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="head">FAQs</h1>
          <ul className="un-list">
            {faqsList.map(each => (
              <FaqItem key={each.id} faqDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
