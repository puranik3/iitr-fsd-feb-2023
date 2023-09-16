import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import LibraryList from "./components/Library-list/LibraryList";
import LibraryDetails from "./components/Libraries/LibraryDetails";

import "./App.css";

function App() {
    return (
        <>
            <Navigation />
            
            <Container>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/libraries/:id" component={LibraryDetails} />
                    <Route path="/libraries" component={LibraryList} />
                    <Route path="/" component={Home} />
                </Switch>
            </Container>
        </>
    );
}

export default App;