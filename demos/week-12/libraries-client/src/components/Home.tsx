import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

// Define ans export the Home component
const Home = () => {
    return (
        <>
            <h1>
                <FontAwesomeIcon icon={faBook} className="me-2" />
                About the LibraryApp
            </h1>
            <p>
                This website accumulates the libraries in India and some of the popular genres of books they have. The details come from a json server and the website uses this data. We can also update the data in the server which is not covered in this app.
            </p>
        </>
    );
}
 
export default Home;