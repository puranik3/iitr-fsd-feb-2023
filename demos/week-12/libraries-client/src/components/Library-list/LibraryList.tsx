import { useEffect, useState } from 'react';
import { Alert, Spinner, Row, Col } from 'react-bootstrap';
import { getLibraries } from '../../services/library';
import ILibrary from '../../models/ILibrary';
import LibraryItem from './LibraryItem';

const LibraryList = () => {
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState( true );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getLibraries();
                    setLibraries( data );
                } catch( error ) {
                    setError( error as Error );
                }

                setLoading( false );
            }
            
            helper();
        },
        []
    );

    return (
        <>
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
                ( !loading && !error ) && (
                    <Row xs={1} md={2} lg={3}>
                        {
                            libraries.map(
                                library => (
                                    <Col key={library.id} className="d-flex align-item-stretch mb-3">
                                        <LibraryItem library={library} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
        </>
    );
}
 
export default LibraryList;