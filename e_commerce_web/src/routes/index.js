import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navigation from "../components/Navigation";
import Cart from "../components/Cart";
import Home from "../components/Home";


let MainRouter = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>    
        </Router>
    )
}

export default MainRouter;