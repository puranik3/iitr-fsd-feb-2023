import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Home from './components/Home';
import LibraryList from './components/Library-list/LibraryList';
import LibraryDetails from './components/Libraries/LibraryDetails';
import About from './About';

const App = () => {
    return (
        <div>
            <Menu />

            <Container className="my-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/libraries" element={<LibraryList />} />
                    <Route path="/libraries/:id" element={<LibraryDetails />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;