import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./defaultLayout/DefaultLayout";
import Home from "./pages/Home";

export default function app() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
