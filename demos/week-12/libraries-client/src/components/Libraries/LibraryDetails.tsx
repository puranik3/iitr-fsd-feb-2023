import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';

import ILibrary from "../../models/ILibrary";
import { getLibraryById } from "../../services/library";
import Rating from "../common/Rating";
import GenresList from "./GenresList";


const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Params = {
    id: string;
};

const LibraryDetails = () => {
    // what was id in :id when the component rendered?
    const { id } = useParams<Params>();

    const [library, setLibrary] = useState<ILibrary | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const helper = async () => {
            try {
                const data = await getLibraryById(id as string);
                setLibrary(data);
            } catch (error) {
                setError(error as Error);
            }

            setLoading(false);
        };

        helper();
    }, []);

    return (
        <div>
            {
                !loading && !error && library && (
                    <Row>
                        <Col xs={12} className="my-2">
                            <h1>{library.name}</h1>
                        </Col>
                        <Col xs={12} lg={4} className="my-2">
                            <img src={`${baseUrl}${library.imageUrl}`} alt={library.name} className="w-100" />
                        </Col>
                        <Col xs={12} lg={8}>
                            <div className="fs-5 my-2 ">{library.description}</div>
                            <Row xs={3} className="text-sm my-2">
                                <Col>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="ms-2">
                                        {library.opens} - {library.closes}
                                    </span>
                                </Col>
                                <Col>
                                    <span className="me-2">
                                        <Rating rating={library.rating} />
                                    </span>
                                    {library.rating} ({library.noOfRatings} ratings)
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )
            }
            <GenresList id={id} />
        </div>
    );
};

export default LibraryDetails;
