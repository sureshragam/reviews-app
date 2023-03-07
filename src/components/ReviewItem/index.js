import './index.css'

const ReviewItem = props => {
  const {name, image, companyName, description} = props

  return (
    <>
      <img src={image} alt={name} className="profile" />
      <p className="username">{name}</p>
      <p className="company-name">{companyName}</p>
      <p className="description">{description}</p>
    </>
  )
}

export default ReviewItem
