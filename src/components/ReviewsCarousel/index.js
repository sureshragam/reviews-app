// Write your code here
import {Component} from 'react'
import './index.css'
import ReviewItem from '../ReviewItem'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onIncrement = () => {
    this.setState(prevState => ({id: prevState.id + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.id > 0) {
        return {id: prevState.id - 1}
      }
      return {id: prevState.id}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="main-container">
        <h1>Reviews</h1>
        <div className="review-card">
          <button
            type="button"
            onClick={this.onDecrement}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="review-content">
            <ReviewItem
              name={username}
              image={imgUrl}
              companyName={companyName}
              description={description}
              key={username}
            />
          </div>
          {id < reviewsList.length - 1 ? (
            <button
              type="button"
              onClick={this.onIncrement}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          ) : null}
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
