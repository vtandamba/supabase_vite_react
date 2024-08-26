import React from "react";
import Error from "../pages/Error";
import DocAdmin from "../pages/DocAdmin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {

    return <>


        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="administration-info" element={<DocAdmin />} />
            </Routes>
        </BrowserRouter>

    </>
}

export default App;
