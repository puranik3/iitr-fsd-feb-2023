import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import Rating from "../common/Rating"

import ILibrary from "../../models/ILibrary"

type Props  = {
    library : ILibrary
}

function LibraryItem (props : Props) {
    const {
        id,
        name,
        location,
        rating,
        noOfRatings,
        imageUrl
    } = props.library

    return (
        <Card>
            <Card.Img variant="top" src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        {name}
                        <div className="text-xs">
                            <Rating rating={rating}/>
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
    )
}
export default LibraryItem