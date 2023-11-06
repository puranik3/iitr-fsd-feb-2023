import { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";

import GenresListItem from "./GenresListItem";
import IGenre from "../../models/IGenre";
import { getGenres } from "../../services/genres";

type Props = {
    id : string | undefined
}

const GenresList = ( { id } : Props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(
        () => {
            const fetchGenres = async () => {
                if( id ) {
                    try {
                        const data = await getGenres(id as string);
                        setGenres(data);
                    }
                    catch (error : any) {
                        setError(error?.response?.data?.message || error.message);
                        setLoading(false);
                    }
                    finally {
                        setLoading(false);
                    }
                }
            }

            fetchGenres()
        },
        [ id ]
    );

    return (
        <div className="mt-5">
            {
                loading && (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )
            }
            {
                ( !loading && error ) && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                ( !loading && !error ) && genres && (
                    <>
                        <h3>Famous Genres in this Library</h3>
                        <hr />
                        {
                            genres.map (
                                genre => (
                                    <GenresListItem genre={genre} key={genre.id} />
                                )
                            )
                        }
                    </>
               )
           }
        </div>
    )
}

export default GenresList;