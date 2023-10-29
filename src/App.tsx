import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import UpdatePage from "./routes/UpdatePage";
import Home from "./routes/Home";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/restaurants/:id/update"
                        element={<UpdatePage />}
                    />
                    <Route
                        path="/restaurants/:id"
                        element={<RestaurantdetailPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
