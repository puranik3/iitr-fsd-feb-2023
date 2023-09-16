import { Spinner } from "react-bootstrap"

type Props = {
    size : "small" | "medium" | "large",
    message : string
}

const dynamicSize = {
    small : {
        width : "1.5rem",
        height : "1.5rem"
    },
    medium : {
        width : "2rem",
        height : "2rem"
    },
    large : {
        width : "5rem",
        height : "5rem"
    },
}

function Loading (props : Props) {
    return (
        <div className="d-flex flex-column align-items-center my-4">
            <Spinner animation="border" role="status" style={dynamicSize[props.size]}>
                <span className="visually-hidden">{props.message}</span>
            </Spinner>
            <span className="my-3">{props.message}</span>
        </div>
    )
}

Loading.defaultProps = {
    size : "medium",
    message : "Loading"
}

export default Loading