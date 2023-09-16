import { useEffect, useState } from "react"
import { Alert, Col, Row } from "react-bootstrap"

import Loading from "../common/Loading"

import IBookList from "../../models/IBookList"
import { getGenres } from "../../services/genres"

type Props = {
    id : number
}

const Menu = (props : Props) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<IBookList[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [show, setShow] = useState<boolean>(false)

    useEffect(()=>{
        const fetchMenu = async () => {
            try {
                const data = await getGenres(props.id)
                setItems(data)
            }
            catch (error : any) {
                setError(error?.response?.data?.message || error.message)
                setShow(true)
            }
            finally {
                setLoading(false)
            }
        }
        fetchMenu()
    },[])

    return (
        <>
           {
               loading && (
                   <Loading size="large" message="Loading Menu. Please wait..."/>
               )
           }
           {
                items && (
                    <>
                        <hr />
                        <h3>Famous Genres in this Library</h3>
                        {
                            items.map (
                                ( {id, name, description, imageUrl}) => (
                                    <Row key={id} className="my-3">
                                        <Col xs={6} lg={3}>
                                            <img src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`} 
                                                alt={name}
                                                className="w-100"
                                            />
                                        </Col>
                                        <Col xs={6} lg={9}>
                                            <h5>{name}</h5>
                                            <div className="my-2 text-sm">{description}</div>
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                    </>
               )
           }
           {
               error && (
                   <>
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                   </>
               )
           }
        </>
    )
}

export default Menu;