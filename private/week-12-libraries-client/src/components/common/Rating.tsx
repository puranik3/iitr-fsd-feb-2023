import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty }  from '@fortawesome/free-regular-svg-icons'

import './Rating.css'

type Props = {
    rating : number,
    className : string
}

function Rating( { rating, className } : Props) {
    const fullStars = Math.floor(rating)
    const halfStars = Math.round(rating) - Math.floor(rating)
    const emptyStars = 5 - (fullStars + halfStars)

    return (
        <span className={`starColor ${className}`}>
            {
                Array.from( {length : fullStars} ).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStar} key={idx}/>
                    )
                )
            }
            {
                Array.from( {length : halfStars} ).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStarHalfAlt} key={idx}/>
                    )
                )
            }
            {
                Array.from( {length : emptyStars} ).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStarEmpty} key={idx}/>
                    )
                )
            }
        </span>    
    )
}

Rating.defaultProps = {
    rating : 3.7,
    className : "me-2"
}

export default Rating