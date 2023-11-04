import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty  }  from '@fortawesome/free-regular-svg-icons';

// import css file
import './Rating.css';

// define Props type with rating and className
type Props = {
    rating: number,
    color: string
};

// define Rating component with default props and export
const Rating = ( { rating, color } : Props ) => {
    // const { rating } = props;

    const numFullStars = Math.floor( rating );
    const hasHalfStar = rating - numFullStars >= 0.5;
    const numEmptyStars = 5 - numFullStars - ( hasHalfStar ? 1 : 0 );
    
    return (
        <span className="starColor" style={{ color: color }}>
            {
                Array( numFullStars ).fill( 1 ).map(
                    item => <FontAwesomeIcon icon={faStar} />
                )
            }
            {
                hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />
            }
            {
                Array( numEmptyStars ).fill( 1 ).map(
                    item => <FontAwesomeIcon icon={faStarEmpty} />
                )
            }
        </span>
    );
}

Rating.defaultProps = {
    rating: 5,
    color: 'goldenrod'
};
 
export default Rating;