import { useState } from 'react'
import './App.css'
import starIcon from '../images/icon-star.svg'
import thankYouImg from '../images/illustration-thank-you.svg'

function App() {
  const [rating, setRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="card thank-you-card">
        <img src={thankYouImg} alt="Thank you" className="thank-you-img" />
        <div className="rating-result">
          You selected {rating} out of 5
        </div>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don't hesitate to get in touch!
        </p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="icon-container">
        <img src={starIcon} alt="Star" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((num) => (
            <button 
              type="button" 
              key={num}
              className={`rating-btn ${rating === num ? 'selected' : ''}`}
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button type="submit" className="submit-btn" disabled={!rating}>
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default App
