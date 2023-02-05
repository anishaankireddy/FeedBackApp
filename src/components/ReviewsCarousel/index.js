// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {carouselNo: 0}

  onDecreaseCount = () => {
    const {carouselNo} = this.state
    if (carouselNo > 0) {
      this.setState(prevState => ({carouselNo: prevState.carouselNo - 1}))
    }
  }

  onIncreaseCount = () => {
    const {reviewsList} = this.props
    const {carouselNo} = this.state
    if (carouselNo < reviewsList.length - 1) {
      this.setState(prevState => ({carouselNo: prevState.carouselNo + 1}))
    }
  }

  render() {
    const {carouselNo} = this.state
    const {reviewsList} = this.props
    const carousel = reviewsList[carouselNo]
    const {imgUrl, username, companyName, description} = carousel

    return (
      <div className="carousel-bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="user-image" />
        <div className="arrow-container">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onDecreaseCount}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <p className="username">{username}</p>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onIncreaseCount}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
