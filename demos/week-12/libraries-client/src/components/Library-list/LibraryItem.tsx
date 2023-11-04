import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ILibrary from '../../models/ILibrary';
import Rating from '../common/Rating';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    library: ILibrary
}

const LibraryItem = ( props : Props ) => {
    const { name, rating, noOfRatings, location, imageUrl, id } = props.library;

    return (
        <Card>
            <Card.Img variant="top" src={`${baseUrl}${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        {name}
                        <div className="text-xs">
                            {/* <Rating rating={rating} color="crimson" /> */}
                            <Rating rating={rating} />
                            {rating} ({noOfRatings} rated)
                        </div>
                    </div>
                    <div>
                        <Link to={`/libraries/${id}`} className="btn btn-primary btn-sm" >
                            More
                        </Link>
                    </div>
                </Card.Title>
                <Card.Text>
                    <span> <b>Address: </b></span>{location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default LibraryItem;