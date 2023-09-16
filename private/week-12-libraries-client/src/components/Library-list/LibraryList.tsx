import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import ILibrary from "../../models/ILibrary";
import LibraryItem from "./LibraryItem";
import Loading from "../common/Loading";

import { LoadingStatus } from "../../models/types";

import { getLibrary } from '../../services/library'

type Props = {}

type State = {
    status : LoadingStatus,
    library? : ILibrary[],
    error? : Error
}

class LibraryList extends Component<Props, State> {
    state : State = {
        status : "LOADING"
    }

    render () {
        let el
        const {status, library, error} = this.state

        switch ( status) {
            case "LOADING":
                el = (
                    <Loading size="large" message="Please wait...."/>
                )
                break;

            case "LOADED":
                el = (
                    <Row xs={1} m={2} lg={3}>
                        {
                            library?.map(
                                lib => (
                                    <Col key={lib.id} className="d-flex align-items-stretch my-3">
                                        <LibraryItem library={lib}/>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
                break;
            case "ERROR":
                el = (
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                )
                break;
            default:
                break;
        }

        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getLibrary();
            this.setState({
                status: 'LOADED',
                library: data
            });
        } 
        catch( error :any) {
            this.setState({
                status: 'ERROR',
                error : error
            });
        }
    }
}

export default LibraryList