import Home from "./components/templates/Home";
import PlaceDetail from "./components/templates/PlaceDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Constants
import { PAGE_PLACE_DETAIL } from "./components/constants";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`${PAGE_PLACE_DETAIL}/:id`} element={<PlaceDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
