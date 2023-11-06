import { Col, Row } from 'react-bootstrap';

import IGenre from "../../models/IGenre";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    genre : IGenre
}

const GenresListItem = ( { genre } : Props) => {
    const { id, name, description, imageUrl } = genre;

    return (
        <div className="mt-5">
            <Row key={id} className="my-3">
                <Col xs={6} lg={3}>
                    <img src={`${baseUrl}${imageUrl}`} 
                        alt={name}
                        className="w-100"
                    />
                </Col>
                <Col xs={6} lg={9}>
                    <h5>{name}</h5>
                    <div className="my-2 text-sm">{description}</div>
                </Col>
            </Row>
        </div>
    );
}

export default GenresListItem;